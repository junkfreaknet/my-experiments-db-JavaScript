
const mysql=require('mysql2/promise');
//var cnnctn;

(async()=>{
    
        const cnnctn= await mysql.createConnection({
                host:'public.nhumf.tyo2.database-hosting.conoha.io',
                user:'nhumf_sion',
                password:'Noriyuki6403',
                database:'nhumf_sion'
        })
        try{
                
            const [rows,fields]=await cnnctn.execute('select distinct syu_ymd from select_locale_child_202212011001_cp_csv');
            console.log(rows[0]);
            console.log(rows[0].syu_ymd);
        }
        catch(e){console.log('*****error*****'+e);}
        finally{cnnctn.end();
                console.log('end    :'+Date());}
    
    
})();
