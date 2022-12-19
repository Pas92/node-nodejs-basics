import { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';
import { pipeline } from 'node:stream/promises';
import { fileURLToPath } from 'node:url';
import { createUnzip } from 'node:zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  const gzip = createUnzip();
  const source = createReadStream(path.join(__dirname, 'files', 'archive.gz'));

  const destination = createWriteStream(
    path.join(__dirname, 'files', 'fileToCompress.txt')
  );

  pipeline(source, gzip, destination).catch(() => {
    throw new Error('Decompress operation failed');
  });
};

await decompress();
