import { User } from '@/infra/db/entities/user/user-entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

Injectable();
export class AddUserRepository extends Repository<User> {}
