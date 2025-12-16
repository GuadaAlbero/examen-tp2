export default function validateTipo(req, res, next) {
  const { tipo } = req.body;
  const tiposValidos = ["TEMPERATURA", "HUMEDAD", "CO2"];

  if (!tiposValidos.includes(tipo)) {
    return res.status(400).send({ error: "tipo inválido" });
  }

  next();
}

