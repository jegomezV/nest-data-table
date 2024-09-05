/**
 * Represents a user's name with validation.
 */
export class UserName {
  /**
   * Constructs a UserName instance with the provided name.
   * Throws an error if the name is invalid.
   * 
   * @param name - The name of the user as a string.
   */
  constructor(private readonly name: string) {
    // Validate the name and throw an error if it is invalid
    if (!this.isValidName()) {
      throw new Error('Invalid UserName');
    }
  }

  /**
   * Validates the name to ensure it meets the required criteria.
   * The name must only contain alphabetic characters.
   * 
   * @returns {boolean} True if the name is valid; otherwise, false.
   */
  private isValidName(): boolean {
    // Regular expression to match names consisting only of alphabetic characters
    const nameRegex = /^[a-zA-Z]+$/;
    // Check if the name is non-empty and matches the regex
    return typeof this.name === 'string' && this.name.length > 0 && nameRegex.test(this.name);
  }

  /**
   * Gets the value of the user's name.
   * 
   * @returns {string} The user's name as a string.
   */
  getValue(): string {
    return this.name;
  }
}
