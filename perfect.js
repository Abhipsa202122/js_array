let x = require("readline-sync")
let y = x.questionInt("enter ");
let i=1;
let l=[];
while (i<=y){
    let j=1;
    let c=0;
    while (j<=i){
        if (i%j==0){
            c+=1;
        j+=1;    
        }
    if (c==2){
        b=l.push(i);
    i+=1;
    console.log(b);    
    }    
    }    
}