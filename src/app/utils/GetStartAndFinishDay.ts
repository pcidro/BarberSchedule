export function getStartDay(data = new Date()) {
  const startDay = new Date(data);
  startDay.setHours(0, 0, 0, 0);
  return startDay;
}

export function getEndDay(data = new Date()) {
  const endDay = new Date(data);
  endDay.setHours(23, 59, 59, 999);
  return endDay;
}
