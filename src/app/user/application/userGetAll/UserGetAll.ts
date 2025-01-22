import { UserRepository } from "../../domain/domainRepository/UserRepository";
import { User } from "../../domain/imports/Imports";

export class UserGetAll {
  constructor(private repository: UserRepository) {}

  async run(): Promise<User[]> {
    return this.repository.getAll();
  }
}
