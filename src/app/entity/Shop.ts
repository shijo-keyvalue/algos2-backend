import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
  } from 'typeorm';
  
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
  
    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    public createdAt: Date;
  
    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    public updatedAt: Date;
  
    @DeleteDateColumn({ type: 'timestamp', nullable: true})
    public deletedAt: Date | null;
}

  