import { validate as isUuid } from 'uuid';

/**
 * Represents a user's unique identifier.
 */
export class UserId {
  /**
   * Constructs a UserId instance with the provided ID.
   * 
   * @param id - The unique identifier for the user as a string.
   * @throws {Error} If the ID is not a valid UUID.
   */
  constructor(private readonly id: string) {
    if (!id || id.trim() === '') {
      throw new Error('User ID cannot be empty');
    }
    if (!isUuid(id)) {
      throw new Error('User ID must be a valid UUID');
    }
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
