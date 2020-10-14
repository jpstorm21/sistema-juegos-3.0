import express from "express";

const app = express();

// settings
app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  return res.send(`The APIS is at http://localhost:${app.get("port")}`);
});

app.listen(app.get("port"));
console.log(`Listening on http://localhost:${app.get("port")}`);
