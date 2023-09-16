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
import { CartItem } from './CartItem';
  
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

    @OneToMany(() => CartItem, (cartItem) => cartItem.cart)
    public cartItems: CartItem[];
  
    @CreateDateColumn({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
    public createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_at', default: () => 'CURRENT_TIMESTAMP' })
    public updatedAt: Date;
  
    @DeleteDateColumn({ name: 'deleted_at', nullable: true })
    public deletedAt: Date;
  
  }