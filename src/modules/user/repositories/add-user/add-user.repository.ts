import { User } from '@/infra/db/entities/user/user-entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AddUserDto } from '../../dtos/add-user/add-user.dto';

Injectable();
export class AddUserRepository extends Repository<User> {
  async addUser(data: AddUserDto): Promise<User> {
    const newUser = this.create(data);
    return await this.save(newUser);
  }
}
