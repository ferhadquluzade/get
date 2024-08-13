import os from "os";

export const getCpuInfo = () => {
  const cpus = os
    .cpus()
    .map((cpu, index) => `Core ${index + 1}: ${cpu.model} @ ${cpu.speed}MHz`)
    .join("\n");

  return `architecture: ${os.arch()}
core Number: ${os.cpus().length}
cpus:
${cpus}`;
};
