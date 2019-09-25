const chalk = require('chalk')

module.exports = function(color, ms = 100) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof chalk[color] !== 'function') {
        reject(new Error(`Couldn't find color ${color}`))
      }
      else {
        resolve(chalk[color](color))
      }
    }, ms)
  })
}
