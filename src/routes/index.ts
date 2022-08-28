import express from "express";
import authRoutes from "routes/authRoutes";
import addUserRoute from "routes/addUserRoute";

const app = express();

app.use(express.json());

// app.use(
//   cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 1000,
//     keys: [keys.cookieKey],
//   })
// );

authRoutes(app);
addUserRoute(app);

app.get("/", (req, res) => {
  res.send({ hi: "there from express server powered with ts" });
});

export default app;
