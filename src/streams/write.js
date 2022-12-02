import { createWriteStream } from 'node:fs';
import * as fs from 'node:fs/promises';
import path from 'node:path';
import { pipeline } from 'node:stream/promises';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const rs = createWriteStream(
    path.join(__dirname, 'files', 'fileToWrite.txt')
  );
  pipeline(process.stdin, rs).catch((err) => {
    throw new Error('Stream error');
  });
};

await write();
