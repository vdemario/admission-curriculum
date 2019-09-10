const fs = require('fs')
const fse = require('fs-extra')
const argv = require('minimist')(process.argv.slice(2));
const replace = require('replace-in-file');
const parse = require('./parse')

// variables that are required from ".typeformrc" file
const requiredTypeformKeys = new Set([
  "TYPEFORM_ID_BASE_LINE_QUESTIONNAIRE",
  "TYPEFORM_ID_TESTS_READING",
  "TYPEFORM_ID_TESTS_LOGIC",
  "TYPEFORM_ID_TESTS_PERSONALITY",
  "TYPEFORM_ID_TESTS_EMOTIONAL_INTELLIGENCE",
  "TYPEFORM_ID_TESTS_MATH",
])
const availableLocales = ['es-ES', 'pt-BR']

if (!argv.env) {
  throw new Error('--env argument not provided, ex: --env=development')
}

const locale = argv.locale || 'es-ES'

if (! availableLocales.includes(locale)) {
  throw new Error(`locale "${locale}" is not available. Try again with "es-ES" or "pt-BR"`)
}


/**
 * Load typeform variables from ".typeformrc" file
 */
let typeformVars = null
const topicId = `admission-${locale.split('-')[0]}`
const typeformrcFilePath = `${topicId}/.typeformrc`

if (!fs.existsSync(typeformrcFilePath)) {
  throw new Error('".typeformrc" file not found in the root folder')
}

try {
  const file = fs.readFileSync(typeformrcFilePath, 'utf8')
  typeformVars = JSON.parse(file)
} catch(error) {
  throw error
}

/**
 * Check typeform variables required
 */
if (!typeformVars[argv.env]) {
  throw new Error(`"${argv.env}" key not found inside ".typeformrc" file`)
}

requiredTypeformKeys.forEach(key => {
  if (!typeformVars[argv.env].hasOwnProperty(key) || ! typeformVars[argv.env][key]) {
    throw new Error(`"${key}" not found inside the ".typeformrc" file`)
  }
})


/**
 * Copy source content to build folder
 */
const pathDestination = `build/${topicId}`

try {
  fse.emptyDirSync(pathDestination)
  fse.copySync(topicId, pathDestination)
} catch (error) {
  throw error
}


/**
 * Replace texts inside files of build folder with typeform variables from
 * .typeformrc according to the environment chosen
 */
try {
  Object.keys(typeformVars[argv.env]).forEach((key) => {
    replace.sync({
      files: pathDestination + '/**/*.md',
      from: key,
      to: typeformVars[argv.env][key]
    })
  })
  console.info(`The ${pathDestination} directory was compiled successfully!!`)
} catch (error) {
  throw error
}

parse([{ type: 'topic', id : topicId, locale }])
  .then(results => {
    const hasErrors = results.reduce(
      (memo, { result }) => memo || result instanceof Error,
      false,
    );
    process.exit(hasErrors ? 1 : 0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
