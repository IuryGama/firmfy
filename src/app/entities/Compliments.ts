import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'

import { Tag } from "./Tags";
import { User } from "./User";

@Entity("compliments")
class Compliment {

  @PrimaryColumn()
  readonly id: string;

  @PrimaryColumn()
  userSender: string;

  @JoinColumn({ name: "userSender"  })
  @ManyToOne( () => User)
  UserSender: User;

  @Column()
  userReciver: string;

  @JoinColumn({ name: "userReciver" })
  @ManyToOne( () => User )  
  UserReciver: User;

  @Column()
  tagId: string;

  @JoinColumn({ name: "tagId" })
  @ManyToOne( () => Tag)
  tag: Tag
 
  @Column()
  message: string;

  @Column()
  active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  constructor() {
    (!this.id) ? this.id = uuid() : this.id
  }
}

export { Compliment }