import db from "../db/config/db.js";
import outlet from "./outlet.js";
import token from "./akses_token.js";
import event from "./event.js";
import drink from "./drink.js";
import food from "./food.js";
import gallery from "./gallery.js";
import snack from "./snack.js";
import profile from "./profile.js";
import contact from "./contact.js";
import rekomendation from "./rekomendation.js";

const outletControl = db.define("outlet", outlet, {
  tableName: "outlets",
});
const profileControl = db.define("profile", profile, {
  tableName: "profiles",
});
const tokenControl = db.define("token", token, {
  tableName: "akses_tokens",
});
const contactControl = db.define("contact", contact, {
  tableName: "contacts",
});

const drinkControl = db.define("drink", drink, {
  tableName: "drinks",
});
const eventControl = db.define("event", event, {
  tableName: "events",
});
const foodControl = db.define("food", food, {
  tableName: "foods",
});
const galleryControl = db.define("gallery", gallery, {
  tableName: "gallerys",
});
const snackControl = db.define("snack", snack, {
  tableName: "snacks",
});
const rekomendationControl = db.define("rekomendation", rekomendation, {
  tableName: "rekomendations",
});

outletControl.hasMany(profileControl, {
  foreignKey: "outlet_id",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});

profileControl.belongsTo(outletControl, {
  foreignKey: "outlet_id",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});

outletControl.hasMany(tokenControl, {
  foreignKey: "outlet_id",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});

tokenControl.belongsTo(outletControl, {
  foreignKey: "outlet_id",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});

outletControl.hasMany(contactControl, {
  foreignKey: "outlet_id",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});

contactControl.belongsTo(outletControl, {
  foreignKey: "outlet_id",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});

outletControl.hasMany(drinkControl, {
  foreignKey: "outlet_id",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});

drinkControl.belongsTo(outletControl, {
  foreignKey: "outlet_id",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});

outletControl.hasMany(eventControl, {
  foreignKey: "outlet_id",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});

eventControl.belongsTo(outletControl, {
  foreignKey: "outlet_id",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});

outletControl.hasMany(foodControl, {
  foreignKey: "outlet_id",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});

foodControl.belongsTo(outletControl, {
  foreignKey: "outlet_id",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});

outletControl.hasMany(galleryControl, {
  foreignKey: "outlet_id",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});

galleryControl.belongsTo(outletControl, {
  foreignKey: "outlet_id",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});

outletControl.hasMany(snackControl, {
  foreignKey: "outlet_id",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});

snackControl.belongsTo(outletControl, {
  foreignKey: "outlet_id",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});

outletControl.hasMany(rekomendationControl, {
  foreignKey: "outlet_id",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});

rekomendationControl.belongsTo(outletControl, {
  foreignKey: "outlet_id",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});
db.sync();

export {
  outletControl,
  profileControl,
  contactControl,
  tokenControl,
  drinkControl,
  eventControl,
  foodControl,
  galleryControl,
  snackControl,
  rekomendationControl,
};
