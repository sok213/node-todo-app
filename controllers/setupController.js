var Todos = require('../models/todoModel');

module.exports = function(app) {
  app.get('/api/setupTodos', function(req, res) {
    
    // Seed database
    var starterTodos = [
      {
        username: 'Mark',
        todo: 'Play bass',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'Elon',
        todo: 'Go to Mars',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'Taylor',
        todo: 'Stick with one boyfriend',
        isDone: false,
        hasAttachment: false
      }
    ];
    
    // Create Schema objects and send it back to the response.
    Todos.create(starterTodos, function(err, results) {
      res.send(results);
    });
  });
};