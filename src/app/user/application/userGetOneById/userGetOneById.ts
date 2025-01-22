import { UserRepository } from "../../domain/domainRepository/UserRepository";
import { UserNotFoundError } from "../../domain/errors/UserNotFoundError";
import { User, UserId } from "../../domain/imports/Imports";

export class UserGetOneById {
  constructor(private repository: UserRepository) {}

  async run(id: string): Promise<User> {
    const user = await this.repository.getOneById(new UserId(id));

    if (!user)
      throw new UserNotFoundError();

    return user;
  }
}
