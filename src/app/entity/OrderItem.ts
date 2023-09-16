import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ManyToOne,
  } from 'typeorm';
  
  @Entity('order_item')
  export class OrderItem {
    @PrimaryGeneratedColumn('uuid')
    public id: string;
  
    @Column('uuid', { name: 'order_id' })
    public orderId: string;
  
    @Column('uuid', { name: 'product_id' })
    public productId: string;
  
    @Column({nullable: true})
    public quantity: number;
  
    @CreateDateColumn({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
    public createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_at', default: () => 'CURRENT_TIMESTAMP' })
    public updatedAt: Date;
  
    @DeleteDateColumn({ name: 'deleted_at', nullable: true })
    public deletedAt: Date;
  
    // Add your relationships here if needed
  }