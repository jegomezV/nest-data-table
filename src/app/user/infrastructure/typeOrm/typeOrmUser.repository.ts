import { User, UserId, UserName, UserEmail, UserPhone } from "../../domain/imports/Imports";
import { UserRepository } from "../../domain/domainRepository/UserRepository";
import { TypeOrmUserEntity } from "./TypeOrmUser.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class TypeOrmUserRepository implements UserRepository {
  constructor(@InjectRepository(TypeOrmUserEntity) private readonly repository: Repository<TypeOrmUserEntity>) { }

  private mapToDomain(u: TypeOrmUserEntity) {
    return new User(
      new UserId(u.id),
      new UserName(u.name),
      new UserEmail(u.email),
      new UserPhone(u.phone),
    );
  }

  async getAll(): Promise<User[]> {
    const users = await this.repository.find();

    return users.map(
      (u) =>
        this.mapToDomain(u)
    );
  }

  async getOneById(id: UserId): Promise<User | null> {
    const user = await this.repository.findOne({
      where: {
        id: id.getValue(),
      },
    });
    if (!user) return null;

    return this.mapToDomain(user);
  }

  async create(user: User): Promise<void> {
    try {
      if (!user.userName || !user.userEmail || !user.userPhone) {
        throw new Error('Invalid user data');
      }
  
      const typeOrmUser = new TypeOrmUserEntity();
      typeOrmUser.id = user.userId;
      typeOrmUser.name = user.userName;
      typeOrmUser.email = user.userEmail;
      typeOrmUser.phone = user.userPhone;
  
      await this.repository.save(typeOrmUser);
    } catch (error) {
      // Maneja el error
      console.error('Error creating user LOOOOOOOOOG:', error);
      throw error;
    }
  }

  async edit(user: User): Promise<void> {
    await this.repository.update(
      { id: user.userId },
      {
        name: user.userName,
        email: user.userEmail,
        phone: user.userPhone,
      }
    );
  }

  async delete(id: UserId): Promise<void> {
    await this.repository.delete({ id: id.getValue() });
  }

}
