require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const clientRoutes = require("./routes/clientRoutes");
const ticketRoutes = require("./routes/ticketRoutes");

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// 🔹 Routes clients et tickets
app.use("/api", clientRoutes);
app.use("api", ticketRoutes);
// Route de test
app.get("/", (req, res) => {
    res.send("Bienvenue sur mon API Node.js avec MySQL !");
});

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
