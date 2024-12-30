import outletRoute from "./outletRouter.js";
import profileRoute from "./profileRouter.js";
import contactRoute from "./contactRouter.js";
import loginRoute from "./loginRouter.js";
import foodRoute from "./foodRouter.js";
import drinkRoute from "./drinkRouter.js";
import snackRoute from "./snackRouter.js";
import galleryRoute from "./galleryRouter.js";
import eventRoute from "./eventRouter.js";

export default (app) => {
  app.use("/api/v1/outlet", outletRoute);
  app.use("/api/v1/profile", profileRoute);
  app.use("/api/v1/contact", contactRoute);
  app.use("/api/v1/login", loginRoute);
  app.use("/api/v1/food", foodRoute);
  app.use("/api/v1/drink", drinkRoute);
  app.use("/api/v1/snack", snackRoute);
  app.use("/api/v1/gallery", galleryRoute);
  app.use("/api/v1/event", eventRoute);
};
