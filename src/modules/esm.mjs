import * as fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { release, version } from 'node:os';
import { createServer as createServerHttp } from 'node:http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cModule = await import('./files/c.js');
cModule;

const random = Math.random();

let unknownObject;

await (async () => {
  if (random > 0.5) {
    unknownObject = JSON.parse(
      await fs.readFile(path.join(__dirname, 'files/a.json'))
    );
  } else {
    unknownObject = JSON.parse(
      await fs.readFile(path.join(__dirname, 'files/b.json'))
    );
  }
})();

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
