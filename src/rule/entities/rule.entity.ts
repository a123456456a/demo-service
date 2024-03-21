import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Rule {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ comment: '角色名称', nullable: true })
  name: string;
  @Column({ comment: '角色值', nullable: true })
  value: number;
  @Column({ name: 'created_at', comment: '创建时间' })
  createdAt: Date;
  @Column({ name: 'updated_at', comment: '更新时间' })
  updatedAt: Date;
  @ManyToOne(() => User, (user) => user.rules)
  user: User;
}
