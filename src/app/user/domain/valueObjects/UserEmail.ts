/**
 * Represents a user's email address with validation.
 */
export class UserEmail {
  /**
   * Constructs a UserEmail instance with the provided email address.
   * Throws an error if the email address is invalid.
   * 
   * @param email - The email address of the user as a string.
   */
  constructor(private readonly email: string) {
    // Validate the email address and throw an error if it is invalid
    if (!this.isValidEmail()) {
      throw new Error('Invalid Email: The email address provided is not valid.');
    }
  }

  /**
   * Validates the email address to ensure it meets the required format.
   * The email must match a regular expression for typical email formats.
   * 
   * @returns {boolean} True if the email address is valid; otherwise, false.
   */
  private isValidEmail(): boolean {
    // Regular expression to match typical email address formats
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Check if the email matches the regex
    return typeof this.email === 'string' && emailRegex.test(this.email);
  }

  /**
   * Gets the value of the user's email address.
   * 
   * @returns {string} The email address as a string.
   */
  getValue(): string {
    return this.email;
  }
}
