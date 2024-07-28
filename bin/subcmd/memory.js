import os from "os";
import { formatBytes } from "../formatter/bytes.js";

export const getMemoryInfo = () => {
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const usedMemory = totalMemory - freeMemory;

  return {
    totalMemory: formatBytes(totalMemory),
    freeMemory: formatBytes(freeMemory),
    usedMemory: formatBytes(usedMemory),
  };
};
