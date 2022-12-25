/* eslint-disable unicorn/prefer-includes */

// ❌
;[].indexOf('foo') !== -1

// ✅
;[].includes('foo')

// of course, you can use other number
;[].indexOf('foo') !== 1
