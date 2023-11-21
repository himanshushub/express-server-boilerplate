import express from "express";
import authRoutes from "routes/authRoutes";
import userRoutes from "routes/userRoutes";
import Knex from "knex";
import config from "../knexfile";

const knex = Knex(config);

const app = express();

app.use(express.json());

authRoutes(app);
userRoutes(app);

app.use("/", async (req, res) => {
  let result = await knex("users").first();
  res.send(result);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
