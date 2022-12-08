// find():The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
// ex:
const ages=[3,10,18,20];
function checkAge(age){
  return age>18;
}
function myFunction(){
ages.find(checkAge);
}
console.log(checkAge)
