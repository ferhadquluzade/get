import os from "os";
import { publicIpv4 } from "public-ip";

export const getIpInfo = async () => {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      // Skip over non-IPv4 and internal (i.e., 127.0.0.1) addresses
      if ("IPv4" !== iface.family || iface.internal !== false) {
        continue;
      }
      return `public: ${await publicIpv4()}
local: ${iface.address}`;
    }
  }
  return { error: "No local IP found" };
};
