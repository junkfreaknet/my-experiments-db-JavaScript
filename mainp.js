
const mysql=require('mysql2/promise');
console.log('start  :'+Date());
//main();

const main= async()=>{
    const cnnctn=await mysql.createConnection({
        host:'public.nhumf.tyo2.database-hosting.conoha.io',
        user:'nhumf_sion',
        password:'Noriyuki6403',
        database:'nhumf_sion'
    });
    const loadTable=()=>cnnctn.query('select distinct syu_ymd from select_locale_child_202212011001_cp_csv');
    const result=await loadTable();
    //console.log(result);
    console.log(result[0]);
    console.log(await loadTable());

    //
    cnnctn.end();
    console.log(`end    :`+Date());
};
//
//
//
main();

