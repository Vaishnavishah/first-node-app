import Tuit from "./Tuit";

/**
 * @typedef Tuit2Topic Represents a relationship between tuit and the topic
 * @property topic topic of the tuit
 * @property tuit the tuit associated with the topic
 */
export default class Tuit2Topic {
    public topic: string = '';
    public tuit: Tuit = new Tuit();
}