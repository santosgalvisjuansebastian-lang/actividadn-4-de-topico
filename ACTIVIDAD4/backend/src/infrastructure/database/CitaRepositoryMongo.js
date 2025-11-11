const CitaRepositoryPort = require('../../domain/repositories/CitaRepositoryPort');

class CitaRepositoryMongo extends CitaRepositoryPort {
  constructor(model) {
    super();
    this.model = model;
  }

  async save(cita) {
    return await this.model.create(cita);
  }

  async findById(id) {
    return await this.model.findById(id);
  }

  async findByFecha(fecha) {
    return await this.model.find({ fecha });
  }
}

module.exports = CitaRepositoryMongo;
