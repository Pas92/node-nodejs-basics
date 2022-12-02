import path from 'node:path';
import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ReverseTransform extends Transform {
  _transform(chunk, enc, cb) {
    try {
      cb(
        null,
        chunk.toString().trim().split('').reverse().join('').concat('\n')
      );
    } catch (error) {
      console.log(error);
    }
  }
}

const transform = async () => {
  pipeline(process.stdin, new ReverseTransform(), process.stdout);
};

await transform();
