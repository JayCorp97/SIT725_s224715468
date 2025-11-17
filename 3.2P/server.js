const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

const plants = {
  tomato: {
    name: "Tomato",
    disease: "Early Blight",
    care: "Trim leaves, improve airflow, avoid wetting foliage."
  },
  potato: {
    name: "Potato",
    disease: "Late Blight",
    care: "Use fungicide spray and remove infected plants."
  },
  rose: {
    name: "Rose",
    disease: "Black Spot",
    care: "Remove blackened leaves and increase sunlight."
  }
};

app.get("/api/plant", (req, res) => {
  const query = req.query.name?.toLowerCase();
  const result = plants[query];

  if (!result) {
    return res.json({ error: "Plant not found" });
  }

  res.json(result);
});

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
