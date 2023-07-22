/* eslint-env es6 */
const mysql = require('mysql2/promise'); // or require('mysql2').createConnectionPromise
mysql.createConnection({ /* same parameters as for non-promise createConnection */ })
  .then(conn => conn.query('select foo from bar'))
  .then(([rows, fields]) => console.log(rows[0].foo));

const pool = require('mysql2/promise').createPool({}); // or require('mysql2').createPoolPromise({}) or require('mysql2').createPool({}).promise()
pool.getConnection()
  .then(conn => {
    const res = conn.query('select foo from bar');
    conn.release();
    return res;
  }).then(result => {
    console.log(result[0][0].foo);
  }).catch(err => {
    console.log(err); // any of connection time or query time errors from above
  });