import express from "express";
import authRoutes from "routes/authRoutes";
import userRoutes from "routes/userRoutes";

const app = express();

app.use(express.json());

authRoutes(app);
userRoutes(app);

app.use("/", (req, res) => {
  res.send("Server running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App running... , http://localhost:${PORT}`);
});
