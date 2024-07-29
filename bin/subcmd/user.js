import os from "os";
import { formatTime } from "../formatter/time.js";

export const getUserInfo = () => {
  return os.userInfo().username;
};
