async function main() {
  // get the client
  const mysql = require('mysql2/promise');
  // create the connection
  const connection = await mysql.createConnection({host:'public.nhumf.tyo2.database-hosting.conoha.io', user: 'nhumf_sion', database: 'nhumf_sion'});
  // query database
  const [rows, fields] = await connection.execute('select distinct syu_ymd from from select_locale_child_202212011001_cp_csv');
}