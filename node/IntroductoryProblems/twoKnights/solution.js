// Test with specific test case:
// cat IntroductoryProblems/twoKnights/tests/1.in | node IntroductoryProblems/twoKnights/solution.js

// Test against all test cases with:
// node test IntroductoryProblems/twoKnights

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10);
  solveProblem(n);
});

function solveProblem(n) {
  console.log("n:", n);
}
