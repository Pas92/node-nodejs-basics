import { createReadStream } from 'node:fs';
import path from 'node:path';
import { pipeline } from 'node:stream/promises';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const rs = createReadStream(path.join(__dirname, 'files', 'fileToRead.txt'));
  pipeline(rs, process.stdout).catch(() => {
    throw new Error('Stream error');
  });
};

await read();
