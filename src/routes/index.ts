import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
// metodo use funciona para qualquer rota (get, post, put, delete)
// se tiver a url tiver /appointments manda para appointments.routes.ts

export default routes;
