//
const mysql=require('mysql2/promise');

mysql.createConnection({
    host:'public.nhumf.tyo2.database-hosting.conoha.io',
    user:'nhumf_sion',
    password:'Noriyuki6403',
    database:'nhumf_sion'
})
.then(conn => conn.execute('select distinct syu_ymd,bin_kb,haibun_mad from select_locale_child_202212011001_cp_csv'))
.then(([rows, fields]) => console.log(rows[0]));


