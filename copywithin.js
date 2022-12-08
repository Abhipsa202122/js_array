// The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.
// ex:
const a=['a','b','h','i','p','s','a'];// copy to index 0 the element at index 3
console.log(a.copyWithin(0, 3, 6));
// expected output: Array ["d", "b", "c", "d", "e"]
// copy to index 1 all elements from index 3 to the end
console.log(a.copyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]
