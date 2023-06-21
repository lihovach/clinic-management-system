import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Appointment } from "./Appointment";

export class Doctor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column("date")
  birthDate: Date;

  @ManyToOne(() => Appointment)
  appointments: Appointment[];
}
