import { cpus } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Worker } from 'node:worker_threads';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
  const coresCount = cpus().length;
  const promises = [];

  for (let i = 0; i < coresCount; i++) {
    promises.push(
      new Promise((res) => {
        const worker = new Worker(path.join(__dirname, 'worker.js'), {
          workerData: 10 + i,
        });
        worker.on('message', (data) => {
          res({
            status: 'resolved',
            data: data,
          });
        });

        worker.on('error', (data) => {
          res({
            status: 'error',
            data: null,
          });
        });

        worker.on('exit', (code) => {
          if (code !== 0) {
            res({
              status: 'error',
              data: null,
            });
          }
        });
      })
    );
  }

  const result = await Promise.all(promises);
  console.log(result);
};

await performCalculations();
