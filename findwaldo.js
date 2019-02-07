//  function that finds "Waldo" in an array of strings and returns Waldo's index number
function findWaldo(arr, found) {
  //  for each element in the array (where element is the value & index is the position in the array)
  arr.forEach(function(element, index) {
    //  if the array value is Waldo
    if (element === "Waldo") {
      //  execute found
      found(index);   // execute callback
    }
  });
}

//prints where waldo is in the array (index position)
function actionWhenFound(index) {
  console.log("Found Waldo at index " + index);
}
//passing the array through function find waldo & executing action when found
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

//actionWhenFound becomes "found" when passed through the findWaldo function