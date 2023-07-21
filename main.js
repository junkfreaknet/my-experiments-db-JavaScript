const mysql=require('mysql2/promise');

(async()=>{
    
    console.log('start  :'+Date());

    const cnnctn=mysql.createConnection(
        {
            host:'public.nhumf.tyo2.database-hosting.conoha.io',
            user:'nhumf_sion',
            password:'Noriyuki6403',
            database:'nhumf_sion'
        }
    );

    try{

        const strsql='select distinct syu_ymd from select_locale_child_202212011001_cp_csv';
        console.log('sql is :'+sql);
        const [rows,fields]=(await cnnctn.query(sql));

        for (const val of rows){
            console.log(val);
        }
    }
    catch(e){
        console.log('error*****:'+e);
    }
    finally{
        (await cnnctn).end();
    }
    console.log('end    :'+Date());

})();