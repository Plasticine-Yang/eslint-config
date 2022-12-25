/* eslint-disable unicorn/throw-new-error */
/* eslint-disable no-unused-vars */

// ❌
const bar = () => {
  throw Error('error')
}

// ✅
const foo = () => {
  throw new Error('error')
}
