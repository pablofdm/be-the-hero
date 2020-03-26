const express = require('express');
const ongController = require('./controllers/ongController')
const incidentController = require('./controllers/incidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
const routes = express.Router();


//Rotas do login
routes.post('/sessions', SessionController.create)
//Rotas das ONGS
routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);
//Rotas do perfil
routes.get('/profile', ProfileController.index)
//Rota dos Casos
routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete )
module.exports = routes;