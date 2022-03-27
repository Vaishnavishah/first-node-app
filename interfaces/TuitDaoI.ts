import Tuit from "../models/Tuit";

/**
 * @file Declares API for Tuit related data access object methods
 */
export default interface TuitDaoI {
    findAllTuits(): Promise<Tuit[]>;
    findAllTuitsByUser(uid: string): Promise<Tuit[]>;
    findTuitById(tid: string): Promise<Tuit>;
    createTuit(uid: string, tuit: Tuit): Promise<Tuit>;
    updateTuit(tid: string, tuit: Tuit): Promise<any>;
    deleteTuit(tid: string): Promise<any>;
}

