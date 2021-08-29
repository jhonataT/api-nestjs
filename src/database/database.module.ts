/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/entities/user.entity';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        username: 'postgres',
        password: 'docker',
        database: 'whatsappProject',
        entities: [UserEntity],
        synchronize: true
    })]
})
export class DatabaseModule {}
