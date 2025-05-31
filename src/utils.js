export function formatTenureBoundary(isoDate) {
  const date = new Date(isoDate);
  return `${(date.getMonth() + 1).toString().padStart(2, "0")}/${date.getFullYear()}`;
}

export function getISODate(dateObject) {
  return dateObject.toISOString().substring(0, 10);
}
