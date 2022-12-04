const parseEnv = () => {
  const keys = Object.keys(process.env).filter((name) => name.includes('RSS_'));

  for (const key of keys) {
    console.log(`${key}=${process.env[key]};`);
  }
};

parseEnv();
