const db = require('../config/db');

const Service = {
    create: (nomservice, descriptionService, callback) => {  // Ajout de `callback` en paramètre
        const sql = "INSERT INTO Service (nomService, description) VALUES (?, ?)";
        db.query(sql, [nomservice, descriptionService], (err, result) => {
            if (err) return callback(err, null);
            callback(null, { id: result.insertId, nomservice, descriptionService });
        });
    },

    getAll: (callback) => {
        const sql = "SELECT * FROM Service";
        db.query(sql, (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    }
};

module.exports = Service;
