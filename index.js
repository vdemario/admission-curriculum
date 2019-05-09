const copydir = require('copy-dir');
const fs = require('fs')
const argv = require('minimist')(process.argv.slice(2));
const replace = require('replace-in-file');

// TODO: Refactor code into functions
// TODO: Create tests

if (! argv.env) {
  throw new Error('--env argument not provided, ex: --env=dev')
}

/**
 * Check and load config values from "config.json" file
 */
let config = null

try {
  if (fs.existsSync('config.json')) {
    config = require('./config.json')
  } else {
    throw new Error('"config.json" not found')
  }
} catch(error) {
  throw error
}

if (!config[argv.env]) {
  throw new Error(`"${argv.env}" key not found inside "config.json" file`)
}

if (!config[argv.env].typeformIds) {
  throw new Error(`"typeformIds" key not found for "${argv.env}" object inside "config.json" file`)
}


/**
 * Copy origin content to build folder
 */
const pathOrigin = 'spanish'
const pathDestination = `build/${pathOrigin}`

try {
  copydir.sync(pathOrigin, pathDestination, {
    mode: true,    // keep file mode
    cover: true    // cover file when exists, default is true
  });
} catch (error) {
  throw error
}


/**
 * Replace texts inside files of build folder with config values from
 * config.json according to environment
 */
try {
  Object.keys(config[argv.env].typeformIds).forEach((key) => {
    replace.sync({
      files: pathDestination + '/**/*.md',
      from: key,
      to: config[argv.env].typeformIds[key]
    })
  })
  console.info('Content was created successfully, Check it out into build folder!!')
} catch (error) {
  throw error
}

process.exit()
