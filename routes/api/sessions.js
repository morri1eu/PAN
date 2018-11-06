const router = require("express").Router();
const sessionsController = require("../../controllers/sessionsController");

// Matches with "/api/sessions"
router
.route("/")
  .get(sessionsController.findAll)
  .post(sessionsController.create);


router
    .route("/:category")
    .get(sessionsController.findAllInCategory)
  module.exports = router;