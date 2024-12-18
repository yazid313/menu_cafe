const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const cors = require("cors");

app.use(express.static("images"));
// app.use(express.static("public"));

//parse aplikasion json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

//panggil routes
const routes = require("./routes/index");
routes(app);

//apapun yg dimasukan jika salah tampilkan:
app.use((req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
