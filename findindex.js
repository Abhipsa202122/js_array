// The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
// ex:
const ages = [3, 10, 18, 20];
ages.findIndex(checkAge);
function checkAge(age) {
  return age > 18;
}
