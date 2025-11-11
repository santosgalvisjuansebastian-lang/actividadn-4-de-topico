class Cita {
  constructor({ id, pacienteId, medicoId, fecha, hora }) {
    this.id = id;
    this.pacienteId = pacienteId;
    this.medicoId = medicoId;
    this.fecha = fecha;
    this.hora = hora;
  }
}
module.exports = Cita;
