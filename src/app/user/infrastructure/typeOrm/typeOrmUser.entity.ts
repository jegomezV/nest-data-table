import { Column, Entity, BeforeInsert, BeforeUpdate, PrimaryColumn } from 'typeorm';

@Entity("users")
export class TypeOrmUserEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  sharedKey: string;

  constructor() {
    this.id = '';
    this.name = '';
    this.email = '';
    this.phone = '';
    this.sharedKey = '';
  }

  @BeforeInsert()
  @BeforeUpdate()
  generateSharedKey() {
    if (this.name) {
      const [firstName, lastName] = this.name.split(' ');
      if (firstName) {
        this.sharedKey = `${firstName.charAt(0)}${(lastName || firstName)}`.toLowerCase();
      } else {
        this.sharedKey = 'defaultkey'; // Provide a default value if name is not valid
      }
    } else {
      this.sharedKey = 'defaultkey'; // Provide a default value if name is not valid
    }
  }
}
