/**
 * @file Declares Bookmark data type representing relationship between
 * users and the tuit, as in user bookmarks a tuit
 */
import User from "./User";
import Tuit from "./Tuit";

/**
 * @typedef Bookmark Represents bookmark relationship between
 * users and the tuit, as in user bookmarks a tuit
 * @property {User} userBookmarking  user that is bookmarking
 * @property {Tuit} tuitBookmarked Tuit that is being bookmarked
 */

export default interface Bookmark {
    userBookmarking: User,
    tuitBookmarked: Tuit
};