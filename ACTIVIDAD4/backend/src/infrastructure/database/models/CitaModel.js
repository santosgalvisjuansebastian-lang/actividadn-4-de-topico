const mongoose = require('mongoose');

const CitaSchema = new mongoose.Schema({
  pacienteId: { type: String, required: true },
  medicoId: { type: String, required: true },
  fecha: { type: String, required: true },
  hora: { type: String, required: true },
});

module.exports = mongoose.model('Cita', CitaSchema);
