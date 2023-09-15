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
  
  @Entity('cart')
  export class Cart {
    @PrimaryGeneratedColumn('uuid')
    public id: string;
  
    @Column('uuid', { name: 'user_id'})
    public userId: string;
  
    @Column({ default: 'default' }) //change
    public type: string;
  
    @Column({nullable: true})
    public status: string;
  
    @CreateDateColumn({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
    public createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_at', default: () => 'CURRENT_TIMESTAMP' })
    public updatedAt: Date;
  
    @DeleteDateColumn({ name: 'deleted_at', default: () => 'CURRENT_TIMESTAMP' })
    public deletedAt: Date;
  
    // Add your relationships here if needed
  }