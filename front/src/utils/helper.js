export const convertInvoiceDateFormat = (d) => {
  const date = new Date(d);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
  return formattedDate;
};
