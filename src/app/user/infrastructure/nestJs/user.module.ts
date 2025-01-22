import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "./user.controller";
import { TypeOrmUserRepository } from "../typeOrm/TypeOrmUser.repository";
import { TypeOrmUserEntity } from "../typeOrm/TypeOrmUser.entity";

import { UserGetAll } from "../../application/userGetAll/UserGetAll";
import { UserGetOneById } from "../../application/userGetOneById/userGetOneById";
import { UserCreate } from "../../application/userCreate/UserCreate";
import { UserEdit } from "../../application/userEdit/UserEdit";
import { UserDelete } from "../../application/userDelete/UserDelete";


interface UseCase {
  provide: string;
  useCase: any;
}

const USER_REPOSITORY = 'UserRepository';
const USE_CASES = [
  { provide: 'UserGetAll', useCase: UserGetAll },
  { provide: 'UserGetOneById', useCase: UserGetOneById },
  { provide: 'UserCreate', useCase: UserCreate },
  { provide: 'UserEdit', useCase: UserEdit },
  { provide: 'UserDelete', useCase: UserDelete },
];

const createUseCaseProvider = (useCase: UseCase, repositoryToken: string) => ({
  provide: useCase.provide,
  useFactory: (repository: TypeOrmUserRepository) => new useCase.useCase(repository),
  inject: [repositoryToken],
});

@Module({
  imports: [TypeOrmModule.forFeature([TypeOrmUserEntity])],
  controllers: [UserController],
  providers: [
    {
      provide: USER_REPOSITORY,
      useClass: TypeOrmUserRepository,
    },
    ...USE_CASES.map((useCase) => createUseCaseProvider(useCase, USER_REPOSITORY)),
  ],
})
export class UserModule {}
