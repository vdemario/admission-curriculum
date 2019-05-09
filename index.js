// TODO: Refactor code into functions
// TODO: Create unit tests
// TODO: Add support for portuguese language
const fs = require('fs')
const fse = require('fs-extra')
const argv = require('minimist')(process.argv.slice(2));
const replace = require('replace-in-file');

// variables that are required from ".typeformrc" file
const typeformKeysRequired = new Set([
  "TYPEFORM_ID_BASE_LINE_QUESTIONNAIRE_ES",
  "TYPEFORM_ID_TESTS_READING_ES",
  "TYPEFORM_ID_TESTS_LOGIC_ES",
  "TYPEFORM_ID_TESTS_PERSONALITY_ES",
  "TYPEFORM_ID_TESTS_EMOTIONAL_INTELLIGENCE_ES",
  "TYPEFORM_ID_TESTS_MATH_ES",
])

if (! argv.env) {
  throw new Error('--env argument not provided, ex: --env=dev')
}

/**
 * Load typeform variables from ".typeformrc" file
 */
let typeformVars = null
const typeformrcFilePath = './.typeformrc'

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

typeformKeysRequired.forEach(key => {
  if (!typeformVars[argv.env].hasOwnProperty(key) || ! typeformVars[argv.env][key]) {
    throw new Error(`"${key}" not found inside the ".typeformrc" file`)
  }
})


/**
 * Copy source content to build folder
 */
const pathOrigin = 'admission-es'
const pathDestination = `build/${pathOrigin}`

try {
  fse.emptyDirSync(pathDestination)
  fse.copySync(pathOrigin, pathDestination)
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
  console.info('The "build/admission-es.json" file was compiled successfully!!')
} catch (error) {
  throw error
}

process.exit()
