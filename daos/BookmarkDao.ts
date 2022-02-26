/**
 * @file Data access object RESTful Web service API for bookmark resource
 */
import BookmarkDaoI from "../interfaces/BookmarkDaoI";
import Bookmark from "../models/Bookmark";
import BookmarkModel from "../mongoose/BookmarkModel";

/**
 * This class represents the Bookmark DAO for implementing the API endpoints for Bookmark resource.
 */
export default class BookmarkDao implements BookmarkDaoI {
    private static bookmarkDao: BookmarkDao | null = null;

    /**
     * Creates singleton DAO instance
     * @return BookmarkDao
     */
    public static getInstance = (): BookmarkDao => {
        if(BookmarkDao.bookmarkDao === null) {
            BookmarkDao.bookmarkDao = new BookmarkDao();
        }
        return BookmarkDao.bookmarkDao;
    }
    private constructor() {}

    /**
     * Retrieves all tuits that that are liked by user from the database
     * @param uid representing the user for which tuits are to be retrieved
     */
    getBookmarkedTuitsByUser = async (uid: string): Promise<Bookmark[]> =>
        BookmarkModel
            .find({userBookmarking: uid})
            .populate("tuitBookmarked")
            .exec();

    /**
     * User can bookmark a tuit from the database
     * @param uid representing the user that is bookmarking the tuit
     * @param tid tuit being bookmarked
     */
    userBookmarksTuit = async (uid: string, tid: string): Promise<any> =>
        BookmarkModel.create({userBookmarking: uid, tuitBookmarked: tid});

    /**
     * User can unmark the previously bookmarked tuit
     * @param uid representing the user that is unmarking the tuit
     * @param tid tuit that is being unmarked
     */
    userUnbookmarksTuit = async (uid: string, tid: string): Promise<any> =>
        BookmarkModel.deleteOne({userBookmarking: uid, tuitBookmarked: tid});
}