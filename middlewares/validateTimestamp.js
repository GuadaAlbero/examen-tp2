export default function validateTimestamp(req, res, next) {
  const { timestamp } = req.body;

  if (!timestamp || typeof timestamp !== "string") {
    return res.status(400).send({ error: "timestamp inválido" });
  }

  const parsed = Date.parse(timestamp);

  if (isNaN(parsed)) {
    return res.status(400).send({ error: "timestamp debe tener formato ISO válido" });
  }

  next();
}
