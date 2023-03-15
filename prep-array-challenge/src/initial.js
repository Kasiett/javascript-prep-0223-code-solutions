/* exported initial */
function initial(arr) {
  const arr2 = [];
  for (let i = 0; i < arr.length - 1; i++) {
    arr2.push(arr[i]);
  }
  return arr2;
}
