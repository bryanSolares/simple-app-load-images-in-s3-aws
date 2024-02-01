import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: "5mb" }));

app.listen(PORT, () => {
  console.log(`Service online on Port ${PORT}`);
});
