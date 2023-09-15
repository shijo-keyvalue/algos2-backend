import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    OneToMany,
  } from 'typeorm';
  import { Product } from './Product';
  
  @Entity('category')
  export class Category {
    @PrimaryGeneratedColumn('uuid')
    public id: string;
  
    @Column('varchar', { nullable: true })
    public name: string;
  
    @Column('varchar', { nullable: true })
    public description: string;
  
    @OneToMany(() => Product, (product) => product.category)
    public products: Product[];
  
    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    public createdAt: Date;
  
    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    public updatedAt: Date;
  
    @DeleteDateColumn({ type: 'timestamp', nullable: true})
    public deletedAt: Date | null;
  }