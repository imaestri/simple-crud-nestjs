import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

ConfigModule.forRoot();

const userDb = process.env.DB_USER;
const userPass = process.env.DB_PASS;

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${userDb}:${userPass}@cluster0.24uht.mongodb.net/simple-crud-nestjs?retryWrites=true&w=majority`,
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
