/* eslint-disable prettier/prettier */
import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn 
} from "typeorm";

@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    name: string;

    @Column()
    email: string;

    @CreateDateColumn({ name: 'createdAt', type: 'datetime' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updatedAt', type: 'datetime' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deletedAt', type: 'datetime' })
    deletedAt: Date;

    @Column()
    hour: string;

    @Column()
    phone: string;
}