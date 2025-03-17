require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const clientRoutes = require("./routes/clientRoutes");
const ticketRoutes = require("./routes/ticketRoutes");
const serviceRoutes = require("./routes/serviceRoutes");

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use("/api", clientRoutes);
app.use("/api", ticketRoutes);
app.use("/api", serviceRoutes);

app.get("/", (req, res) => {
    res.send("Bienvenue sur mon API Node.js avec MySQL !");
});

const server = app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});

// Gestion des arrêts pour libérer le port
process.on("SIGINT", () => {
    console.log("Arrêt du serveur...");
    server.close(() => {
        console.log("Serveur fermé proprement.");
        process.exit(0);
    });
});

process.on("SIGTERM", () => {
    console.log("Arrêt du serveur (SIGTERM)...");
    server.close(() => {
        console.log("Serveur fermé proprement.");
        process.exit(0);
    });
});
