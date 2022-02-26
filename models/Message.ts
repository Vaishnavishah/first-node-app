/**
 * @file Declares message data type representing relationship between
 * two users, as in user messages another user
 */
import User from "./User";

/**
 * @typedef Message Represents message relationship between two users,
 * as in a user messages another user
 * @property message message content
 * @property {User} to  user that is the message sent to
 * @property {User} from User that is sending the message
 * @property sentOn date of the message being sent
 */

export default interface Message {
    message: String,
    to : User,
    from : User,
    sentOn: Date
};