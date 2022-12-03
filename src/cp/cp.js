import * as fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { fork } from 'node:child_process';
import { stdin } from 'node:process';
import { pipeline } from 'node:stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
  const controller = new AbortController();
  const { signal } = controller;
  const { silent } = true;
  const child = fork(path.join(__dirname, 'files', 'script.js'), args || [], {
    signal,
    silent,
  });

  child.on('error', (err) => {
    console.log(err);
    controller.abort();
    throw err;
  });
};

spawnChildProcess();
