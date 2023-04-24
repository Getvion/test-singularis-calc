export interface IUser {
  name: string;
  salary: number;
  hoursPerDay: number;
  year: number;
  month: number;
  salaryPerHour: number;
}

export type Users = IUser[];
