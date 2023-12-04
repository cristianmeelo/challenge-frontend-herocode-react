/**
 * Formats a date into the "dd/mm/yyyy" format or returns 'Not completed' if the date is null.
 * @param {Date | string | null} date - The date to be formatted.
 * @returns {string} The formatted date or 'Not completed' if the date is null.
 * @example
 * // Returns '25/12/2023'
 * const formattedDate = formatDate(new Date('2023-12-25'));
 *
 * // Returns 'Not completed'
 * const notCompletedDate = formatDate(null);
 */
const formatDate = (date: Date | string | null): string => {
  if (date) {
    const parsedDate = typeof date === 'string' ? new Date(date) : date;
    const day = String(parsedDate.getDate()).padStart(2, '0');
    const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
    const year = parsedDate.getFullYear();
    return `${day}/${month}/${year}`;
  }
  return 'Not completed';
};

export default formatDate;
