import os from "os";

export const getCpuInfo = () => {
  return {
    numCores: os.cpus().length,
    arch: os.arch(),
    cpus: os.cpus(),
  };
};
