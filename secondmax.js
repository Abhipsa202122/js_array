// 6.Find the First Maximum, Second maximum, Third maximum number from the List.'''
let c=require("readline-sync");
let l=c.question("enter no");
var m=0;
let list=[]
for (let i=1;i<=l;i++) {
  let n=c.question("enter no")
  list.push(n)
}
var m=list[0];
for (let j=0;j<list.length;j++) {
  if (m<list[j]) {
      [m=list[j]]
  }
}
console.log(m)