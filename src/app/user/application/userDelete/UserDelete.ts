import { UserRepository } from "../../domain/domainRepository/UserRepository";
import { UserId } from "../../domain/valueObjects/UserId";

export class UserDelete {
  constructor(private repository: UserRepository) {}

  async run(id: string): Promise<void> {
    return this.repository.delete(new UserId(id));
  }
}
