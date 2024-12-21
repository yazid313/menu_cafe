import db from "../db/config/db.js";
import user from "./user.js";
import token from "./akses_token.js";
import event from "./event.js";
import drink from "./drink.js";
import food from "./food.js";
import rekomendation from "./rekomendation.js";
import snack from "./snack.js";

const userControl = db.define("user", user, {
  tableName: "users",
});
const tokenControl = db.define("token", token, {
  tableName: "akses_tokens",
});
const eventControl = db.define("event", event, {
  tableName: "events",
});
const drinkControl = db.define("drink", drink, {
  tableName: "drinks",
});
const foodControl = db.define("food", food, {
  tableName: "food",
});
const rekomendationControl = db.define("rekomendation", rekomendation, {
  tableName: "rekomendations",
});
const snackControl = db.define("snack", snack, {
  tableName: "snacks",
});

userControl.hasMany(tokenControl, {
  foreignKey: "user_id",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});

tokenControl.belongsTo(userControl, {
  foreignKey: "user_id",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});

db.sync();

export {
  userControl,
  tokenControl,
  eventControl,
  drinkControl,
  foodControl,
  rekomendationControl,
  snackControl,
};
