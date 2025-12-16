class Controller {
  constructor(service) {
    this.service = service;
  }

  createOrUpdate = async (req, res) => {
    try {
      const lectura = await this.service.createOrUpdate(req.body);
      res.status(201).send(lectura);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };

  getAll = async (req, res) => {
    try {
      const sensores = await this.service.getAll();
      res.status(200).send(sensores);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };
}

export default Controller;
