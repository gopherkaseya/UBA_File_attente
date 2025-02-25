const User = require("../models/User");

exports.getAllUsers = (req, res) => {
    User.getAllUsers((err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json(results);
        }
    });
};

exports.getUserById = (req, res) => {
    const id = req.params.id;
    User.getUserById(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (result.length === 0) {
            res.status(404).json({ message: "Utilisateur non trouvé" });
        } else {
            res.status(200).json(result[0]);
        }
    });
};

exports.createUser = (req, res) => {
    const newUser = req.body;
    User.createUser(newUser, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: "Utilisateur créé avec succès", userId: result.insertId });
        }
    });
};

exports.updateUser = (req, res) => {
    const id = req.params.id;
    const updatedUser = req.body;
    User.updateUser(id, updatedUser, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ message: "Utilisateur non trouvé" });
        } else {
            res.status(200).json({ message: "Utilisateur mis à jour avec succès" });
        }
    });
};

exports.deleteUser = (req, res) => {
    const id = req.params.id;
    User.deleteUser(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ message: "Utilisateur non trouvé" });
        } else {
            res.status(200).json({ message: "Utilisateur supprimé avec succès" });
        }
    });
};
