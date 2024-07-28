#!/usr/bin/env node
import arg from "arg";
import { getIpInfo } from "./subcmd/ip.js";
import { getCpuInfo } from "./subcmd/cpu.js";
import { getOsInfo } from "./subcmd/os.js";
import { getMemoryInfo } from "./subcmd/memory.js";
import { getEnvInfo } from "./subcmd/env.js";

async function main() {
  try {
    const args = arg({
      "--ip": Boolean,
      "--cpu": Boolean,
      "--os": Boolean,
      "--ram": Boolean,
      "--env": Boolean,
    });

    const option = Object.keys(args).find((key) => args[key] === true);

    switch (option) {
      case "--env":
        const envInfo = getEnvInfo();
        console.log("Memory Information:", envInfo);
        break;
      case "--ram":
        const memoryInfo = getMemoryInfo();
        console.log("Memory Information:", memoryInfo);
        break;
      case "--cpu":
        const cpuInfo = getCpuInfo();
        console.log("Cpu Information:", cpuInfo);
        break;
      case "--ip":
        const ipInfo = await getIpInfo();
        console.log("Ip Information:", ipInfo);
        break;
      case "--os":
        const osInfo = getOsInfo();
        console.log("OS Information:", osInfo);
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
  console.log(`Usage: get [OPTION]
--ip\tIp address (v4 and local)
--cpu\tCPU information
--os\tOS information
--ram\tMemory/RAM usage
--env\tEnvironment variables`);
}

main();
