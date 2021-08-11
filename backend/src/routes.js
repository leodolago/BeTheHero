const express = require('express');

// import controllers
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentConteoller');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// session route
routes.post('/sessions', SessionController.create);

// ongs routes
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

// incidents routes
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.get('/incidents/delete/:id', IncidentController.delete);

// profile routes
routes.get('/profile', ProfileController.index);

module.exports = routes;

