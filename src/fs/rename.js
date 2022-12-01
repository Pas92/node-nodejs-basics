import * as fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
  const targetFolder = path.join(__dirname, 'files');
  try {
    await (
      await fs.open(path.join(targetFolder, 'properFilename.md'), 'wx')
    ).close();
    await fs.unlink(path.join(targetFolder, 'properFilename.md'));
    await fs.rename(
      path.join(targetFolder, 'wrongFilename.txt'),
      path.join(targetFolder, 'properFilename.md')
    );
  } catch (error) {
    console.log(error);
    throw new Error('FS operation failed');
  }
};

await rename();
