import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from 'typeorm';
import { Post } from './Post';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'varchar', length: 255, nullable: true})
  public email: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  public name: string;

  @Column({ type: 'varchar', nullable: true })
  public avatar: string;

  @Column({ unique: true })
  public phoneNumber: string;

  @Column({ nullable: true })
  public password?: string;

  @Column({ type: 'varchar', length: 255, nullable: false, default: 'verification-pending' })
  public status: string;

  @Column({ type: 'uuid', nullable: true, name: 'subscription_plan_id' })
  public subscriptionPlanId: string;

  @OneToMany(() => Post, (post) => post.user)
  public posts: Post[];

  @Column({ type: 'varchar', length: 255, nullable: false, default: 'consumer' })
  public type: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'updated_at' })
  public updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true, name: 'deleted_at',  default: null })
  public deletedAt: Date = null;
}
