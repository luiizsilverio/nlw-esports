// 18:00 -> 1080
export function HourToMinutes(hourString: string) {
  const [hours, minutes] = hourString.split(':').map(Number);

  const totMinutes = (hours * 60) + minutes;

  return totMinutes;
}