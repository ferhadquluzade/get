import os from "os";

export const getUserInfo = () => os.userInfo().username;
