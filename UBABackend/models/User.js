const db = require("../config/db");

const User = {
    getAllUsers: (callback) => {
        db.query("SELECT * FROM utilisateur", callback);
    },

    getUserById: (id, callback) => {
        db.query("SELECT * FROM utilisateur WHERE id = ?", [id], callback);
    },

    createUser: (userData, callback) => {
        db.query("INSERT INTO utilisateur (nom, postnom, prenom, email, role, idService, motDePasse) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [userData.nom, userData.postnom, userData.prenom, userData.email, userData.role, userData.idService, userData.motDePasse],
            callback);
    },

    updateUser: (id, userData, callback) => {
        db.query("UPDATE utilisateur SET nom = ?, postnom = ?, prenom = ?, email = ?, role = ?, idService = ?, motDePasse = ? WHERE id = ?",
            [userData.nom, userData.postnom, userData.prenom, userData.email, userData.role, userData.idService, userData.motDePasse, id],
            callback);
    },

    deleteUser: (id, callback) => {
        db.query("DELETE FROM utilisateur WHERE id = ?", [id], callback);
    }
};

module.exports = User;
