
const mysql=require('mysql2/promise');

async function main(){
    const cnnctn=await mysql.createConnection({
        host:'public.nhumf.tyo2.database-hosting.conoha.io',
        user:'nhumf_sion',
        password:'Noriyuki6403',
        database:'nhumf_sion'
    })
    await console.log('main :'+Date());
};


//execute main
console.log('start  :'+Date());
main();
console.log('end    :'+Date());