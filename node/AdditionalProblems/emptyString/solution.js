// Test with specific test case:
// cat AdditionalProblems/emptyString/tests/1.in | node AdditionalProblems/emptyString/solution.js

// Test against all test cases with:
// node test AdditionalProblems/emptyString

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const str = input.trim(); // Input string
  solveProblem(str);
});

function solveProblem(str) {
  console.log('Input string:', str);
}
