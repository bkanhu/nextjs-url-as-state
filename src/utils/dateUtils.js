// Function to format date to a readable string
export const formatDate = (
  date,
  options = { year: "numeric", month: "long", day: "numeric" }
) => {
  return new Date(date).toLocaleDateString(undefined, options);
};

// Function to format time to a readable string
export const formatTime = (
  date,
  options = { hour: "2-digit", minute: "2-digit" }
) => {
  return new Date(date).toLocaleTimeString(undefined, options);
};

// Function to get time difference between two dates
export const timeDifference = (date1, date2) => {
  const diff = Math.abs(new Date(date1) - new Date(date2));
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return { days, hours, minutes };
};
