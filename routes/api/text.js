const router = require("express").Router();
const controller = require("../../controllers/controller");

// Matches with "/api/user"
router.route("/")
  .get(controller.findAll)
  .post(controller.create);

// Matches with "/api/texts/:id"
router
  .route("/:id")
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.remove);

//Matches with "/api/texts/name/:location" which is not applicable here but a good reminder to give /:name and /:id added paths for DB structure
router
.route("/name/:location")
.get(controller.findAllByName)
.put(controller.update)

module.exports = router;
