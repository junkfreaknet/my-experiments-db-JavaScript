
const mysql=require('mysql2');
const cnnctn=mysql.createConnection({
    host:"public.nhumf.tyo2.database-hosting.conoha.io",
    user:"nhumf_sion",
    password:"Noriyuki6403",
    database:"nhumf_sion"
});

const fetchUser=()=>{
    return new Promise((resolve) => {
        cnnctn.connect(function(err){
            if(err) throw err;
            cnnctn.query('select distinct syu_ymd from select_locale_child_202212011001_cp_csv ',function(err,result){
                if(err) throw err;
                resolve(result);
            });
        });
        cnnctn.end(function(err){
            if(err) throw err;
        })
    });
};

const users=await fetchUser();
console.log(users);