const db = require("../config/db");

const Client = {
    create: (nom, postnom, prenom, callback) => {
        const sql = "INSERT INTO Client (nom, postnom, prenom) VALUES (?, ?, ?)";
        db.query(sql, [nom, postnom, prenom], callback);
    }
};

module.exports = Client;
