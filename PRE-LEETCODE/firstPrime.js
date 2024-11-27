// #5 Find the First Prime Number in an Array
// Iterate over an array and find the first prime number. Stop the iteration once you find it.

function firstPrimeFinder(array) {
  if (!Array.isArray(array)) return "Invalid Array Format";

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (isPrime(element)) {
      return element;
    }
  }

  return -1;
}

// Helper function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
