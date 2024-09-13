import si from "systeminformation";

export const getGpuInfo = async () => {
  const gpus = (await si.graphics()).displays;

  let result = `gpus:${gpus.length}`;
  gpus.forEach((gpu, index) => {
    result += `\ngpu#${index + 1}:
\tvendor: ${gpu.vendor}
\tmodel: ${gpu.model}
\tresolutionX: ${gpu.resolutionX}
\tresolutionY: ${gpu.resolutionY}
\trefreshRate: ${gpu.currentRefreshRate}`;
  });

  return result;
};
