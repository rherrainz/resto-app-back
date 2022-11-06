import express, { application } from 'express';
import {PORT} from './config/config.js';
import {getConnection} from './db/connection.js';
import { commentsRouter } from './routes/commentsRouter.js';
import { menuRouter } from './routes/menuRouter.js';
import cors from 'cors';

const app = express();
const port = PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({/*origin: 'http://localhost:3000' */}));


//conexion a la base de datos
getConnection()
    .then((mensaje) => {
        console.log(mensaje)
    })
    .catch(console.log);


//


app.use('/comments', commentsRouter);
app.use('/menu', menuRouter);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`App levantada en el puerto ${port}!`))