import process from "process";

export const getEnvInfo = () => {
  let envInfo = "";

  const GREEN = "\x1b[32m";
  const RESET = "\x1b[0m";

  for (const [key, value] of Object.entries(process.env)) {
    envInfo += `${key}=${value}\n`;
  }

  return envInfo;
};
