
const mysql=require('mysql2/promise');
console.log('start  :'+Date());
//main();

async function main(){
    const cnnctn=await mysql.createConnection({
        host:'public.nhumf.tyo2.database-hosting.conoha.io',
        user:'nhumf_sion',
        password:'Noriyuki6403',
        database:'nhumf_sion'
    });
    console.log('main :'+Date());
    //cnnctn.end();
    //cnnctn.end()
    console.log(`close connection   :`+Date());
};
console.log('endendend');
console.log('end    :'+Date());
