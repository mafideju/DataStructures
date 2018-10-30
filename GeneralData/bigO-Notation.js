//Big O: 0(1) => Constant Runtime
//Ex: Linked List (Add / Remove)
const log = array => {
  console.log(array[0]);
  console.log(array[1]);
}

log([1, 2, 3, 4]);
log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);



// Big O: 0(n) => Linear Runtime (Increase Proportionally)
//Ex: Linked List (Search)

const logAll = array => {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index])
  }
}

logAll([1, 2, 3, 4, 5]);
logAll([1, 2, 3, 4, 5, 6, 7]);
logAll([1, 2, 3, 4, 5, 6, 7, 8, 9]);



// Big O: 0(n^2) => Exponential Runtime
const addAndLog = array => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) [
      console.log(array[i] + array[j])
    ]
  }
}

addAndLog(['A', 'B', 'C']); // 9 pairs
addAndLog(['A', 'B', 'C', 'D']); // 16 pairs
addAndLog(['A', 'B', 'C', 'D', 'E']); // 25 pairs



// Big O: 0(log n)
const binarySearch = (array, key) => {
  let low = 0;
  let mid;
  let high = array.length - 1;
  let element;

  while (low <= high) {
    mid = Math.floor((low + high) / 2, 10);
    element = array[mid];
    if (element < key) {
      low = mid + 1
    } else if (element > key) {
      high = mid - 1
    } else {
      return mid;
    }
  }
  return -1
}