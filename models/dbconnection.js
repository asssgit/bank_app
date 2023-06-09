require('dotenv').config();

var mysql = require('mysql');

var pool = mysql.createPool({
  connectionLimit: process.env.DB_MAX_CONNECTION,
  host: process.env.SERVER,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

async function queryDatabase() {
  try {
    pool.getConnection((err, connection) => {
      if (err) {
        throw err;
      }
      console.log('Database connected successfully');
      // connection.query("select * from branch", (err, data) => {
      //   if (err){ throw err};
      //   console.log(data);
      // });
      connection.release();
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
}

queryDatabase();

const ConnectToDb = async () => {
  return new Promise((resolve, reject) => {
    try {
      pool.getConnection(async (err, conn) => {
        err ? reject(err) : resolve(conn);
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  });
};

const ExecuteQuery = async (conn, queryString) => {
  return new Promise((resolve, reject) => {
    try {
      conn.query(queryString, (err, data) => {
        err ? reject(err) : resolve(data);
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  });
};

module.exports = {
  ConnectToDb,
  ExecuteQuery,
};
