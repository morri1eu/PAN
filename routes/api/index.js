const router = require("express").Router();
const userRoutes = require("./users");
const sessionRoutes = require("./sessions");

// User routes
router.use("/users", userRoutes);

// Session routes
router.use("/sessions", sessionRoutes);

module.exports = router