const express = require("express");

const router = express.Router();
const app = express();

router.get("/ping", (req, res) => {
  res.status(200).json({ data: "Pong!" });
});

app.use("/api", router);

app.use("*", (req, res) => {
  res.status(404).json({ data: "Not Found!" });
});

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
