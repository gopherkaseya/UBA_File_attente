const db = require("../config/db");

const Ticket = {
    getNextTicketNumber: (callback) => {
        const sql = "SELECT COUNT(*) AS total FROM Ticket";
        db.query(sql, callback);
    },

    create: (ticketNumber, idService, clientId, callback) => {
        const heureArrivee = new Date();
        const statut = "en attente";
        const sql = "INSERT INTO Ticket (numero, idService, heureArrivee, statut, idClient) VALUES (?, ?, ?, ?, ?)";
        db.query(sql, [ticketNumber, idService, heureArrivee, statut, clientId], callback);
    },

    getPendingTickets: (callback) => {
        const sql = `
            SELECT Ticket.id, Ticket.numero, Ticket.statut, Ticket.heureArrivee, Client.nom 
            FROM Ticket 
            INNER JOIN Client ON Ticket.idClient = Client.id 
            WHERE Ticket.statut = 'en attente'
        `;
        db.query(sql, callback);
    }
};

module.exports = Ticket;
