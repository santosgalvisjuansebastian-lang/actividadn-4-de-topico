const Cita = require('../../domain/entities/Cita');

class RegistrarCita {
  constructor(citaRepository) {
    this.citaRepository = citaRepository;
  }

  async execute(data) {
    const cita = new Cita(data);
    return await this.citaRepository.save(cita);
  }
}

module.exports = RegistrarCita;
