export const convertInvoiceDateFormat = (d) => {
  const date = new Date(d);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
  return formattedDate;
};

export const findUserById = (users, id) => {
  for (let user of users) {
    if (user._id === id) {
      return user;
    }
    if (user.lowerLevel && user.lowerLevel.length > 0) {
      const foundUser = findUserById(user.lowerLevel, id);
      if (foundUser) {
        return foundUser;
      }
    }
  }
  return null;
};
