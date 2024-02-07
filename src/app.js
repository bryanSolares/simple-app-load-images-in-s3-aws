import express from "express";
import "dotenv/config";
import cors from "cors";
import routes from "./routes/routes.js";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)), "/public")));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Service online on Port ${PORT}`);
});

console.log();
