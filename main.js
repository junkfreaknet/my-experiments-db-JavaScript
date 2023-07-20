//  remote database experiment

//  arguments
const mysql=require('mysql2');
const cnnctn=mysql.createConnection({
    host:"public.nhumf.tyo2.database-hosting.conoha.io",
    user:"nhumf_sion",
    password:"Noriyuki6403",
    database:"nhumf_sion"
});

//  start
console.log('start  :'+Date());

//  main
cnnctn.connect(function(err) {
    if (err) throw err;
    console.log("Connected to MySQL DB!");
  }
)

cnnctn.end();


//  at last
console.log('end    :'+Date());
