
const mysql=require('mysql2');

const cnnctn=mysql.createConnection({
    host:"public.nhumf.tyo2.database-hosting.conoha.io",
    user:"nhumf_sion",
    password:"Noriyuki6403",
    database:"nhumf_sion"
});


const promise_proc=new Promise();
