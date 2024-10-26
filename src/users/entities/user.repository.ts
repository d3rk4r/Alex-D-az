import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity'; 
import { UsersService } from '../users.service';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  
}
@Module({
    imports: [TypeOrmModule.forFeature([User])], 
    providers: [UsersService, UserRepository], 
    exports: [UsersService, UserRepository], 
  })
  export class UsersModule {}
