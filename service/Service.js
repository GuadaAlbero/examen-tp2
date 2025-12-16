class Service {
  constructor(dao) {
    this.dao = dao;
  }

  getAll = async () => {
    return await this.dao.getAll();
  };

  createOrUpdate = async (data) => {
    const { id, tipo, valor, timestamp } = data;

    const existente = await this.dao.getById(id);

    let alerta = null;

    if (tipo === "TEMPERATURA" && valor > 35) {
      alerta = "TEMPERATURA alta";
    }

    if (tipo === "HUMEDAD" && valor < 20) {
      alerta = "HUMEDAD baja";
    }

    if (tipo === "CO2" && valor > 1000) {
      alerta = "CO2 alto";
    }

    const lecturaParaGuardar = { id, tipo, valor, timestamp };

    const lecturaParaResponder = { ...lecturaParaGuardar, alerta };

    if (existente) {
      await this.dao.update(id, lecturaParaGuardar);
      return lecturaParaResponder;
    }

    await this.dao.create(lecturaParaGuardar);
    return lecturaParaResponder;
  };
}

export default Service;
