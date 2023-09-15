import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
  } from 'typeorm';
  
  @Entity('post')
  export class Post {
    @PrimaryGeneratedColumn('uuid')
    public id: string;
  
    @Column('varchar', { length: 255 })
    public content: string;
  
    @Column('jsonb', { nullable: true })
    public images: any[] | null;
  
    @Column('boolean', { default: false })
    public isPost: boolean;
  
    @Column('uuid')
    public parentId: string;
  
    @Column('int', { nullable: true })
    public likeCount: number | null;
  
    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    public createdAt: Date;
  
    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    public updatedAt: Date;
  
    @DeleteDateColumn({ type: 'timestamp', nullable: true})
    public deletedAt: Date | null;
  }
  