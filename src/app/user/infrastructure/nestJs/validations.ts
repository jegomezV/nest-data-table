import { IsEmail, IsOptional, IsString, Length } from "class-validator";

/**
 * Interface representing the basic user information.
 */
interface IUser {
  name: string;
  email: string;
  phone: string;
}

/**
 * Class representing the parameters required to find a single entity by ID.
 */
export class FindOneParams {
  @IsString()
  id: string;

  /**
   * Constructor for FindOneParams.
   * @param {string} id - The ID of the entity to find.
   */
  constructor(id: string) {
    this.id = id;
  }
}

/**
 * Base class representing the common data required for user operations.
 */
class UserBase implements IUser {
  @IsString()
  @Length(3, 50)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  @Length(10, 15)
  phone: string;

  /**
   * Constructor for UserBase.
   * @param {string} name - The name of the user.
   * @param {string} email - The email of the user.
   * @param {string} phone - The phone number of the user.
   */
  constructor(name: string, email: string, phone: string) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

/**
 * Class representing the data required to create a new entity.
 */
export class Create extends UserBase {
  /**
   * Constructor for Create.
   * @param {string} name - The name of the entity.
   * @param {string} email - The email of the entity.
   * @param {string} phone - The phone number of the entity.
   */
  constructor(name: string, email: string, phone: string) {
    super(name, email, phone);
  }
}

/**
 * Class representing the data required to edit an existing entity.
 */
export class Edit extends UserBase {
  /**
   * Constructor for Edit.
   * @param {string} name - The name of the entity.
   * @param {string} email - The email of the entity.
   * @param {string} phone - The phone number of the entity.
   */
  constructor(name: string, email: string, phone: string) {
    super(name, email, phone);
  }
}
