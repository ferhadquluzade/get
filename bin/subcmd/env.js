import process from "process";

export const getEnvInfo = () => {
  const envVars = {};

  for (const [key, value] of Object.entries(process.env)) {
    envVars[key] = value;
  }

  return envVars;
};
