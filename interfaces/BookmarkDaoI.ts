import Follow from "../models/Follow";
import Bookmark from "../models/Bookmark";

/**
 * @file Declares API for Follows related data access object methods
 */
export default interface BookmarkDaoI {
    getBookmarkedTuitsByUser (uid: string): Promise<Bookmark[]>;
    userBookmarksTuit (uid: string, tid: string): Promise<Bookmark>;
    userUnbookmarksTuit (uid: string, tid: string): Promise<any>;
};