import { Column, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Doctor } from "./Doctor";
import { Pet } from "./Pet";
import { AppointmentStatus } from "./helpers/consts";

export class Appointment {

  @PrimaryGeneratedColumn()
  id: number;

  @Column("date")
  date: Date;

  @OneToOne(() => Doctor)
  @JoinColumn()
  doctor: Doctor;

  @OneToOne(() => Pet)
  @JoinColumn()
  pet: Pet;

  @Column({
    type: "enum",
    enum: AppointmentStatus,
    default: AppointmentStatus.PENDING,
  })
  status: AppointmentStatus;
}
