/**
 * Represents a range of dates with a start date and an end date.
 */
export class DateRange {
  /**
   * Constructs a DateRange instance with the provided start and end dates.
   * Throws an error if the date range is invalid.
   * 
   * @param startDate - The start date of the range as a string.
   * @param endDate - The end date of the range as a string.
   */
  constructor(private readonly startDate: string, private readonly endDate: string) {
    // Validate the date range and throw an error if it is invalid
    if (!this.isValidDateRange()) {
      throw new Error('Invalid Date Range');
    }
  }

  /**
   * Checks if a given date string is a valid date.
   * 
   * @param date - The date string to be validated.
   * @returns {boolean} True if the date string is a valid date; otherwise, false.
   */
  private isValidDate(date: string): boolean {
    // Check if the date can be parsed and is a valid date object
    return !isNaN(Date.parse(date));
  }

  /**
   * Validates the date range by checking if both dates are valid and if the start date is not after the end date.
   * 
   * @returns {boolean} True if the date range is valid; otherwise, false.
   */
  private isValidDateRange(): boolean {
    const start = new Date(this.startDate);
    const end = new Date(this.endDate);

    // Validate both dates and ensure the start date is not after the end date
    return this.isValidDate(this.startDate) &&
           this.isValidDate(this.endDate) &&
           start <= end;
  }

  /**
   * Gets the start date of the date range.
   * 
   * @returns {string} The start date as a string.
   */
  getStartDate(): string {
    return this.startDate;
  }

  /**
   * Gets the end date of the date range.
   * 
   * @returns {string} The end date as a string.
   */
  getEndDate(): string {
    return this.endDate;
  }
}
