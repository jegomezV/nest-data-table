import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from 'typeorm';

@Entity('users')
export class TypeOrmUser {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 50 })
  email: string;

  @Column({ type: 'varchar', length: 100 })
  phone: string;

  @Column({ type: 'varchar', length: 100 })
  startDate: string;

  @Column({ type: 'varchar', length: 100 })
  endDate: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  sharedKey: string;

  @BeforeInsert()
  @BeforeUpdate()
  generateSharedKey() {
    const [firstName, lastName] = this.name.split(' ');
    if (firstName && lastName) {
      this.sharedKey = `${firstName.charAt(0)}${lastName}`.toLowerCase();
    } else {
      this.sharedKey = '';
    }
  }
}