import { request, response, Router } from 'express';
import Appointment from "../models/appointment"

import { startOfHour, parseISO, isEqual } from 'date-fns';
// startOfHour -> converte minuto, segundo, milissegundo para zero
// parseISO -> converte string para formato de data nativo do JS
// isEqual -> verifica se duas datas são iguais

const appointmentsRouter = Router();


const appointments: Appointment[] = []; //appointments é declarado como um array de appointment

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));

  const findAppointmentIsEqual = appointments.find(appointment =>
    isEqual(parsedDate, appointment.date),
  );

  if (findAppointmentIsEqual) {
    return response.status(400).json({ message: "This appointment is already booked" });
  }

  const appointment = new Appointment(provider, parsedDate);

  appointments.push(appointment);

  return response.json(appointment);
})

export default appointmentsRouter;
