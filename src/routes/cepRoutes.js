import express from "express"
import viacep from "../config/viacep.js"
import CepController from "../controller/CepController.js"

const router = express.Router();

router
    .get("/", (req, res) => {
        return res.send({ message: 'endpoint inicializado!' });
    })
    .get("/cep/:id", CepController.buscarCep)
export default router;