let nextGreater = (arr, n = arr.length) => {
  var stack = new stack();
  let element, next;

  //push the first element in the stack
  stack.push(arr[0]);

  for (let i = 0; i < n; i++) {
    next = arr[i];

    if (!stack.isEmpty()) {
      element = stack.pop();

      //Print the next greater element
      while (element < next) {
        console.log(next);
        if (stack.isEmpty()) {
          break;
        }

        element = stack.pop();
      }

      //If next element is smaller then add it to the stack
      if (element > next) {
        stack.push(element)
      }
    }

    stack.push(next);
  }

  //Print the remaining next greaters
  while (!stack.isEmpty()) {
    element = stack.pop();
    next = -1;
    console.log(next);
  }
}
nextGreater([11, 13, 21, 3]);