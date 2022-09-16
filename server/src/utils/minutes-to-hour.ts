// 1080 -> 18:00
export function MinutesToHour(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const min = minutes % 60;

  return `${hours.toString().padStart(2,'0')}:${min.toString().padStart(2,'0')}`;
}