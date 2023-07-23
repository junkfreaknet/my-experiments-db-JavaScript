
const mysql=require('mysql2/promise');

function createConnection(){

    const cnnctn=mysql.createConnection({
        host:'public.nhumf.tyo2.database-hosting.conoha.io',
        user:'nhumf_sion',
        password:'Noriyuki6403',
        database:'nhumf_sion'
    });
    return Promise((resolve)=>{
        resolve(cnnctn);
    })
}

