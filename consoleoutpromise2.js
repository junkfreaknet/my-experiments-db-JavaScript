console.log('************************************');
console.log('#1');
//
new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('#2'+': 10 seconds later');
        resolve();
    },10000);
}).then(()=>{
    console.log('#3');
});