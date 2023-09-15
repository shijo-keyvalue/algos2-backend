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
  import { Category } from './Category';
  
  @Entity('product')
  export class Product {
    @PrimaryGeneratedColumn('uuid')
    public id: string;
  
    @Column('varchar', { nullable: true })
    public name: string;
  
    @Column('varchar', { nullable: true })
    public description: string;
  
    @Column('varchar', { nullable: true })
    public image: string;
  
    @Column('int', { nullable: true })
    public price: number;
  
    @Column('uuid')
    public categoryId: string;
  
    @ManyToOne(() => Category, (category) => category.products)
    @JoinColumn({ name: 'categoryId' })
    public category: Category;
  
    @Column('varchar', { default: 'marketplace-product' })
    public type: string;
  
    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    public createdAt: Date;
  
    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    public updatedAt: Date;
  
    @DeleteDateColumn({ type: 'timestamp', nullable: true})
    public deletedAt: Date | null;
  }
  
  