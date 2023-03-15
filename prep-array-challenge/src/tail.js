/* exported tail */
function tail(arr) {
  const arr2 = [];
  for (let i = 1; i < arr.length; i++) {
    arr2.push(arr[i]);
  }
  return arr2;
}
