const { fileNanme, logger } = require('../log4');
const DB = require('./dbconnection');

var fname;
let dbConnection;

fileNanme(__filename).then((data) => {
  fname = data;
});

exports.getBranchesRepo = async () => {
  try {
    logger.info(`file: ${fname} getBranchesRepo is called`);
    dbConnection = await DB.ConnectToDb();
    let result = await DB.ExecuteQuery(dbConnection, 'select * from branch');
    return result;
  } catch (err) {
    console.log(err, 'err from getBranchesRepo');
    logger.fatal(`file: ${fname},error: ${err}`);
  } finally {
    dbConnection.release();
  }
};

exports.getBranchById = async (data) => {
  try {
    let branchId = data.body.branch_id;
    logger.info(`file: ${fname} getBranchById is called`);
    dbConnection = await DB.ConnectToDb();
    let query = `select * from branch where branch_id=${branchId}`;
    let result = await DB.ExecuteQuery(dbConnection, query);
    return result;
  } catch (err) {
    console.log('error from getBranchById', err);
    logger.fatal(`file: ${fname},error: ${err}`);
  } finally {
    dbConnection.release();
  }
};

exports.addNewBranch = async (data) => {
  try {
    /* branch_id will be automatically generated at backend */
    let branchName = data.body.branch_name;
    let address = data.body.address;
    let city = data.body.city;
    let state = data.body.state;

    logger.info(`file: ${fname} addNewBranch is called`);
    dbConnection = await DB.ConnectToDb();
    let query = `insert into branch (branch_name, address, city, state) values('${branchName}','${address}','${city}','${state}') `;
    let result = await DB.ExecuteQuery(dbConnection, query);
    return result;
  } catch (err) {
    console.log(err, 'err from addNewBranch');
    logger.fatal(`file: ${fname},error: ${err}`);
  } finally {
    dbConnection.release();
  }
};

exports.deleteBranchById = async (data) => {
  try {
    let branchId = data.body.branch_id;
    logger.info(`file: ${fname} deleteBranchById is called`);
    dbConnection = await DB.ConnectToDb();
    let query = `delete from branch where branch_id=${branchId}`;
    let result = await DB.ExecuteQuery(dbConnection, query);
    return result;
  } catch (err) {
    console.log('error from deleteBranchById', err);
    logger.fatal(`file: ${fname},error: ${err}`);
  } finally {
    dbConnection.release();
  }
};

exports.updateBranch = async (data) => {
  try {
    let branchId = data.body.branch_id;
    let branchName = data.body.branch_name;
    let address = data.body.address;
    let city = data.body.city;
    let state = data.body.state;

    logger.info(`file: ${fname} updateBranch is called`);
    dbConnection = await DB.ConnectToDb();
    let query = `update branch set branch_name= '${branchName}',address='${address}',city='${city}',state='${state}' where branch_id = ${branchId}`;
    let result = await DB.ExecuteQuery(dbConnection, query);
    return result;
  } catch (err) {
    console.log(err, 'err from updateBranch');
    logger.fatal(`file: ${fname},error: ${err}`);
  } finally {
    dbConnection.release();
  }
};

exports.branchFilter = async (data) => {
  dbConnection = await DB.ConnectToDb();
  try {
    let filterobj = data.body;
    let request = {};
    let queryString = ` select * from branch where `;
    let string = '';

    for (let key in filterobj) {
      if (filterobj != '' || 0) {
        console.log(key, 'key');
        request[key] = filterobj[key];
      }
    }

    let count = 0;
    for (const key in request) {
      let keyValue = request[key];

      if (key == 'branch_name' && keyValue.length > 0) {        
        string = key + ' like ' + `'%${keyValue}%'`;
        count++;
      } else if (key == 'address' && keyValue.length > 0) {
        string = key + ' like ' + `'%${keyValue}%'`;
        count++;
      } else if (key == 'city' && keyValue.length > 0) {
        string = key + ' like ' + `'%${keyValue}%'`;
        count++;
      } else if (key == 'state' && keyValue.length > 0) {
        string = key + ' like ' + `'%${keyValue}%'`;
        count++;
      } else {       
        /* if no filter is applied, fetch all branches */ 
        string = 'branch_id' != 0;
        count++;
      }
      if (Object.keys(request).length != count) {
        queryString = queryString + string + ' AND ';
      } else {
        queryString = queryString + string + '  ';
      }
    }

    console.log('query is : \n ', queryString);
    let result = await DB.ExecuteQuery(dbConnection, queryString);
    return result;
  } catch (err) {
    console.log(err, 'error from branchFilter');
    logger.fatal(`file: '${fname}',error: ${err}`);
  } finally {
    dbConnection.release();
  }
};

exports.getBranchNameById = async (data) => {
  try {
    let branchId = data.body.branch_id;
    logger.info(`file: ${fname} getBranchNameById is called`);
    dbConnection = await DB.ConnectToDb();
    let query = `select branch_name from branch where branch_id=${branchId}`;
    let result = await DB.ExecuteQuery(dbConnection, query);
    return result;
  } catch (err) {
    console.log('error from getBranchNameById', err);
    logger.fatal(`file: ${fname},error: ${err}`);
  } finally {
    dbConnection.release();
  }
};