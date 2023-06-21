import { EntitySchema, MixedList } from "typeorm";
import { User, Appointment, Doctor, Owner, Pet } from "../entity";
import { UserController } from "../controllers";

const errorReasons = {
  username: "Invalid username",
  password: "Invalid password",
  other: "Unknown error",
} as const;

const allControllers = [UserController] as const;

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
const allEntities: MixedList<string | Function | EntitySchema<any>> = [User, Appointment, Doctor, Owner, Pet]

export { allControllers, allEntities, errorReasons };
