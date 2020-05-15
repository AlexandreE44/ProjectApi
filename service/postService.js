const postDao = require('../dao/postDao.js');

module.exports = {
    get(connection) {
        return postDao.get(connection);
    },

    post(connection, post) {
        return postDao.post(connection, post);
    },
    update(connection, post, id) {
        return postDao.update(connection, post, id);
    },
    delete(connection, post) {
        return postDao.delete(connection, post);
    }
}