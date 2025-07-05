// Function to capitalize the first letter of a string
export const capitalize = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

// Function to truncate a string to a specified length
export const truncate = (str, length) => {
  if (!str || str.length <= length) return str;
  return str.slice(0, length) + "...";
};
