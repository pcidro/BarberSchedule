export default function isTimeSlotPast(date: Date, time: string): boolean {
  const [hour, minute] = time.split(":").map(Number);
  const now = new Date();
  const slotDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    hour,
    minute,
  );
  return slotDate <= now;
}
