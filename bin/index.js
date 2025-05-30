#!/usr/bin/env node
import { getIpInfo } from "./subcmd/ip.js";
import { getCpuInfo } from "./subcmd/cpu.js";
import { getOsInfo } from "./subcmd/os.js";
import { getRamInfo } from "./subcmd/ram.js";
import { getEnvInfo } from "./subcmd/env.js";
import { getUserInfo } from "./subcmd/user.js";
import { getHostInfo } from "./subcmd/host.js";
import { getGpuInfo } from "./subcmd/gpu.js";
import { getNetInfo } from "./subcmd/net.js";
import { server } from "./subcmd/server.js";

async function main() {
  const command = process.argv[2]; // e.g. "ip", "cpu", etc.

  try {
    switch (command) {
      case "ip":
        console.log(await getIpInfo());
        break;
      case "cpu":
        console.log(getCpuInfo());
        break;
      case "os":
        console.log(getOsInfo());
        break;
      case "ram":
        console.log(await getRamInfo());
        break;
      case "env":
        console.log(getEnvInfo());
        break;
      case "user":
        console.log(getUserInfo());
        break;
      case "host":
        console.log(getHostInfo());
        break;
      case "gpu":
        console.log(await getGpuInfo());
        break;
      case "net":
        console.log(await getNetInfo());
        break;
      case "server":
        server();
        break;
      default:
        usage();
        break;
    }
  } catch (e) {
    console.error("Error:", e.message);
    usage();
  }
}

function usage() {
  console.log(`Usage: get <command>

Commands:
  ip       Get IP address (public & local)
  cpu      CPU information
  os       OS information
  ram      RAM/Memory information
  env      Environment variables
  user     User information
  host     Host information
  gpu      GPU information
  net      Network information
  server   Start simple server with authentication`);
}

main();
