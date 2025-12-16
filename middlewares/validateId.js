export default function validateId(req, res, next) {
  const { id } = req.body;

  if (!id || typeof id !== "string") {
    return res.status(400).send({ error: "El id debe ser un string" });
  }

  const regex = /^[A-Za-z0-9]{8}$/;

  if (!regex.test(id)) {
    return res.status(400).send({ error: "El id debe tener 8 caracteres alfanuméricos" });
  }

  next();
}
