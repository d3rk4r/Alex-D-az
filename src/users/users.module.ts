import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';  
import { UsersController } from './users.controller'; 
import { UserRepository } from './entities/user.repository'; 

@Module({
  imports: [TypeOrmModule.forFeature([User, UserRepository])],  
  providers: [UsersService, UserRepository],  
  controllers: [UsersController],
  exports: [UsersService, UserRepository],  
})
export class UsersModule {}

