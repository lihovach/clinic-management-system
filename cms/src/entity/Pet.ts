import { Column, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Gender, PetType } from "./helpers/consts";
import { Owner } from "./Owner";

export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column("int8")
  age: number;

  @Column({
    type: "enum",
    enum: PetType,
    default: PetType.CAT,
  })
  type: PetType;

  @Column({
    type: "enum",
    enum: Gender,
    default: Gender.MALE,
  })
  gender: Gender;

  @OneToOne(() => Owner)
  @JoinColumn()
  owner: Owner;
}
