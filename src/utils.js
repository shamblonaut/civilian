// Convert date input [YYYY-MM-DD] to MM/YYYY
export function formatTenureBoundary(isoDate) {
  const date = new Date(isoDate);
  return `${(date.getMonth() + 1).toString().padStart(2, "0")}/${date.getFullYear()}`;
}

// Get ISO date string [YYYY-MM-DD] from date object
export function getISODate(dateObject) {
  return dateObject.toISOString().substring(0, 10);
}

// Check if all the input fields in the given array are not empty
export function validateRequiredInput(inputValues) {
  for (const inputValue of inputValues) {
    if (inputValue === "") return false;
  }
  return true;
}
