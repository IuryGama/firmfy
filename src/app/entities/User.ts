import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert } from "typeorm";
import { v4 as uuid } from "uuid";
import bcrypt from "bcryptjs";

@Entity("users")
class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;
  
  @Column()
  email: string;

  @Column()
  admin: boolean;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  async hookBeforeSave(password){
    await bcrypt.hash(this.password, 8);
  }

  constructor() {
    (!this.id) ? this.id = uuid() : this.id
  }

}

export { User };