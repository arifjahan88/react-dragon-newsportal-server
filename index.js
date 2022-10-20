const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

const categories = require("./Data/Categories.json");
const news = require("./Data/News.json");

app.get("/", (req, res) => {
  res.send("News Api is Running");
});

app.get("/news-categories", (req, res) => {
  res.send(categories);
});
app.get("/news", (req, res) => {
  res.send(news);
});
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});
app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id === "08") {
    res.send(news);
  } else {
    const category = news.filter((n) => n.category_id === id);
    res.send(category);
  }
});

app.listen(port, () => {
  console.log("Dragon server is running", port);
});
