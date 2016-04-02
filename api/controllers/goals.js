var Goal = require('../models/Goal');

var goalsController = {
  getAll: function(req, res) {
  	Goal.find(function (err, allGoals) {
  		if (err) {
  			res.status(500).json({error: err.message});
  		} else {
  			res.json(allGoals);
  		}
  	});
    // res.send("successfully hitting get api")
  },
  createGoal: function(req, res) {
  	User.findById(req.user, function (err, user) {
  		var newGoal = new Goal(req.body);
  		newGoal.save(function (err, savedGoal) {
  			if (err) {
  				res.status(500).json({ error: err.message});
  			} else {
  				user.goals.push(newGoal);
  				user.save();
  				res.json(savedGoal);
  			}
  		});
  	});
  },
  removeGoal: function(req, res) {

  },
  updateGoal: function(req, res) {

  }
};

module.exports = goalsController;