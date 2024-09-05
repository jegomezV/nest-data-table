/**
 * Represents a user's unique identifier with validation.
 */
export class UserId {
  /**
   * Constructs a UserId instance with the provided ID.
   * Throws an error if the ID is invalid.
   * 
   * @param id - The unique identifier for the user as a string.
   */
  constructor(private readonly id: string) {
    // Validate the ID and throw an error if it is invalid
    if (!this.isValid()) {
      throw new Error('Invalid UserId');
    }
  }

  /**
   * Validates the ID to ensure it meets the required criteria.
   * The ID must be a non-empty string and have a length of 5 characters or less.
   * 
   * @returns {boolean} True if the ID is valid; otherwise, false.
   */
  private isValid(): boolean {
    // Check if the ID is a non-empty string and does not exceed the maximum length
    return typeof this.id === 'string' && this.id.length > 0 && this.id.length <= 5;
  }

  /**
   * Gets the value of the unique identifier.
   * 
   * @returns {string} The unique identifier as a string.
   */
  getValue(): string {
    return this.id;
  }
}
