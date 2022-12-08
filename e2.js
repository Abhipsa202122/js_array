// remove duplicate
let n=[0,0,1,1,1,2,2,3,3,4];
let i=0;
let l=[];
let c=0;
while (i<n.length){
    if (!n[i]==n){
        n.push(n[i])
        c+=1
    i+=1
console.log(c)
console.log(n)        
    }
}