import User from "./User";

/**
 * @typedef Tuit Represents a tuit that can be posted by a user.
 * @property tuit content of tuit
 * @property postedOn Date when the tuit was posted
 * @property postedBy the user hat posts the tuit
 */
export default class Tuit {
    private tuit: string = '';
    private postedOn: Date = new Date();
    private postedBy: User | null = null;
}

