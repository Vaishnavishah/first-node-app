/**
 * @file Declares dislike data type representing relationship between
 * users and tuits, as in user dislikes a tuit
 */
import User from "./User";
import Tuit from "./Tuit";

/**
 * @typedef dislike Represents dislikes relationship between a user and a tuit,
 * as in a user dislikes a tuit
 * @property {Tuit} tuit Tuit being disliked
 * @property {User} dislikedBy User liking the tuit
 */

export default interface Dislike {
    tuit: Tuit,
    dislikedBy: User
};