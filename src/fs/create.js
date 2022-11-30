import * as fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  const targetFolder = path.join(__dirname, "files");
  const content = "I am fresh and young";
  try {
    await fs.open(path.join(targetFolder, "fresh.txt"), "wx");
    await fs.appendFile(path.join(targetFolder, "fresh.txt"), content);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await create();
