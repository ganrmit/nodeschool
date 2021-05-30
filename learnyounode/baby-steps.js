let sum = process.argv.slice(2).reduce((acc, n) => acc + +n, 0)

console.log(sum)
