/**
 * @file Controller RESTful Web service API for user resource
 */
import {Request, Response, Express} from "express";
import UserDao from "../daos/UserDao";
import UserControllerI from "../interfaces/UserControllerI";

/**
 * @class UserController Implements RESTful Web service API for users resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>GET /users to retrieve all the users
 *     </li>
 *     <li>GET /users/:userid to retrieve user by given ID
 *     </li>
 *     <li>POST /users to record that a user is created
 *     </li>
 *     <li>DELETE /users/:userid to delete a user</li>
 *     <li>PUT /users/:userid to update a user information</li>
 * </ul>
 * @property {UserDao} userDao Singleton DAO implementing user CRUD operations
 * @property {UserController} userController Singleton controller implementing
 * RESTful Web service API
 */
export default class UserController implements UserControllerI {
    app: Express;
    userDao: UserDao;
    constructor(app: Express, userDao: UserDao) {
        this.app = app;
        this.userDao = userDao;
        this.app.get('/users', this.findAllUsers);
        this.app.get('/users/:userid', this.findUserById);
        this.app.post('/users', this.createUser);
        this.app.delete('/users/:userid', this.deleteUser);
        this.app.put('/users/:userid', this.updateUser);
        this.app.delete("/users", this.deleteAllUsers);
        this.app.post("/login", this.login);

        // for testing. Not RESTful
        this.app.get("/users/create", this.createUser);
        this.app.get("/users/id/:uid/delete", this.deleteUser);
        this.app.get("/users/username/:username/delete", this.deleteUsersByUsername);
        this.app.get("/users/delete", this.deleteAllUsers);
    }

    /**
     * Retrieves all users from the database
     * @param {Request} req Represents request from client
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the user objects
     */
    findAllUsers = (req: Request, res: Response) =>
        this.userDao.findAllUsers()
            .then(users => res.json(users));

    /**
     * Retrieves all users with a particular id from the database
     * @param {Request} req Represents request from client, including the path
     * parameter tid representing the id for which user is to be retrieved
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the user objects
     */
    findUserById = (req: Request, res: Response) =>
        this.userDao.findUserById(req.params.userid)
            .then(user => res.json(user));

    /**
     * @param {Request} req Represents request from client, including the
     * body that contains user information
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the new user that was inserted in the
     * database
     */
    createUser = (req: Request, res: Response) => {
        this.userDao.createUser(req.body)
            .then(user => res.json(user))};

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters uid representing the uid that needs to be deleted
     * @param {Response} res Represents response to client, including status
     * on whether deleting the user was successful or not
     */
    deleteUser = (req: Request, res: Response) =>
        this.userDao.deleteUser(req.params.userid)
            .then(status => res.json(status));

    /**
     * Updates a user from the database
     * @param {Request} req Represents request from client, including the path
     * parameter uid representing the user that is being updated and body contains new information
     * @param {Response} res Represents response to client, including the
     * status of the updation
     */
    updateUser = (req: Request, res: Response) =>
        this.userDao.updateUser(req.params.userid, req.body)
            .then(status => res.json(status));

    /**
     * Removes all user instances from the database. Useful for testing
     * @param {Request} req Represents request from client
     * @param {Response} res Represents response to client, including status
     * on whether deleting all users was successful or not
     */
    deleteAllUsers = (req: Request, res: Response) =>
        this.userDao.deleteAllUsers()
            .then(status => res.send(status));


    deleteUsersByUsername = (req: Request, res: Response) =>
        this.userDao.deleteUsersByUsername(req.params.username)
            .then(status => res.send(status));

    login = (req: Request, res: Response) =>
        this.userDao.findUserByCredentials(req.body.username, req.body.password)
            .then(user => {
                res.json(user)});

    register = (req: Request, res: Response) =>
        this.userDao.findUserByUsername(req.body.username)
            .then(user => {

            })
};




