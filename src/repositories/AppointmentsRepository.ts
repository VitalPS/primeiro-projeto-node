import { isEqual } from "date-fns";
import Appointment from "../models/Appointment"

class AppointmentsRepository {
  private appointments: Appointment[];
  // private não permite que a classe seja acessível fora da classe AppointmentsRepository
  // recomendável que apenas o repositório seja responsável por trabalhar os dados que ele armazena, por isso privado

  constructor() {
    this.appointments = [];
  }

  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    );

    return findAppointment || null; // ou retorna o valor de findAppointment, ou volta nulo
  }

  public create(provider: string, date: Date): Appointment {
    // public permite que seja acessível fora da classe AppointmentsRepository
    // criar metodos no TS é recomendável que você coloque o retorno que você quer ter (passar o mouse no returno e vê)
    const appointment = new Appointment(provider, date);

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
