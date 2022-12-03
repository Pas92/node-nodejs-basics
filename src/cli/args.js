import * as fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const parseArgs = () => {
  const keys = process.argv.filter((el, i) => i % 2 === 0).slice(1);
  const values = process.argv.filter((el, i) => i % 2 !== 0).slice(1);

  keys.forEach((key, i) => {
    console.log(`${key.slice(2)} is ${values[i]};`);
  });
};

parseArgs();
