import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';

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
  pipeline(process.stdin, new ReverseTransform(), process.stdout).catch(() => {
    throw new Error('Stream error');
  });
};

await transform();
