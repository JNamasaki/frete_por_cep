import axios from "axios";

const viacep = axios.create({
    baseURL: 'viacep.com.br/ws/'
})

export default viacep;