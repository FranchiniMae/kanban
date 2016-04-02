var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST
// testing api USER
    auth = require('../resources/auth');

var goalsController = require('../controllers/goals');
var tasksController = require('../controllers/tasks');

router.route('/api/goals')
  .get(goalsController.getAll)
  .post(auth.ensureAuthenticated, goalsController.createGoal);
router.route('/api/goals/:id')
  .patch(goalsController.updateGoal)
  .delete(goalsController.removeGoal);
router.route('/api/tasks')
  .get(tasksController.getAll)
  .post(tasksController.createTask);
router.route('/api/tasks/:id')
  .patch(tasksController.updateTask)
  .delete(tasksController.removeTask);

module.exports = router;