export const getHoursMinutes = (date) => {
  const newDate = new Date(date);
  return (
    ("0" + newDate.getHours()).slice(-2) +
    ":" +
    ("0" + newDate.getMinutes()).slice(-2)
  );
};

export const addMinutes = (date, minutes) => {
  const newDate = new Date(date);
  return new Date(newDate.getTime() + minutes * 60000);
};

export const formatDDMMYYYY = (date, separator) => {
  const d = new Date(date);
  const s = separator || "-";
  return (
    ("0" + d.getDate()).slice(-2) +
    s +
    ("0" + (d.getMonth() + 1)).slice(-2) +
    s +
    d.getFullYear()
  );
};

export const compareTwoDayWithoutTime = (date1, date2) => {
  const d1 = new Date(date1).setHours(0, 0, 0, 0);
  const d2 = new Date(date2).setHours(0, 0, 0, 0);
  return d1 === d2;
};
