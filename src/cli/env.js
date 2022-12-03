import * as fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const parseEnv = () => {
  const keys = Object.keys(process.env).filter((name) => name.includes("RSS_"));

  for (const key of keys) {
    console.log(`${key}=${process.env[key]};`);
  }
};

parseEnv();
