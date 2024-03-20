import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  code: string;
  @Column({name: 'created_at'})
  createdAt: Date;
  @Column({name: 'updated_at'})
  updatedAt: Date;
}
