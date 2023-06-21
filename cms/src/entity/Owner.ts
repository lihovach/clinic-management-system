import { Column, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Pet } from "./Pet";
import { Gender } from "./helpers/consts";

export class Owner {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    type: "enum",
    enum: Gender,
    default: Gender.MALE,
  })
  gender: Gender;

  @Column("date")
  birthDate: Date;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @ManyToOne(() => Pet)
  pets: Pet[];
}
