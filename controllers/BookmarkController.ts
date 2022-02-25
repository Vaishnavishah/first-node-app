/**
 * @file Controller RESTful Web service API for bookmark resource
 */
import {Express, Request, Response} from "express";
import BookmarkControllerI from "../interfaces/BookmarkControllerI";
import BookmarkDao from "../daos/BookmarkDao";

/**
 * @class BookmarkController Implements RESTful Web service API for bookmark resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>GET /users/:uid/bookmarks to retrieve all the tuits bookmarked by a user
 *     </li>
 *     <li>POST /users/:uid/bookmarks/:tid to record that a user bookmarked a tuit
 *     </li>
 *     <li>DELETE /users/:uid/unbookmarks/:tid to record that a user
 *     unmarks a tuit</li>
 * </ul>
 * @property {BookmarkDao} bookmarkDao Singleton DAO implementing bookmarks CRUD operations
 * @property {BookmarkController} bookmarkController Singleton controller implementing
 * RESTful Web service API
 */
export default class BookmarkController implements BookmarkControllerI {
    private static bookmarkDao: BookmarkDao = BookmarkDao.getInstance();
    private static bookmarkController: BookmarkController | null = null;
    /**
     * Creates singleton controller instance
     * @param {Express} app Express instance to declare the RESTful Web service
     * API
     * @return BookmarkController
     */
    public static getInstance = (app: Express): BookmarkController => {
        if(BookmarkController.bookmarkController === null) {
            BookmarkController.bookmarkController = new BookmarkController();
            app.get("/users/:uid/bookmarks", BookmarkController.bookmarkController.getBookmarkedTuitsByUser);
            app.post("/users/:uid/bookmarks/:tid", BookmarkController.bookmarkController.userBookmarksTuit);
            app.delete("/users/:uid/unbookmarks/:tid", BookmarkController.bookmarkController.userUnbookmarksTuit);
        }
        return BookmarkController.bookmarkController;
    }

    private constructor() {}

    /**
     * Retrieves all tuits that that are liked by user from the database
     * @param {Request} req Represents request from client, including the path
     * parameter uid representing the user for which tuits are to be retrieved
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the user objects
     */
    getBookmarkedTuitsByUser = (req: Request, res: Response) =>
        BookmarkController.bookmarkDao.getBookmarkedTuitsByUser(req.params.uid)
            .then(bookmarks => res.json(bookmarks));


    /**
     * @param {Request} req Represents request from client, including the
     * path parameters uid and tid representing the user that is bookmarking the tuit
     * and the tuit being bookmarked
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the new bookmarks that was inserted in the
     * database
     */
    userBookmarksTuit = (req: Request, res: Response) =>
        BookmarkController.bookmarkDao.userBookmarksTuit(req.params.uid, req.params.tid)
            .then(bookmarks => res.json(bookmarks));

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters uid and tid representing the user that is unmarking
     * the tuit and the tuit being unmarked
     * @param {Response} res Represents response to client, including status
     * on whether deleting the like was successful or not
     */
    userUnbookmarksTuit = (req: Request, res: Response) =>
        BookmarkController.bookmarkDao.userUnbookmarksTuit(req.params.uid, req.params.tid)
            .then(status => res.send(status));
};