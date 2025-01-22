import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./user/infrastructure/nestJs/user.module";
import { TypeOrmUserEntity } from "./user/infrastructure/typeOrm/TypeOrmUser.entity";

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'PWDDB',
      database: 'javadbb',
      entities: [TypeOrmUserEntity],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
