import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
  } from 'typeorm';
  
  @Entity('subscription_plan')
  export class SubscriptionPlan {
    @PrimaryGeneratedColumn('uuid')
    public id: string;
  
    @Column('varchar', { nullable: true })
    public name: string;
  
    @Column('varchar', { nullable: true })
    public description: string;
  
    @Column('varchar', { nullable: true })
    public image: string | null;
  
    @Column('int', { nullable: true })
    public price: number | null;
  
    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    public created_at: Date;
  
    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    public updated_at: Date;
  
    @DeleteDateColumn({ type: 'timestamp', nullable: true})
    public deletedAt: Date | null;
}
    