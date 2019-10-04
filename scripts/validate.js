const parse = require('./parse')

parse(['es-ES', 'pt-BR'], true)
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
