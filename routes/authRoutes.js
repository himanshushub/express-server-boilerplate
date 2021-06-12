const requireLogin = require("../middlewares/requireLogin");
const authRoutesController = require("../controller/authRoutesController");

module.exports = (app) => {
  app.post("/api/authRoutes", requireLogin, authRoutesController.authenticate);
};
