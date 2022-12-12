import viacep from "../config/viacep.js";

class CepController {

    static buscarCep = async(req, res) => {
        try {
            const { data } = await viacep.get(req.params.id + "/json");

            res.send({ Endereço: data })
        } catch (erro) {
            if (erro.code == "ERR_BAD_REQUEST") {
                res.send({ error: "CEP Invalido!" })
            } else res.send({ error: "Algo deu errado! Erro: " + erro.code })
        }

    }
}

export default CepController