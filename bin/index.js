#!/usr/bin/env node
import arg from "arg";
import { getIpInfo } from "./subcmd/ip.js";
import { getCpuInfo } from "./subcmd/cpu.js";
import { getOsInfo } from "./subcmd/os.js";
import { getRamInfo } from "./subcmd/ram.js";
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
        console.log("Environment variables:", envInfo);
        break;
      case "--ram":
        const ramInfo = getRamInfo();
        console.log("RAM/Memory:", ramInfo);
        break;
      case "--cpu":
        const cpuInfo = getCpuInfo();
        console.log("CPU:", cpuInfo);
        break;
      case "--ip":
        const ipInfo = await getIpInfo();
        console.log("Ip:", ipInfo);
        break;
      case "--os":
        const osInfo = getOsInfo();
        console.log("OS:", osInfo);
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
--ip\tIp address (v4 and local)
--cpu\tCPU information
--os\tOS information
--ram\tRAM/Memory usage
--env\tEnvironment variables`);
}

main();
