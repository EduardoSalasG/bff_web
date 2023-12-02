import express from 'express';
import cors from 'cors';
class Server {
    app: any;
    port: any;
    // categorias_cursoPath: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        // this.categorias_cursoPath = '/categorias-curso';

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

        // this.app.use(this.categorias_cursoPath, require('../routes/categorias_curso.routes'))

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(' Servidor corriendo en el puerto', this.port)
        })

    }


}


module.exports = Server;