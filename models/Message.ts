/**
 * @file Declares Follow data type representing relationship between
 * two users, as in user follows another user
 */
import User from "./User";
import Tuit from "./Tuit";

/**
 * @typedef Follow Represents follow relationship between two users,
 * as in a user follows another user
 * @property {User} userFollowed  user that is being followed
 * @property {User} userFollowing User that started following another user
 */

export default interface Message {
    message: String,
    to : User,
    from : User,
    sentOn: Date
};