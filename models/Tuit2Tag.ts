import Tuit from "./Tuit";

/**
 * @typedef Tuit2Tag Represents a relationship between tuit and the tag
 * @property tag tag of the tuit
 * @property tuit the tuit associated with the tag
 */
export default class Tuit2Tag {
    public tag: string = '';
    public tuit: Tuit = new Tuit();
}