import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity('plant')
export class Plant {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'varchar', nullable: false })
  public name: string;

  @Column({ type: 'varchar', nullable: true })
  public image: string;

  @Column({ type: 'varchar', nullable: false })
  public description: string;

  @Column({ type: 'int', nullable: true, name: 'days_to_harvest' })
  public daysToHarvest: number;

  @Column({ type: 'int', nullable: true, name: 'optimum_temp', default: 70 })
  public optimumTemp: number;

  @Column({ type: 'decimal', nullable: true, name: 'optimum_ph_level', default: 6.5 })
  public optimumPhLevel: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'updated_at' })
  public updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true, name: 'deleted_at' })
  public deletedAt: Date;
}
