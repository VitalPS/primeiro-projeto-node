import { v4 } from "uuid"

class Appointment {
  id: string;

  provider: string;

  date: Date;

  constructor({ provider, date }: Omit<Appointment, 'id'>) {
    // Omit é uma função do TS (por isso as <>) que recebe como primeiro parametro
    // Qual a tipagem que você quer utilizar (foi utilizado a propria class Appointment)
    // Qual paramentro você não quer utilizar (foi omitido o id, que será criado manualmente)
    this.id = v4();
    this.provider = provider;
    this.date = date;
  }
};

export default Appointment;
