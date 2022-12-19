const parseArgs = () => {
  const keys = process.argv.filter((el, i) => i % 2 === 0).slice(1);
  const values = process.argv.filter((el, i) => i % 2 !== 0).slice(1);

  keys.forEach((key, i) => {
    console.log(`${key.slice(2)} is ${values[i]};`);
  });
};

parseArgs();
