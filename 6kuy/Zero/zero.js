function zeroPlentiful(arr) {
    let counter = 0;
    let sequence = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        sequence++;
      } else {
        if (sequence >= 4) {
          counter++;
        } else if (sequence > 0) {
          return 0;
        }
        sequence = 0;
      }
    }
    if (sequence >= 4) {
      counter++;
    } else if (sequence > 0) {
      return 0;
    }
    return counter;
  }