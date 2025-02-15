// Test with specific test case:
// cat SortingAndSearching/sumOfTwoValues/tests/1.in | node SortingAndSearching/sumOfTwoValues/solution.js

// Test against all test cases with:
// node test SortingAndSearching/sumOfTwoValues

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, x] = lines[0].split(' ').map(Number);
  const arr = lines[1].split(' ').map(Number);
  solveProblem(n, x, arr);
});

function solveProblem(n, x, arr) {
  console.log("n:", n, "\nx:", x, "\nArray:", arr);
}
