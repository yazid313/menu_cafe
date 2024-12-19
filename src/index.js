import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes/index.js"; // Tambahkan ".js" untuk mendukung ES Modules

const app = express();
const port = 3000;

app.use(express.static("images"));
// app.use(express.static("public"));

// Debugging log

// Parse aplikasi JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

// Panggil routes
routes(app);

// Jika endpoint salah, tampilkan 404
app.use((req, res) => {
  res.status(404).send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
