import { User } from '@/infra/db/entities/user/user-entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddUserRepository } from './repositories/add-user/add-user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User, AddUserRepository])],
  providers: [],
})
export class UserModule {}
