import express from "express";
import authRoutes from "routes/authRoutes";
import userRoutes from "routes/userRoutes";

const app = express();

app.use(express.json());

authRoutes(app);
userRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
