import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
import { User } from './User';
  
  @Entity('shop')
  class Shop {
    @PrimaryGeneratedColumn('uuid')
    public id: string;
  
    @Column('varchar', { nullable: true })
    public name: string;
  
    @Column('varchar', { nullable: true })
    public description: string;
  
    @Column('varchar', { nullable: true })
    public address: string | null;
  
    @Column('varchar', { nullable: true })
    public phone: string | null;
  
    @Column('varchar', { nullable: true })
    public image: string | null;
  
    @Column('uuid', { nullable: true })
    public userId: string | null;

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({ name: 'userId' })
    public user: User | null;
  
    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    public createdAt: Date;
  
    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    public updatedAt: Date;
  
    @DeleteDateColumn({ type: 'timestamp', nullable: true})
    public deletedAt: Date | null;
  }

  