function genfib() {
    let [first, second] = [0, 1];
    return function fib() {
      const val = first;
      [first, second] = [second, first + second];
      return val;
    };
  }