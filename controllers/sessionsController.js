const db = require("../models");

// Defining methods for the sessionsController
module.exports = {
  findAll: function(req, res) {
    db.Sessions
      .find()
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllInCategory: function(req,res){
      db.Sessions
        .find(req.params.category)
        .sort({date: -1})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
  }
}