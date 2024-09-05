import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./user/infrastructure/nestJs/user.module";
import { TypeOrmUser } from "./user/infrastructure/typeOrm/typeOrmUser.entity";

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    TypeOrmModule.forRoot({
      type: "postgres",
      entities: [TypeOrmUser],
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || "5432"),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,

      logging: true,
    }),
  ],
})
export class AppModule {}