class CitaController {
  constructor(registrarCitaUseCase) {
    this.registrarCitaUseCase = registrarCitaUseCase;
  }

  async registrar(req, res) {
    try {
      const cita = await this.registrarCitaUseCase.execute(req.body);
      res.status(201).json(cita);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = CitaController;
