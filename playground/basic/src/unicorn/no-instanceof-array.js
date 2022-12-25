/* eslint-disable unicorn/no-instanceof-array */

const arr = []

// ❌
console.log(arr instanceof Array)

// ✅
console.log(Array.isArray(arr))
