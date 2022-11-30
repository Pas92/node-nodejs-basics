import * as fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  const copiesFolder = path.join(__dirname, "files_copy");
  try {
    await fs.mkdir(copiesFolder);
    await fs.cp(path.join(__dirname, "files"), copiesFolder, {
      recursive: true,
    });
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

copy();
