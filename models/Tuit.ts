import User from "./User";

/**
 * @typedef Tuit Represents a tuit that can be posted by a user.
 * @property tuit content of tuit
 * @property postedOn Date when the tuit was posted
 * @property postedBy the user hat posts the tuit
 */
export default class Tuit {
    tuit: string = '';
    postedOn: Date = new Date();
    postedBy: User | null = null;
}

