/**
 * @file Implements an Express Node HTTP server. Declares RESTful Web services
 * enabling CRUD operations on the following resources:
 * <ul>
 *     <li>users</li>
 *     <li>tuits</li>
 *     <li>likes</li>
 *     <li>follows</li>
 *     <li>bookmarks</li>
 *     <li>messages</li>
 * </ul>
 *
 * Connects to a remote MongoDB instance hosted on the Atlas cloud database
 * service
 */
import express, {Request, Response} from 'express';
import UserController from "./controllers/UserController";
import TuitController from "./controllers/TuitController";
import TuitDao from "./daos/TuitDao";
import UserDao from "./daos/UserDao";
import mongoose from "mongoose";
import LikeController from "./controllers/LikeController";
import FollowController from "./controllers/FollowController";
import BookmarkController from "./controllers/BookmarkController";
import MessageController from "./controllers/MessageController";
import CourseController from "./controllers/CourseController";
var cors = require('cors')

//connection to database
const connectionString = 'mongodb+srv://vaishnavi:vaishnavi@cluster0.zct7x.mongodb.net/tuiterdb?retryWrites=true&w=majority'
mongoose.connect(connectionString);

// create RESTful Web service API
const app = express();
const userDao = new UserDao();
const tuitDao = new TuitDao();
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) =>
    res.send('Welcome!'));

app.get('/add/:a/:b', (req: Request, res: Response) =>
    res.send(req.params.a + req.params.b));
const userController = new UserController(app, userDao );
const tuitController = new TuitController(app, tuitDao );
const likesController = LikeController.getInstance(app);
const followController = FollowController.getInstance(app);
const bookmarkController = BookmarkController.getInstance(app);
const messageController = MessageController.getInstance(app);
const courseController = new CourseController(app);

// Start a server listening at port 4000 locally
const PORT = 4000;
app.listen((process.env.PORT || PORT), () => {
    console.log(`Example app listening on port ${PORT}`)
})