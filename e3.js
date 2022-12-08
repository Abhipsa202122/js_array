// 7.For example, if we give 9119  the function should return  811181, as the  square of 9 is 81 and square of 1  is 1.
let a=9119;
let b=int(a);
let i=0;
while (i<len(b)){
    console.log(int(b[i])**2,end="")
    i=i+1
}
// Output 811181