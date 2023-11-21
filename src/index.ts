import express from "express";
import { knex } from "db/knex";
import authRoutes from "routes/authRoutes";
import userRoutes from "routes/userRoutes";

const app = express();

app.use(express.json());

authRoutes(app);
userRoutes(app);

app.get("/", async (req, res) => {
  let result = await knex("users").first();
  res.send(result);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
