module.exports = {
    get(connection) {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM `user`', function (err, rows, fields) {
                if (err) throw err;
                for (var i = 0; i < rows.length; i++) {
                    result = rows;
                };
                resolve(result)
            });
        })

    },
    post(connection, post) {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO user (nom,prenom) VALUES (?,?)', [post.nom, post.prenom], function (err, rows, fields) {
                if (err) reject(err);

                resolve(rows)

            });

        })

    },
    update(connection, post, id) {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE user SET nom = ?,prenom = ? WHERE id = ?', [post.nom, post.prenom, id], function (err, rows, fields) {
                if (err) reject(err);

                resolve(rows)

            });

        })

    },
    delete(connection, id) {
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM user WHERE id = ? ', [id], function (err, rows, fields) {
                if (err) reject(err);

                resolve(rows)

            });

        })

    }
}