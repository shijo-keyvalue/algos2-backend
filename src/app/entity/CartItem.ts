import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity('cart_item')
export class CartItem {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column('uuid', { name: 'cart_id' })
  public cartId: string;

  @Column('uuid', { name: 'product_id' })
  public productId: string;

  @Column()
  public quantity: number;

  @CreateDateColumn({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', default: () => 'CURRENT_TIMESTAMP' })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  public deletedAt: Date | null;

  // Add your relationships here if needed
}