/**
 * @file Data access object RESTful Web service API for Tuit resource
 */
import Tuit from "../models/Tuit";
import TuitModel from "../mongoose/TuitModel";
import TuitDaoI from "../interfaces/TuitDaoI";

/**
 * This class represents the Bookmark DAO for implementing the API endpoints for Tuit resource.
 */
export default class TuitDao implements TuitDaoI {

    /**
     * User can create a tuit
     * @param uid
     * @param tuit tuit that is to be created
     */
    async createTuit(uid: string, tuit: Tuit): Promise<Tuit> {
        return TuitModel.create({...tuit, postedBy: uid});
    }

    /**
     * User can delete a tuit
     * @param tid tuit that is to be deleted
     */
    async deleteTuit(tid: string): Promise<any> {
        //console.log(tid)
        return await TuitModel.deleteOne({_id: tid});
    }

    /**
     * Retrieve all the tuits that exists in the database
     */
    async findAllTuits(): Promise<Tuit[]> {
        return TuitModel.find();
    }

    /**
     * To retrieve tuit of a particular ID
     * @param tid tuit ID
     */
    async findTuitById(tid: string): Promise<any> {
        return TuitModel.findById(tid);
    }

    /**
     * To get al tuits by a particular user
     * @param uid user ID
     */
    async findAllTuitsByUser(uid: string): Promise<Tuit[]> {
        return TuitModel.find({postedBy: uid});
    }

    /**
     * To update an existing tuit
     * @param tid tuit id of tuit that is to be updated
     * @param tuit new tuit information
     */
    async updateTuit(tid: string, tuit: Tuit): Promise<any> {
        return TuitModel.updateOne(
            {_id: tid},
            {$set: tuit});
    }


    async createTuitByUser(uid: string, tuit: Tuit): Promise<Tuit> {
        return TuitModel.create({...tuit, postedBy: uid});
    }


    async updateLikes(tid: string, newStats: any): Promise<any> {
        return TuitModel.updateOne(
            {_id: tid},
            {$set: {stats: newStats}}
        );
    }

    async updateDislikes(tid: string, newStats: any): Promise<any> {
        return TuitModel.updateOne(
            {_id: tid},
            {$set: {stats: newStats}}
        );
    }

}