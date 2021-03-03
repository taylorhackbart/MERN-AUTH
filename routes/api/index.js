const router = require("express").Router();
const exampleRoutes = require("./example.js");
const textRoute = require("./text.js")

// routes
router.use("/users", exampleRoutes);
router.use("/text", textRoute)

module.exports = router;
