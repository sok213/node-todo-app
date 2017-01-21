var Todos = require('../models/todoModel'),
    bodyParser = require('bodyParser');
    
module.exports = function(app) {
  // Parse out JSON out of the HTTP request body.
  app.use(bodyParser.json());
  // Handles URL encoded data. 
  app.use(bodyParser.urlencoded( { extended: true }));
  
  // GET request to api.
  app.get('/api/todos/:username', function(req, res) {
    
    // Find data that matches the search query.
    Todos.find({ username: req.params.username }, 
      function(err, todos) {
        if (err) throw err;
        
        // Send back the found data as a reponse.
        res.send(todos);
      });
  });
  
  // GET request to api.
  app.get('/api/todo/:id', function(req, res) {
    
    // Find data and send to response.
    Todos.findById({ _id: req.params.id }, function() {
      if (err) throw err;
      
      res.send(todo);
    });
  });
  
  // POST to /todo (JSON data inside an HTTP request)
  app.post('/api/todo', function(req, res) {
    
    // If it has id, find it in the database and update the properties
    // with the properties passed in via JSON in the HTTP request.
    if(req.body.id) {
      Todos.findByIdAndUpdate(req.body.id, 
        {
          todo: req.body.todo, 
          isDone: req.body.isDone,
          hasAttachment: req.body.hasAttachment
        }, function(err, todo) {
            if (err) throw error;    
            res.send('Success');
        });  
    // If no ID, create a new todo and save it to Mongo.
    } else {
      var newTodo = Todos({
        username: 'Test',
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment
      });
      newTodo.save(function(err) {
        if (error) throw error;
        res.send('Success');
      });
    }
  });
  
  // DELETE from /todo
  app.delete('/api/todo', function(req, res) {
    Todos.findByIdAndRemove(req.body.id, function(err) {
      if (error) throw error;
      res.send('Success');
    });
  });
  
};









