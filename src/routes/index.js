import userRoute from "./userRouter.js";
import loginRoute from "./loginRouter.js";
import foodRoute from "./foodRouter.js";
import drinkRoute from "./drinkRouter.js";
import snackRoute from "./snackRouter.js";
import rekomendationRoute from "./rekomendationRouter.js";
import eventRoute from "./eventRouter.js";

export default (app) => {
  app.use("/api/v1/user", userRoute);
  app.use("/api/v1/login", loginRoute);
  app.use("/api/v1/food", foodRoute);
  app.use("/api/v1/drink", drinkRoute);
  app.use("/api/v1/snack", snackRoute);
  app.use("/api/v1/rekomendation", rekomendationRoute);
  app.use("/api/v1/event", eventRoute);
};
