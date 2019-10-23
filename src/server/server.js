const Hapi = require('@hapi/hapi');
import getHTMLTemplate from './plugins/pages/template';
const server = Hapi.server({ port: 3000, host: 'localhost' });

server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return getHTMLTemplate;
    }
}

);

server.ext(
{
            type: 'onPostStart',
            method: function (_, done) {
                console.log(`Server is running: ${server.info.uri}`);
            }
        }
);

export default server;
