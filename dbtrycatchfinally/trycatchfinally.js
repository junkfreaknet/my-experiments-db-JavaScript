
const mysql=require('mysql2/promise');

function trycatchfinally(){
(async()=>{

    var cnnctn;

    try{
        cnnctn=await mysql.createConnection({
            host:'public.nhumf.tyo2.database-hosting.conoha.io',
            user:'nhumf_sion',
            password:'Noriyuki6403',
            database:'nhumf_sion'
        });
        
        console.log('connected');
        const strSQL='select distinct syu_ymd,bin_kb,haibun_mad,ad_ten_no,haiso_course,haiso_order,ten_no,ten_nm_kanji from select_locale_child_202212011001_cp_csv order by syu_ymd,bin_kb,haibun_mad,ad_ten_no';
        //const strSQL='select distinct syu_ymd,bin_kb,haibun_mad,ad_ten_no from select_locale_child_202212011001_cp_csv';
        const [rows,fields]= await cnnctn.execute(strSQL);    //query string execute
        displayResult(rows);        
        /**var rowarray=rows;
        var arow;
        for( var i=0;i<rowarray.length;i++){
            arow=rowarray[i];
            console.log((i+1)+','+arow.sym_ymd);
        
            
        }
        console.log('length :'+rowarray.length);**/
        
        await cnnctn.end();
    }
    catch(error){
        console.log('failed :'+error);
    }
    finally{
    
    }
})();
}

function displayResult(recieve_rows){    
    for(var i=0;i<recieve_rows.length;i++ ){
        a_row=recieve_rows[i];
        console.log((i+1)+'*****'+a_row.syu_ymd+','+a_row.bin_kb+','+a_row.haibun_mad+','+a_row.ad_ten_no+','+a_row.haiso_course+','+a_row.haiso_order+','+a_row.ten_no+','+a_row.ten_nm_kanji);
        //console.log((i+1)+'*****'+a_row.syu_ymd+','+a_row.bin_kb+','+a_row.haibun_mad);
    }
    console.log('count  :'+recieve_rows.length);
}

trycatchfinally();
