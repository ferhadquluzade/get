import os from "os";
import { formatTime } from "../formatter/time.js";

export const getUserInfo = () => os.userInfo().username;
