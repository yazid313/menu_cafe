const userRoute = require("./userRouter.js");
const loginRoute = require("./userRouter.js");
const foodRoute = require("./foodRouter.js");
const drinkRoute = require("./drinkRouter.js");
const snackRoute = require("./snackRouter.js");
const rekomendationRoute = require("./rekomendationRouter.js");
const contactRoute = require("./contactRouter.js");
module.exports = (app) => {
  app.use("/api/v1/user", userRoute);
  app.use("/api/v1/login", loginRoute);
  app.use("/api/v1/food", foodRoute);
  app.use("/api/v1/drink", drinkRoute);
  app.use("/api/v1/snack", snackRoute);
  app.use("/api/v1/rekomendation", rekomendationRoute);
  app.use("/api/v1/contact", contactRoute);
};
