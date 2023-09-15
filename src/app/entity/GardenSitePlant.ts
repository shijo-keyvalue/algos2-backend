import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity('garden_site_plant')
export class GardenSitePlant {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'uuid', nullable: true, name: 'garden_site_id' })
  public gardenSiteId: string;

  @Column({ type: 'uuid', nullable: true, name: 'plant_id' })
  public plantId: string;

  @CreateDateColumn({ type: 'timestamp', name: 'planted_at' })
  public plantedAt: Date;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'updated_at' })
  public updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true, name: 'deleted_at' })
  public deletedAt: Date;
}
