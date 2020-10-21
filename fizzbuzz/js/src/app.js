/* eslint-disable no-nested-ternary */
// Impement fizzbuzz logic and returning an array
// function fizzBuzzBis(n) {
//   return Array.from({ length: n }, (_, i) =>
//     i % 15 === 0 ? 'FizzBuzz' : i % 5 === 0 ? 'Buzz' : i % 3 === 0 ? 'Fizz' : i
//   );
// }

// More readable function
function fizzBuzz(n) {
  if (n % 15 === 0) {
    return 'FizzBuzz';
  }
  if (n % 5 === 0) {
    return 'Buzz';
  }
  if (n % 3 === 0) {
    return 'Fizz';
  }
  return n;
}

// Implement the wrapper so we can count from 0 to STOP.
export function main(x) {
  if (Number(x) < 1) {
    return 'sorry papi';
  }
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= x; i++) {
    console.log(fizzBuzz(i));
  }
}

main(15);
