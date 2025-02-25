const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientController");

// 🔹 Route pour créer un client et son ticket
router.post("/clients", clientController.createClientWithTicket);

// 🔹 Route pour récupérer les tickets en attente
router.get("/tickets/en-attente", clientController.getPendingTickets);

module.exports = router;
