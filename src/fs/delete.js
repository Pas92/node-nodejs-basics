import * as fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
  try {
    const targetFolder = path.join(__dirname, 'files');
    await fs.unlink(path.join(targetFolder, 'fileToRemove.txt'));
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await remove();
