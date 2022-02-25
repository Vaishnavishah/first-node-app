/**
 * @file Controller RESTful Web service API for follow resource
 */
import {Express, Request, Response} from "express";
import FollowDao from "../daos/FollowDao";
import FollowControllerI from "../interfaces/FollowControllerI";

/**
 * @class FollowController Implements RESTful Web service API for follow resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>GET /users/:uid/following to retrieve all the following list of a user
 *     </li>
 *     <li>GET /users/:uid/followers to retrieve all followers list of a user
 *     </li>
 *     <li>POST /users/:uid1/follows/:uid2 to record that a user follows another user
 *     </li>
 *     <li>DELETE /users/:uid1/unfollows/:uid2 to record that a user
 *     no longer follows another user </li>
 * </ul>
 * @property {FollowDao} followDao Singleton DAO implementing follows CRUD operations
 * @property {FollowController} followController Singleton controller implementing
 * RESTful Web service API
 */
export default class FollowController implements FollowControllerI {
    private static followDao: FollowDao = FollowDao.getInstance();
    private static followController: FollowController | null = null;
    /**
     * Creates singleton controller instance
     * @param {Express} app Express instance to declare the RESTful Web service
     * API
     * @return TuitController
     */
    public static getInstance = (app: Express): FollowController => {
        if(FollowController.followController === null) {
            FollowController.followController = new FollowController();
            app.get("/users/:uid/following", FollowController.followController.getUsersFollowingThisUser);
            app.get("/users/:uid/followers", FollowController.followController.getUsersFollowedByThisUser);
            app.post("/users/:uid1/follows/:uid2", FollowController.followController.userFollowsAnotherUser);
            app.delete("/users/:uid1/unfollows/:uid2", FollowController.followController.userUnfollowsAnotherUser);
        }
        return FollowController.followController;
    }

    private constructor() {}

    /**
     * Retrieves all users that followed a user from the database
     * @param {Request} req Represents request from client, including the path
     * parameter uid representing the user
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the user follows objects
     */
    getUsersFollowingThisUser = (req: Request, res: Response) =>
        FollowController.followDao.getUsersFollowingThisUser(req.params.uid)
            .then(follows => res.json(follows));


    /**
     * Retrieves all users followed by a user from the database
     * @param {Request} req Represents request from client, including the path
     * parameter uid representing the user
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the user follows objects that were liked
     */
    getUsersFollowedByThisUser = (req: Request, res: Response) =>
        FollowController.followDao.getUsersFollowedByThisUser(req.params.uid)
            .then(follows => res.json(follows));


    /**
     * @param {Request} req Represents request from client, including the
     * path parameters uid and tid representing the user that is following another user and user that is being
     * followed
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the new follow that was inserted in the
     * database
     */
    userFollowsAnotherUser = (req: Request, res: Response) =>
        FollowController.followDao.userFollowsAnotherUser(req.params.uid1, req.params.uid2)
            .then(likes => res.json(likes));

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters uid and tid representing the user that is unfollowing
     * another user and user being unfollowed
     * @param {Response} res Represents response to client, including status
     * on whether deleting the like was successful or not
     */
    userUnfollowsAnotherUser = (req: Request, res: Response) =>
        FollowController.followDao.userUnfollowsAnotherUser(req.params.uid1, req.params.uid2)
            .then(status => res.send(status));
};