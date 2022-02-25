import FollowDaoI from "../interfaces/FollowDaoI";
import FollowModel from "../mongoose/FollowModel";
import Follow from "../models/Follow";
import BookmarkDaoI from "../interfaces/BookmarkDaoI";
import Bookmark from "../models/Bookmark";
import BookmarkModel from "../mongoose/BookmarkModel";
export default class BookmarkDao implements BookmarkDaoI {
    private static bookmarkDao: BookmarkDao | null = null;
    public static getInstance = (): BookmarkDao => {
        if(BookmarkDao.bookmarkDao === null) {
            BookmarkDao.bookmarkDao = new BookmarkDao();
        }
        return BookmarkDao.bookmarkDao;
    }
    private constructor() {}

    getBookmarkedTuitsByUser = async (uid: string): Promise<Bookmark[]> =>
        BookmarkModel
            .find({userBookmarking: uid})
            .populate("tuitBookmarked")
            .exec();

    userBookmarksTuit = async (uid: string, tid: string): Promise<any> =>
        BookmarkModel.create({userBookmarking: uid, tuitBookmarked: tid});
    // return Promise.resolve(undefined);


    userUnbookmarksTuit = async (uid: string, tid: string): Promise<any> =>
        BookmarkModel.deleteOne({userBookmarking: uid, tuitBookmarked: tid});
}