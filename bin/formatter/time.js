// utils.js
export const formatTime = (uptime) => {
  const days = Math.floor(uptime / (24 * 3600));
  uptime %= 24 * 3600;
  const hours = Math.floor(uptime / 3600);
  uptime %= 3600;
  const minutes = Math.floor(uptime / 60);
  const seconds = uptime % 60;

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};
