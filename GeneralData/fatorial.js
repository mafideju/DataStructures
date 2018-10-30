const factorial = num => {
  if (num === 1) {
    return num
  } else {
    return num * factorial(num - 1)
  }
}
const fact = factorial(4);

setTimeout(() => {
  console.log('total:', fact)
}, 1800);


// CONTINUA EM BST.JS