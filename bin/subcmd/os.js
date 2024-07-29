import os from "os";
import { formatTime } from "../formatter/time.js";

export const getOsInfo = () => {
  return {
    platform: os.platform(),
    type: os.type(),
    release: os.release(),
    hostname: os.hostname(),
    uptime: formatTime(os.uptime()),
  };
};
