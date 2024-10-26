import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/authmodule';
@Module({
  imports: [
    ClientsModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'culdb',
      entities: [
        UsersModule
      ],
      synchronize: true,
    }),
],
  controllers: [AppController],
  providers: [AppService],
})

@Module({
  imports: [
    TypeOrmModule.forRoot({
      
    }),
    UsersModule, 
    AuthModule,
  ],
})
export class appmodule {}
@Module({
  imports: [AuthModule], 
})
export class AppModule {}


