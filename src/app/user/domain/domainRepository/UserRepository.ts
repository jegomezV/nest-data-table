import { UserId, User } from "../imports/Imports";

// Interface for User Repository
export interface UserRepository {
  /**
   * Creates a new user.
   * @param user - The user to be created.
   * @returns A promise that resolves when the user is created.
   */
  create(user: User): Promise<void>;

  /**
   * Retrieves all users.
   * @returns A promise that resolves to an array of users.
   */
  getAll(): Promise<User[]>;

  /**
   * Retrieves a user by their ID.
   * @param id - The ID of the user to retrieve.
   * @returns A promise that resolves to the user if found, or null if not found.
   */
  getOneById(id: UserId): Promise<User | null>;

  /**
   * Edits an existing user.
   * @param user - The user with updated information.
   * @returns A promise that resolves when the user is edited.
   */
  edit(user: User): Promise<void>;

  /**
   * Deletes a user by their ID.
   * @param id - The ID of the user to delete.
   * @returns A promise that resolves when the user is deleted.
   */
  delete(id: UserId): Promise<void>;
}
