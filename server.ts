import express, {Request, Response} from 'express';
import UserController from "./controllers/UserController";
import TuitController from "./controllers/TuitController";
import TuitDao from "./daos/TuitDao";
import UserDao from "./daos/UserDao";
import mongoose from "mongoose";

const DB_USERNAME = 'vaishnavi';
const DB_PASSWORD = 'vaishnavi';
//const connectionString = `mongodb://127.0.0.1:27017/tuitdb`;
const connectionString = 'mongodb+srv://vaishnavi:vaishnavi@cluster0.zct7x.mongodb.net/tuiterdb?retryWrites=true&w=majority'
mongoose.connect(connectionString);

// create RESTful Web service API
const app = express();
const userDao = new UserDao();
const tuitDao = new TuitDao();
app.use(express.json());

app.get('/', (req: Request, res: Response) =>
    res.send('Welcome!'));

app.get('/add/:a/:b', (req: Request, res: Response) =>
    res.send(req.params.a + req.params.b));

const userController = new UserController(app, userDao );
const tuitController = new TuitController(app, tuitDao );



const PORT = 4000;
app.listen((process.env.PORT || PORT), () => {
    console.log(`Example app listening on port ${PORT}`)
})