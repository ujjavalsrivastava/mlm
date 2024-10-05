const oneDayAgo = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
};
const oneWeekAgo = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
};
const oneMonthAgo = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
};

const getMinutesDifference = (date1, date2) => {
  const dt1 = new Date(date1);
  const dt2 = new Date(date2);
  const diffInMilliseconds = dt1.getTime() - dt2.getTime();
  const diffInMinutes = diffInMilliseconds / (1000 * 60);
  return diffInMinutes;
};

module.exports = { oneDayAgo, oneMonthAgo, oneWeekAgo, getMinutesDifference };
