/* eslint-disable prettier/prettier */
import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    name: string;

    @Column()
    email: string;

    @Column()
    hour: string;

    @Column()
    phone: string;

    @Column({ default: false })
    hasAccess: boolean;
}