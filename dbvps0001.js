
const mysql=require('mysql2');
var cnnctn=mysql.createConnection({
    host:'public.nhumf.tyo2.database-hosting.conoha.io',
    user:'nhumf_sion',
    password:'Noriyuki6403',
    database:'nhumf_sion'
});

//start
console.log('start  :'+Date());

cnnctn.connect();
//console.log('connected');
const rcv=cnnctn.execute
(
    'select distinct syu_ymd from from select_locale_child_202212011001_cp_csv',
    function(err,result,fields){
        console.log(result);
        console.log(fields);

    }
);


cnnctn.end();
//console.log('disconnected');
//end
console.log('end    :'+Date());