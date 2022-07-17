const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        title: 'Meta API',
        description: '示範範例生成文件',
    },
    host: 'localhost:3000',
    schemes: ['http', 'https'],
}

const outputFile = './swagger-output.json'
const endpointFiles = ['./app.js']

swaggerAutogen(outputFile, endpointFiles, doc)