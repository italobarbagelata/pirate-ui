/**
 * Date utility functions for formatting dates and times
 */

/**
 * Returns a short date string representation
 * Format: HH:MM (24-hour format)
 */
export function getShortDate(): string {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}