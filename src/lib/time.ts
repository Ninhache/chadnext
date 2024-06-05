export function parseDateTime(
  dateTimeString: string,
  intl: "fr" | "en" = "en"
): string {
  return new Date(dateTimeString).toLocaleString(intl, {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}
