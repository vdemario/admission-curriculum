const argv = require('minimist')(process.argv.slice(2))
const parse = require('./parse')

const availableLocales = ['es-ES', 'pt-BR']

const locale = argv.locale || 'es-ES'

if (!availableLocales.includes(locale)) {
  throw new Error(
    `locale "${locale}" is not available. Try again with "es-ES" or "pt-BR"`
  )
}

parse([locale])
  .then(results => {
    const hasErrors = results.reduce(
      (memo, { result }) => memo || result instanceof Error,
      false
    )
    process.exit(hasErrors ? 1 : 0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
