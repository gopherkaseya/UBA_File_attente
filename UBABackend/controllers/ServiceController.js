const Service = require("../models/Service");

exports.createService = (req, res) => {
    const { nomservice, descriptionService } = req.body;

    if (!nomservice || !descriptionService) {
        return res.status(400).json({ message: "Tous les champs sont requis." });
    }

    Service.create(nomservice, descriptionService, (err, service) => {
        if (err) {
            console.error("Erreur lors de l’insertion du service :", err);
            return res.status(500).json({ message: "Erreur serveur" });
        }

        console.log("Service créé avec ID:", service.id);
        return res.status(201).json({ message: "Service ajouté avec succès", service });
    });
};

exports.getAllServices = (req, res) => {
    Service.getAll((err, services) => {
        if (err) {
            console.error("Erreur lors de la récupération des services :", err);
            return res.status(500).json({ message: "Erreur serveur" });
        }

        console.log("Liste des services envoyée");
        res.json(services);
    });
};
