export const getHoursMinutes = (date) => {
  const newDate = new Date(date);
  return newDate.getHours() + ":" + newDate.getMinutes();
};

export const addMinutes = (date, minutes) => {
  const newDate = new Date(date);
  return new Date(newDate.getTime() + minutes * 60000);
};
