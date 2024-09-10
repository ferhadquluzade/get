import si from "systeminformation";

export const getGpuInfo = async () => {
  const gpus = (await si.graphics()).displays;
  if (gpus.length === 1)
    return `vendor: ${gpus[0].vendor}
model: ${gpus[0].model}
resolutionX: ${gpus[0].resolutionX}
resolutionY: ${gpus[0].resolutionY}
refreshRate: ${gpus[0].currentRefreshRate}`;

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
