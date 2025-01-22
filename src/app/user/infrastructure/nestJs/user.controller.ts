import { Body, Controller, Delete, Get, Inject, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { UserGetAll } from "../../application/userGetAll/UserGetAll";
import { UserGetOneById } from "../../application/userGetOneById/userGetOneById";
import { UserEdit } from "../../application/userEdit/UserEdit";
import { Create, Edit, FindOneParams } from "./validations";
import { UserNotFoundError } from "../../domain/errors/UserNotFoundError";
import { UserDelete } from "../../application/userDelete/UserDelete";
import { UserCreate } from "../../application/userCreate/UserCreate";
import { v4 as uuidv4 } from 'uuid';

// Controller for handling user-related requests
@Controller("user")
export class UserController {
  constructor(
    @Inject('UserGetAll') private readonly userGetAll: UserGetAll,
    @Inject('UserGetOneById') private readonly userGetOneById: UserGetOneById,
    @Inject('UserEdit') private readonly userEdit: UserEdit,
    @Inject('UserDelete') private readonly userDelete: UserDelete,
    @Inject('UserCreate') private readonly userCreate: UserCreate
  ) { }

  // Endpoint to get all users
  @Get()
  async getAll() {
    return (await this.userGetAll.run()).map((user) => user.toPlainObject());
  }

  // Endpoint to get a user by ID
  @Get(":id")
  async getOneById(@Param() params: FindOneParams) {
    try {
      return (await this.userGetOneById.run(params.id)).toPlainObject();
    } catch (error) {
      if (error instanceof UserNotFoundError) {
        return new NotFoundException();
      }
      throw error;
    }
  }

  // Endpoint to create a new user
  @Post()
  async create(@Body() body: Create) {
    const id = uuidv4();
    await this.userCreate.run(
      id,
      body.name,
      body.email,
      body.phone
    );
    return { id, message: 'User created successfully' };
  }

  // Endpoint to edit an existing user
  @Put(":id")
  async edit(@Param() params: FindOneParams, @Body() body: Edit) {
    await this.userEdit.run(
      params.id,
      body.name,
      body.email,
      body.phone
    );
    return { id: params.id, message: 'User updated successfully' };
  }

  // Endpoint to delete a user by ID
  @Delete(":id")
  async delete(@Param() params: FindOneParams) {
    await this.userDelete.run(params.id);
    return { id: params.id, message: 'User deleted successfully' };
  }
}
