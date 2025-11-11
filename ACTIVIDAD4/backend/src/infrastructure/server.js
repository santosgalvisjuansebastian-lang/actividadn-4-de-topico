const express = require('express');
const mongoose = require('mongoose');
const CitaModel = require('./database/models/CitaModel');
const CitaRepositoryMongo = require('./database/CitaRepositoryMongo');
const RegistrarCita = require('../application/usecases/RegistrarCita');
const CitaController = require('./web/controllers/CitaController');
const routesFactory = require('./web/routes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/healthconnect')
  .then(() => console.log('🟢 MongoDB conectado'))
  .catch((err) => console.error('🔴 Error al conectar a MongoDB', err));

const citaRepository = new CitaRepositoryMongo(CitaModel);
const registrarCita = new RegistrarCita(citaRepository);
const citaController = new CitaController(registrarCita);
app.use('/api', routesFactory(citaController));

app.listen(3000, () => console.log('🚀 Servidor en puerto 3000'));
