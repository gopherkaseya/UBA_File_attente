module.exports = {
    createClientWithTicket: (req, res) => {
        res.json({ message: "Créer un ticket" });
    },
    getPendingTickets: (req, res) => {
        res.json({ message: "Récupérer les tickets en attente" });
    }
};
