/**
 * Represents a user's phone number with validation.
 */
export class UserPhone {
  /**
   * Constructs a UserPhone instance with the provided phone number.
   * Throws an error if the phone number is invalid.
   * 
   * @param phone - The phone number as a string.
   */
  constructor(private readonly phone: string) {
    // Validate the phone number and throw an error if it is invalid
    if (!this.isValidPhone()) {
      throw new Error('Invalid Phone Number');
    }
  }

  /**
   * Validates the phone number based on a regular expression.
   * The phone number must be between 7 and 15 digits and may start with a plus sign.
   * 
   * @returns {boolean} True if the phone number is valid; otherwise, false.
   */
  private isValidPhone(): boolean {
    // Regular expression for validating phone numbers
    const phoneRegex = /^\+?[0-9]{7,15}$/;
    return phoneRegex.test(this.phone);
  }

  /**
   * Gets the value of the phone number.
   * 
   * @returns {string} The phone number as a string.
   */
  getValue(): string {
    return this.phone;
  }
}
