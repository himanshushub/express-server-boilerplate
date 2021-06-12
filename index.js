const express = require("express");
// const authRoutes = require("./routes/authRoutes");

const app = express();

// app.use(
//   cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 1000,
//     keys: [keys.cookieKey],
//   })
// );

app.use(express.json());

// authRoutes(app);

app.get("/", (req, res) => {
  res.send({ hi: "there from express server" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
