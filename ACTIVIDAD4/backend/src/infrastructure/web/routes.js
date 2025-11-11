const express = require('express');
const router = express.Router();

module.exports = (controller) => {
  router.post('/citas', (req, res) => controller.registrar(req, res));
  return router;
};
