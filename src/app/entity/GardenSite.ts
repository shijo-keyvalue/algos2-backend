
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity('garden_site')
export class GardenSite {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'varchar', nullable: false })
  public name: string;

  @Column({ type: 'uuid', nullable: true, name: 'user_id' })
  public userId: string;

  @Column({ type: 'uuid', nullable: true, name: 'product_id' })
  public productId: string;

  @Column({ type: 'int', nullable: true })
  public temperature: number;

  @Column({ type: 'int', nullable: true, name: 'water_level' })
  public waterLevel: number;

  @Column({ type: 'int', nullable: true })
  public humidity: number;

  @Column({ type: 'decimal', nullable: true, name: 'ph_level' })
  public phLevel: number;

  @Column({ type: 'int', nullable: true, name: 'light_level' })
  public lightLevel: number;

  @Column({ type: 'varchar', nullable: true, name: 'nutrient_level', default: 'medium' })
  public nutrientLevel: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'updated_at' })
  public updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true, name: 'deleted_at' })
  public deletedAt: Date;
}
