import os from "os";
import { formatBytes } from "../formatter/bytes.js";
import si from "systeminformation";

export const getRamInfo = async () => {
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const usedMemory = totalMemory - freeMemory;

  const rams = await si.memLayout();
  let result = `total: ${formatBytes(totalMemory)},
free: ${formatBytes(freeMemory)},
used: ${formatBytes(usedMemory)},
rams: ${rams.length}`;

  rams.forEach((ram, index) => {
    result += `\nram#${index + 1}:
\tvendor: ${ram.manufacturer}
\ttype: ${ram.type}`;
  });

  return result;
};
