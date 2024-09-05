import { DateRange, UserEmail, UserId, UserName, UserPhone } from "./valueObjects/ValueImports";

/**
 * Represents a user with specific attributes.
 */
export class User {
  // Private properties to store user details
  private readonly id: UserId;
  private readonly name: UserName;
  private readonly email: UserEmail;
  private readonly phone: UserPhone;
  private readonly dateRange: DateRange;

  /**
   * Constructs a User instance with the provided details.
   * @param id - The unique identifier for the user.
   * @param name - The name of the user.
   * @param email - The email address of the user.
   * @param phone - The phone number of the user.
   * @param dateRange - The date range associated with the user.
   */
  constructor(
    id: UserId,
    name: UserName,
    email: UserEmail,
    phone: UserPhone,
    dateRange: DateRange
  ) {
    // Initialize properties with provided values
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.dateRange = dateRange;
  }

  /**
   * Gets the user's unique identifier.
   * @returns {string} The user's ID as a string.
   */
  get userId(): string {
    return this.id.getValue();
  }

  /**
   * Gets the user's name.
   * @returns {string} The user's name as a string.
   */
  get userName(): string {
    return this.name.getValue();
  }

  /**
   * Gets the user's email address.
   * @returns {string} The user's email as a string.
   */
  get userEmail(): string {
    return this.email.getValue();
  }

  /**
   * Gets the user's phone number.
   * @returns {string} The user's phone number as a string.
   */
  get userPhone(): string {
    return this.phone.getValue();
  }

  /**
   * Gets the start date from the user's date range.
   * @returns {string} The start date as a string.
   */
  get userStartDate(): string {
    return this.dateRange.getStartDate();
  }

  /**
   * Gets the end date from the user's date range.
   * @returns {string} The end date as a string.
   */
  get userEndDate(): string {
    return this.dateRange.getEndDate();
  }

}
