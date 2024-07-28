import os from "os";
import { formatTime } from "../formatter/time.js";

export const getOsInfo = () => {
  return {
    platform: os.platform(),
    type: os.type(),
    release: os.release(),
    hostname: os.hostname(),
    userInfo: os.userInfo().username,
    uptime: formatTime(os.uptime()),
  };
};
