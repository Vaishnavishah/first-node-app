/**
 * @file Controller RESTful Web service API for tuit resource
 */
import {Request, Response, Express} from "express";
import TuitDao from "../daos/TuitDao";
import TuitControllerI from "../interfaces/TuitControllerI";

/**
 * @class TuitController Implements RESTful Web service API for tuits resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>GET /tuits to retrieve all the tuits
 *     </li>
 *     <li>GET /tuits/:tid to retrieve tuit by given ID
 *     </li>
 *     <li>GET /users/:uid/tuits to retrieve tuit posted by a user
 *     </li>
 *     <li>POST /tuits to record that a tuit is created
 *     </li>
 *     <li>DELETE /tuits/:tid to delete a tuit</li>
 *     <li>PUT /tuits/:tid to update a tuit</li>
 * </ul>
 * @property {TuitDao} tuitDao Singleton DAO implementing tuit CRUD operations
 * @property {TuitController} tuitController Singleton controller implementing
 * RESTful Web service API
 */
export default class TuitController implements TuitControllerI {
    app: Express;
    tuitDao: TuitDao;

    constructor(app: Express, tuitDao: TuitDao) {
        this.app = app;
        this.tuitDao = tuitDao;
        this.app.get('/tuits', this.findAllTuits);
        this.app.get('/tuits/:tid', this.findTuitById);
        this.app.get('/users/:uid/tuits', this.findTuitsByUser);
        this.app.post("/users/:uid/tuits", this.createTuit);
        this.app.delete('/tuits/:tid', this.deleteTuit);
        this.app.put('/tuits/:tid', this.updateTuit);
    }

    /**
     * @param {Request} req Represents request from client, including the
     * body that contains tuit message and the user that posted it
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the new tuit that was inserted in the
     * database
     */
    createTuit = (req: Request, res: Response) =>
        this.tuitDao.createTuit(req.params.uid, req.body)
            .then(tuit => res.json(tuit));

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters tid representing the tuit that needs to be deleted
     * @param {Response} res Represents response to client, including status
     * on whether deleting the tuit was successful or not
     */
    deleteTuit= (req: Request, res: Response) =>
        this.tuitDao.deleteTuit(req.params.tid)
            .then(status => res.json(status));

    /**
     * Retrieves all tuits from the database
     * @param {Request} req Represents request from client
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the tuit objects
     */
    findAllTuits = (req: Request, res: Response) =>
        this.tuitDao.findAllTuits()
            .then(tuits => {console.log(tuits);return res.json(tuits)});

    /**
     * Retrieves all tuits with a particular id from the database
     * @param {Request} req Represents request from client, including the path
     * parameter tid representing the id for which tuit is to be retrieved
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the tuit objects
     */
    findTuitById = (req: Request, res: Response) =>
        this.tuitDao.findTuitById(req.params.tid)
            .then(tuit => res.json(tuit));

    /**
     * Retrieves all tuits that are posted by user from the database
     * @param {Request} req Represents request from client, including the path
     * parameter uid representing the user for which tuits are to be retrieved
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the tuit objects
     */
    findTuitsByUser = (req: Request, res: Response) =>
        this.tuitDao.findTuitsByUser(req.params.uid)
            .then(tuit => res.json(tuit));

    /**
     * Updates a tuit that is posted by user from the database
     * @param {Request} req Represents request from client, including the path
     * parameter tid representing the tuit that is beng updated and body contains new content
     * @param {Response} res Represents response to client, including the
     * status of the updation
     */
    updateTuit = (req: Request, res: Response) =>
        this.tuitDao.updateTuit(req.params.tid, req.body)
            .then(status => res.json(status));
}