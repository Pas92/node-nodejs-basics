import * as fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  try {
    const targetFolder = path.join(__dirname, 'files');
    const file = await (
      await fs.readFile(path.join(targetFolder, 'fileToRead.txt'))
    ).toString();
    console.log(file);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await read();
