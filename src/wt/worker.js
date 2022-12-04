import * as fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { workerData, parentPort } from 'node:worker_threads';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  if (workerData === 11) {
    throw new Error('Worker error');
  }
  parentPort.postMessage(nthFibonacci(workerData));
  // This function sends result of nthFibonacci computations to main thread
};

sendResult();
