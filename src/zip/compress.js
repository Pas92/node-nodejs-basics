import { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';
import { pipeline } from 'node:stream/promises';
import { fileURLToPath } from 'node:url';
import { createGzip } from 'node:zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream(
    path.join(__dirname, 'files', 'fileToCompress.txt')
  );

  const destination = createWriteStream(
    path.join(__dirname, 'files', 'archive.gz')
  );

  pipeline(source, gzip, destination).catch(() => {
    throw new Error('Compress operation failed');
  });
};

await compress();
