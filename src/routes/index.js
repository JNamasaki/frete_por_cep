import express from 'express';
import cep from './cepRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Endpoint iniciado!');
    })
    app.use(
        express.json(),
        cep
    )
}
export default routes;