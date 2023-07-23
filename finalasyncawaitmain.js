
const mysql=require('mysql2/promise');

console.log('start  :'+Date());

const main= async()=>{
    const cnnctn=await mysql.createConnection({
        host:'public.nhumf.tyo2.database-hosting.conoha.io',
        user:'nhumf_sion',
        password:'Noriyuki6403',
        database:'nhumf_sion'
    });
    //const loadTable=()=>cnnctn.query('select distinct syu_ymd from select_locale_child_202212011001_cp_csv');
    //const strsql='select distinct syu_ymd,bin_kb,haibun_mad from select_locale_child_202212011001_cp_csv';
    const strsql='select syu_ymd,bin_kb,haibun_mad,ad_ten_no,haiso_course,haiso_order,ten_no,ten_nm_kanji from select_locale_child_202212011001_cp_csv order by syu_ymd,bin_kb,haibun_mad,ad_ten_no';
    const loadTable=()=>cnnctn.execute(strsql);
    const result=await loadTable();
    
    const selectResult=result[0];
    for (var i=0;i<selectResult.length;i++ ){
        //console.log(i+'*****'+['sym_ymd'][i]);       
        var a_row=selectResult[i];
        console.log((i+1)+'*****'+a_row.syu_ymd+','+a_row.bin_kb+','+a_row.haibun_mad+','+a_row.ad_ten_no+','+a_row.haiso_course+','+a_row.haiso_order+','+a_row.ten_no+','+a_row.ten_nm_kanji);

    }
    console.log('shops  :'+selectResult.length);
    console.log('       :'+result.length);//ok

    //
    cnnctn.end();//!!!go!!!
    console.log(`end    :`+Date());
};
//
//
//
main();

