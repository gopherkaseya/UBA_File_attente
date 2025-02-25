const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/TicketController');

router.get('/tickets/en-attente', ticketController.getPendingTickets);
router.post('/tickets', ticketController.createClientWithTicket);

module.exports = router;
