#! /usr/bin/env node

const fs = require('fs');
const { spawn } = require('child_process');
const { repository, version } = require('../package.json');

const rubricVersion = '3.x';
const type = 'topic'
const id = 'intro'
const buildPath = 'build';

const parse = (locale, validate = false) => new Promise((resolve) => {
  const suffix = locale.split('-')[0];
  const logMessage = `${type} ${id} ${locale}`;
  let destPath;
  console.log(`=> Parsing ${logMessage}...`);

  if (validate) {
    destPath = '/dev/null';
  } else {
    if (!fs.existsSync(buildPath)){
      fs.mkdirSync(buildPath);
    }

    destPath = `${buildPath}/${suffix === 'es' ? id : `${id}-${suffix}`}.json`;
  }

  const fd = fs.openSync(destPath, 'w')

  const child = spawn('npx', [
    'curriculum-parser',
    type,
    suffix === 'es' ? id : `${id}-${suffix}`,
    '--repo', repository,
    '--version', version,
    '--rubric', rubricVersion,
    '--track', 'js',
    '--locale', locale,
  ], { stdio: [null, fd, 'pipe'] });

  const stderrChunks = [];
  child.stderr.on('data', chunk => stderrChunks.push(chunk));

  child.on('close', (code) => {
    if (code > 0) {
      const err = Object.assign(new Error(`Error parsing ${logMessage}`), {
        item: { type, id, locale },
        stderr: stderrChunks.join(''),
      });
      console.error(`<= FAIL: Error parsing ${logMessage}`);
      console.error(err.stderr);
      return resolve(err);
    }

    console.log(`<= OK parsing ${logMessage}`);
    return resolve({ ok: true });
  });
});

module.exports = (locales, validate = false) => {
  return Promise.all(locales.map(locale => parse(locale, validate)))
    .then(results => results.map((result, idx) => ({ ...locales[idx], result })));
};

