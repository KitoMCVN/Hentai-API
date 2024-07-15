import express from "express";
import chalk from "chalk";

const app = express();

app.get("/", (req, res) => {
  res.json({ hi: "hi" });
});

app.listen(210, () => {
  console.log("sv bat r cu");
});
