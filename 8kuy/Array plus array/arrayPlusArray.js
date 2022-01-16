function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((sum, value) => sum += value) + arr2.reduce((sum, value) => sum += value); //something went wrong
  }


arrayPlusArray([1, 2, 3], [4, 5, 6]); 
arrayPlusArray([-1, -2, -3], [-4, -5, -6]);
arrayPlusArray([0, 0, 0], [4, 5, 6]);
arrayPlusArray([100, 200, 300], [400, 500, 600]);