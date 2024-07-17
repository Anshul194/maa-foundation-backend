const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'MAA Foundation Backend ',
      version: '1.0.0',
      description: 'A description of your API',
    },
    servers: [
      {
        url: 'http://localhost:5001/api',
      },
      
    ],
  },
  apis: ['./Routes/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
