import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ManyToOne,
    OneToMany,
  } from 'typeorm';
  
  @Entity('order')
  export class Order {
    @PrimaryGeneratedColumn('uuid')
    public id: string;
  
    @Column('uuid', { name: 'user_id' })
    public userId: string;
  
    @Column({nullable: true})
    public total: number;
  
    @CreateDateColumn({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
    public createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_at', default: () => 'CURRENT_TIMESTAMP' })
    public updatedAt: Date;
  
    @DeleteDateColumn({ name: 'deleted_at', nullable: true })
    public deletedAt: Date;
  
    // Add your relationships here if needed
  }