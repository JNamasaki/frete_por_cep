import axios from "axios";
const viacep = 'https://viacep.com.br/ws/';

async function buscarCep(parameters) {
    const response = await axios.get(viacep + `72860663/json`);
    console.log(response.data)
}

buscarCep(72860663)