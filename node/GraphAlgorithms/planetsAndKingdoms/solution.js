// Test with specific test case:
// cat GraphAlgorithms/planetsAndKingdoms/tests/1.in | node GraphAlgorithms/planetsAndKingdoms/solution.js

// Test against all test cases with:
// node test GraphAlgorithms/planetsAndKingdoms

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number);
  const teleporters = lines.slice(1).map(line => line.split(' ').map(Number));
  solveProblem(n, m, teleporters);
});

function solveProblem(n, m, teleporters) {
  console.log("Planets:", n, "\nTeleporters:", m, "\nTeleporter data:", teleporters);
}
