import os from "os";

export const getCpuInfo = () => {
  const cpus = os.cpus();
  let result = `architecture: ${os.arch()}
cpus: ${cpus.length}`;

  if (cpus.length === 1)
    return (
      result +
      `\nmodel: ${cpus[0].model}
speed: ${cpus[0].speed} MHz`
    );

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
