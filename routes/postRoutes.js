const postService = require('../service/postService.js');

const initPostRoute = function (server, connection) {

    server.route({
        method: 'GET',
        path: '/posts',
        handler: (request, h) => {
            return postService.get(connection);

        }

    })
    server.route({
        method: 'POST',
        path: '/post',
        handler: (request, h) => {
            return postService.post(connection, request.payload);


        }

    })

    server.route({
        method: 'PUT',
        path: '/post/{id}',
        handler: (request, h) => {
            return postService.update(connection, request.payload, request.params.id);



        }

    })

    server.route({
        method: 'DELETE',
        path: '/post/{id}',
        handler: (request, h) => {
            return postService.delete(connection, request.params.id);



        }

    })
}
module.exports = initPostRoute