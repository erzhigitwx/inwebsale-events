export function getUTCOffset(timeZone: string, eventTime: string): string {
  const date = new Date();

  // Преобразуем текущую дату и время в заданную временную зону
  new Intl.DateTimeFormat("en-US", {
    timeZone: timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);

  // Получаем текущее время в UTC и в целевой временной зоне
  const localTime: number | Date = new Date(date.toLocaleString("en-US", { timeZone: "UTC" }));
  const targetTime: number | Date = new Date(date.toLocaleString("en-US", { timeZone: timeZone }));

  // Вычисляем разницу во времени между целевой зоной и UTC в миллисекундах и переводим в часы
  const offsetInMilliseconds: number = targetTime.getTime() - localTime.getTime();
  const offsetInHours: number = offsetInMilliseconds / (1000 * 60 * 60);

  // Вычисляем разницу во времени между текущей и целевой временной зоной
  const currentTimeZone = -(date.getTimezoneOffset() / 60);
  const timeZoneDifferent = offsetInHours - currentTimeZone;
  date.setHours(date.getHours() + timeZoneDifferent);

  // добавляем разницу в часах, к времени, где это событие было создано, for example UTC +3(Moscow), UTC +1(London), разница 2 часа,
  // прибавляем 2 часа к времени event.eventTime(чтобы время было гибким), ниже мы это и делаем:
  const [hours, minutes] = eventTime.split(":").map(Number);
  let newHours = hours - timeZoneDifferent;
  newHours = (newHours + 24) % 24;
  const newEventTime = `${String(newHours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
  // возвращаем готовое время, для ЭТОй временной зоны
  return newEventTime;
}