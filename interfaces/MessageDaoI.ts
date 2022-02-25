import Like from "../models/Like";
import Message from "../models/Message";

/**
 * @file Declares API for Likes related data access object methods
 */
export default interface MessageDaoI {
    userSendsMessage(message: Message) : Promise<Message>;
    userDeletesMessage(mid: string) : Promise<any>;
    getAllMessagesSentByUser(uid: string): Promise<Message[]>;
    getAllMessagesSentToUser(uid: string): Promise<Message[]>;
};