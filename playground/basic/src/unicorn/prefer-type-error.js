/* eslint-disable unicorn/prefer-type-error */

const foo = []

// ❌
if (Array.isArray(foo) === false) {
  throw new Error('Array expected')
}

// ✅
if (Array.isArray(foo) === false) {
  throw new TypeError('Array expected')
}
