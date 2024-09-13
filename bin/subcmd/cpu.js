import os from "os";

export const getCpuInfo = () => {
  const cpus = os.cpus();
  let result = `architecture: ${os.arch()}
cpus: ${cpus.length}`;

  cpus.forEach((cpu, index) => {
    result += processedResult(cpu, index);
  });
  return result;
};

const processedResult = (cpu, index) => {
  return `\ncpu#${index + 1}:
  \tmodel: ${cpu.model}
  \tspeed: ${cpu.speed} MHz`;
};
