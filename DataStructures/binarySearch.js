const binarySearch = (array, key) => {
  let midIndex = Math.floor(array.length / 2);
  // console.log('index', midIndex)
  let midEl = array[midIndex];
  // console.log('mid el', midEl)

  if (midEl === key) {
    return true;
  }
  else if (midEl < key && array.length > 1) {
    return binarySearch(array.splice(midIndex, array.length), key);
  }
  else if (midEl > key && array.length > 1) {
    return binarySearch(array.splice(0, midIndex), key);
  }
  else {
    return false;
  }
}

const bs = binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 17);
console.log(bs)