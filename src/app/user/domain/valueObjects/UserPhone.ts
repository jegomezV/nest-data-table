/**
 * Represents a user's phone number.
 */
export class UserPhone {
  /**
   * Constructs a UserPhone instance with the provided phone number.
   * 
   * @param phone - The phone number as a string.
   */
  constructor(private readonly phone: string) {}

  /**
   * Gets the value of the phone number.
   * 
   * @returns {string} The phone number as a string.
   */
  getValue(): string {
    return this.phone;
  }
}