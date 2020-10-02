export function setDateTimeForm(datetime: string) {
  datetime = datetime.replace('T', ' ');
  datetime = datetime.replace('Z', '');
  return datetime.replace(/\.[0-9]*/g, '');
}
