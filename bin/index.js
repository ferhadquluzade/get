#!/usr/bin/env node
import arg from "arg";
import { getIpInfo } from "./subcmd/ip.js";
import { getCpuInfo } from "./subcmd/cpu.js";
import { getOsInfo } from "./subcmd/os.js";
import { getRamInfo } from "./subcmd/ram.js";
import { getEnvInfo } from "./subcmd/env.js";
import { getUserInfo } from "./subcmd/user.js";
import { getHostInfo } from "./subcmd/host.js";
import { getGpuInfo } from "./subcmd/gpu.js";

async function main() {
  try {
    const args = arg({
      "--ip": Boolean,
      "--cpu": Boolean,
      "--os": Boolean,
      "--ram": Boolean,
      "--env": Boolean,
      "--user": Boolean,
      "--host": Boolean,
      "--gpu": Boolean,
    });

    const option = Object.keys(args).find((key) => args[key] === true);

    switch (option) {
      case "--gpu":
        const gpuInfo = await getGpuInfo();
        console.log(gpuInfo);
        break;
      case "--host":
        const hostInfo = getHostInfo();
        console.log(hostInfo);
        break;
      case "--user":
        const userInfo = getUserInfo();
        console.log(userInfo);
        break;
      case "--env":
        const envInfo = getEnvInfo();
        console.log(envInfo);
        break;
      case "--ram":
        const ramInfo = await getRamInfo();
        console.log(ramInfo);
        break;
      case "--cpu":
        const cpuInfo = getCpuInfo();
        console.log(cpuInfo);
        break;
      case "--ip":
        const ipInfo = await getIpInfo();
        console.log(ipInfo);
        break;
      case "--os":
        const osInfo = getOsInfo();
        console.log(osInfo);
        break;
      default:
        usage();
        break;
    }
  } catch (e) {
    console.error(e.message);
    usage();
  }
}

function usage() {
  console.log(`Usage: get --[FLAG]
--ip\tIp address (public v4 and local)
--cpu\tCPU information
--os\tOS information
--ram\tRAM/Memory information
--env\tEnvironment variables
--user\tUser information
--host\tHost information
--gpu\tGPU information`);
}

main();
