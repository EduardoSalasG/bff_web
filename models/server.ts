import express from 'express';
import cors from 'cors';
var { graphqlHTTP } = require("express-graphql")
class Server {
    app: any;
    port: any;
    graphqlPath: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.graphqlPath = '/graphql';

        // Conectar a base de datos
        // this.conectarDB();

        //Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    // async conectarDB() {
    //     await testConection()
    // }

    middlewares() {

        // CORS 
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

    }


    routes() {

        this.app.use(this.graphqlPath, graphqlHTTP())

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(' Servidor corriendo en el puerto', this.port)
        })

    }


}


module.exports = Server;