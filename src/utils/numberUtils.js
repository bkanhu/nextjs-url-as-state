// Function to format a number with commas as thousands separators
export const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Function to convert a number to a currency format
export const formatCurrency = (num, currency = "USD") => {
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(
    num
  );
};
