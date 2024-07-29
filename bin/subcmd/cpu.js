import os from "os";

export const getCpuInfo = () => {
  const cpus = os.cpus().map((cpu) => ({
    model: cpu.model,
    speed: cpu.speed,
  }));

  return {
    numCores: os.cpus().length,
    arch: os.arch(),
    cpus: cpus,
  };
};
