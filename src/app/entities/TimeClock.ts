import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

import { User } from "./User";


@Entity("timeClocks")
class TimeClock {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  userId: string;

  @JoinColumn({ name: "users" })
  @ManyToOne(() => User)
  UserId: User;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @Column()
  altitude: string;

  @Column()
  breakType: string;

  @Column()
  created_at: Date;

  constructor() {
    (!this.id) ? this.id = uuid() : this.id
  }

}

export { TimeClock };