const router = require("express").Router();
const exampleRoutes = require("./example");
const textRoute = require("./text.js")

// Book routes
router.use("/users", exampleRoutes);
router.use("/text", textRoute)

module.exports = router;
