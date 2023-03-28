const { fileNanme, logger } = require('../../log4.js');
const BranchServices = require('../../services/branch_services');

var fname;

fileNanme(__filename).then((data) => {
  fname = data;
});

const getBranches = async (req, res) => {
  try {
    logger.info(`file: ${fname} getBranches is called`);
    let result = await BranchServices.getBranches(req);
    res.send({
      Status: {
        StatusCode: 200,
        StatusType: 'Success',
        StatusMessage: 'Records found',
        StatusSeverity: 'Information',
      },
      result,
    });
  } catch (err) {
    logger.fatal(`file: ${fname},error: ${err}`);
    res
      .status(500)
      .json({ status: { statuscode: 500, statusType: 'failure', error: err } });
  }
};

const getBranchById = async (req, res) => {
  try {
    logger.info(`file: ${fname} getBranchById is called`);
    let result = await BranchServices.getBranchById(req);
    res.send({
      Status: {
        StatusCode: 200,
        StatusType: 'Success',
        StatusMessage: 'Records found',
        StatusSeverity: 'Information',
      },
      result,
    });
  } catch (err) {
    logger.fatal(`file: ${fname},error: ${err}`);
    res
      .status(500)
      .json({ status: { statuscode: 500, statusType: 'failure', error: err } });
  }
};

const addNewBranch = async (req, res) => {
  try {
    logger.info(`file: ${fname} addNewBranch is called`);
    let result = await BranchServices.addNewBranch(req);

    res.send({
      Status: {
        StatusCode: 200,
        StatusType: 'Success',
        StatusMessage: 'Record Added',
        StatusSeverity: 'Information',
      },
      result,
    });
  } catch (err) {
    logger.fatal(`file: ${fname},error: ${err}`);
    res
      .status(500)
      .json({ status: { statuscode: 500, statusType: 'failure', error: err } });
  }
};

const deleteBranchById = async (req, res) => {
  try {
    logger.info(`file: ${fname} deleteBranchById is called`);
    let result = await BranchServices.deleteBranchById(req);
    res.send({
      Status: {
        StatusCode: 200,
        StatusType: 'Success',
        StatusMessage: 'Record deleted',
        StatusSeverity: 'Information',
      },
      result,
    });
  } catch (err) {
    logger.fatal(`file: ${fname},error: ${err}`);
    res
      .status(500)
      .json({ status: { statuscode: 500, statusType: 'failure', error: err } });
  }
};

const updateBranch = async (req, res) => {
  try {
    logger.info(`file: ${fname} updateBranch is called`);
    let result = await BranchServices.updateBranch(req);
    res.send({
      Status: {
        StatusCode: 200,
        StatusType: 'Success',
        StatusMessage: 'Record updated',
        StatusSeverity: 'Information',
      },
      result,
    });
  } catch (err) {
    logger.fatal(`file: ${fname},error: ${err}`);
    res
      .status(500)
      .json({ status: { statuscode: 500, statusType: 'failure', error: err } });
  }
};

const branchFilter = async (req, res) => {
  try {
    logger.info(`file: ${fname} branchFilter is called`);
    let result = await BranchServices.branchFilter(req);
    if (result != undefined) {
      res.send({
        Status: {
          StatusCode: 200,
          StatusType: 'Success',
          StatusMessage: 'Records found ',
          StatusSeverity: 'Information',
        },
        result,
      });
    } else {
      err = 'no result from branch repo';
      throw err;
    }
  } catch (err) {
    logger.fatal(`file: ${fname},error: ${err}`);
    res
      .status(500)
      .json({
        status: { statuscode: 500, statusType: 'failure', error: `${err}` },
      });
  }
};

const getBranchNameById = async (req, res) => {
  try {
    logger.info(`file: ${fname} getBranchNameById is called`);
    let result = await BranchServices.getBranchNameById(req);
    res.send({
      Status: {
        StatusCode: 200,
        StatusType: 'Success',
        StatusMessage: 'Records found',
        StatusSeverity: 'Information',
      },
      result,
    });
  } catch (err) {
    logger.fatal(`file: ${fname},error: ${err}`);
    res
      .status(500)
      .json({ status: { statuscode: 500, statusType: 'failure', error: err } });
  }
};

module.exports = {
  getBranches,
  getBranchById,
  addNewBranch,
  deleteBranchById,
  updateBranch,
  branchFilter,
  getBranchNameById
};