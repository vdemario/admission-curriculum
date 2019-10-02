#! /usr/bin/env node

const fs = require('fs');
const { spawn } = require('child_process');
const { repository, version } = require('../package.json');

const rubricVersion = '3.x';
const buildPath = 'build';

const parse = ({ type, id, locale }, validate = false) => new Promise((resolve) => {
  console.log(`=> Parsing ${type} ${id} ${locale}...`);
  const suffix = locale.split('-')[0];
  let destPath;

  if (validate) {
    if (!fs.existsSync(buildPath)){
      fs.mkdirSync(buildPath);
    }

    destPath = `${buildPath}/${id}.json`;
  } else {
    destPath = '/dev/null';
  }

  const fd = fs.openSync(destPath, 'w')

  const child = spawn('npx', [
    'curriculum-parser',
    type,
    `${id}`,
    '--repo', repository,
    '--version', version,
    '--rubric', rubricVersion,
    '--track', 'js',
    '--locale', locale,
    ...(locale === 'es-ES' ? [] : ['--suffix', suffix]),
  ], { stdio: [null, fd, 'pipe'] });

  const stderrChunks = [];
  child.stderr.on('data', chunk => stderrChunks.push(chunk));

  child.on('close', (code) => {
    if (code > 0) {
      const err = Object.assign(new Error(`Error parsing ${type} ${id} ${locale}`), {
        item: { type, id, locale },
        stderr: stderrChunks.join(''),
      });
      console.error(`<= FAIL: Error parsing ${type} ${id} ${locale}`);
      console.error(err.stderr);
      return resolve(err);
    }

    console.log(`<= OK parsing ${type} ${id} ${locale}`);
    return resolve({ ok: true });
  });
});

module.exports = (items, validate = false) => {
  return Promise.all(items.map(item => parse(item, validate)))
    .then(results => results.map((result, idx) => ({ ...items[idx], result })));
};

