import { request, response, Router } from 'express';
import { uuid } from 'uuidv4';
import { startOfHour, parseISO, isEqual } from 'date-fns';
// startOfHour -> converte minuto, segundo, milissegundo para zero
// parseISO -> converte string para formato de data nativo do JS
// isEqual -> verifica se duas datas são iguais

const appointmentsRouter = Router();

interface appointment {
  id: string
  provider: string;
  date: Date;
}

const appointments: appointment[] = []; //appointments é declarado como um array de appointment

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));

  const findAppointmentIsEqual = appointments.find(appointment =>
    isEqual(parsedDate, appointment.date),
  );

  if (findAppointmentIsEqual) {
    return response.status(400).json({ message: "This appointment is already booked" })
  }

  const appointment = {
    id: uuid(),
    provider,
    date: parsedDate,
  };

  appointments.push(appointment);

  return response.json(appointment);
})

export default appointmentsRouter;
