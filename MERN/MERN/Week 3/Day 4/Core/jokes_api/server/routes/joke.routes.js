const jokesController = require('../controllers/jokes.controllers');

module.exports = (app) => {
    app.get('/api/jokes', jokesController.getAllJokes);
    app.get('/api/jokes/:id', jokesController.getJokeById);
    app.post('/api/jokes', jokesController.createJoke);
    app.put('/api/jokes/:id', jokesController.updateJoke);
    app.delete('/api/jokes/:id', jokesController.deleteJoke);
};






