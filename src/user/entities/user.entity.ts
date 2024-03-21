import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Rule } from '../../rule/entities/rule.entity';

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
  @Column({ name: 'created_at' })
  createdAt: Date;
  @Column({ name: 'updated_at' })
  updatedAt: Date;
  @OneToMany(() => Rule, (rule) => rule.user)
  rules: Rule[];
}
