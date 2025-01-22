import { User, UserId, UserEmail, UserName, UserPhone } from "../../domain/imports/Imports";
import { UserRepository } from "../../domain/domainRepository/UserRepository";

export class UserEdit {
  constructor(private repository: UserRepository) {}

  async run(id: string, name: string, email: string, phone: string): Promise<void> {
    //const [startDate, endDate] = dateRange.split(',');
    const user = new User(
      new UserId(id),
      new UserName(name),
      new UserEmail(email),
      new UserPhone(phone),
    );

    return this.repository.edit(user);
  }
}
