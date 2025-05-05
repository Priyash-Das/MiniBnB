class ExpressError extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
    this.timestamp = this.getIndianTimestamp();
  }

  getIndianTimestamp() {
    const now = new Date();
    // Create a new Date object 'now' representing the current UTC time (Universal Coordinated Time).

    // Convert to Indian timezone offset (UTC+5:30)
    const indianTime = new Date(now.getTime() + 5.5 * 60 * 60 * 1000);
    // Shift the time by 5.5 hours (5 hours 30 minutes) ahead of UTC to get Indian Standard Time (IST).
    // getTime() gives time in milliseconds, so we add 5.5 hours worth of milliseconds.

    // Extract Year, Month, Date, Hours, Minutes, Seconds separately:

    const year = indianTime.getUTCFullYear();
    // Get the year part (example: 2025) from the adjusted Indian time.

    const month = String(indianTime.getUTCMonth() + 1).padStart(2, "0");
    // Get the month (0-indexed, so +1) and ensure it's 2 digits. Example: '01' for April.

    const date = String(indianTime.getUTCDate()).padStart(2, "0");
    // Get the day of the month and ensure it's 2 digits. Example: '09' for 9th day.

    const hours = String(indianTime.getUTCHours()).padStart(2, "0");
    // Get the hour of the day (24-hour format), ensure 2 digits. Example: '07' for 7 AM.

    const minutes = String(indianTime.getUTCMinutes()).padStart(2, "0");
    // Get the minutes past the hour, ensure 2 digits. Example: '05' for 5 minutes.

    const seconds = String(indianTime.getUTCSeconds()).padStart(2, "0");
    // Get the seconds past the minute, ensure 2 digits. Example: '08' for 8 seconds.

    // Now combine all into a single string in the format "YYYY-MM-DD HH:MM:SS":
    return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
    // Final output example: '2025-00-00 10:00:00'
  }
}

module.exports = ExpressError;
