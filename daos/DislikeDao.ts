/**
 * @file Data access object RESTful Web service API for Like resource
 */
import DislikeDaoI from "../interfaces/DislikeDaoI";
import DislikeModel from "../mongoose/DislikeModel";
import Dislike from "../models/Dislike";

/**
 * This class represents the Like DAO for implementing the API endpoints for Like resource.
 */
export default class DislikeDao implements DislikeDaoI {
    private static dislikedao: DislikeDao | null = null;

    /**
     * Creates singleton DAO instance
     * @return LikeDao
     */
    public static getInstance = (): DislikeDao => {
        if(DislikeDao.dislikedao === null) {
            DislikeDao.dislikedao = new DislikeDao();
        }
        return DislikeDao.dislikedao;
    }
    private constructor() {}

    /**
     * Retrieves all users that liked a tuit from the database
     * @param tid represents the liked tuit
     */
    findAllUsersThatDislikedTuit = async (tid: string): Promise<Dislike[]> =>
        DislikeModel
            .find({tuit: tid})
            .populate("dislikedBy")
            .exec();

    /**
     * Retrieves all tuits liked by a user from the database
     * @param uid represents the user liked the tuits
     */
    findAllTuitsDislikedByUser = async (uid: string): Promise<Dislike[]> =>
        DislikeModel
            .find({dislikedBy: uid})
            .populate({
                path: "tuit",
                populate: {
                    path: "postedBy"
                }
            })
            .exec();

    /**
     * User can like a tuit
     * @param uid user that is liking
     * @param tid tuit that is being liked
     */
    userDislikesTuit = async (uid: string, tid: string): Promise<any> =>
        DislikeModel.create({tuit: tid, dislikedBy: uid});
    /**
     *  check if there's a likes document in the database for
     * user/tuit combination
     * @param uid user that is liking
     * @param tid tuit that is being liked
     */
    findUserDislikesTuit = async (uid: string, tid: string): Promise<any> =>
        DislikeModel.findOne({tuit: tid, dislikedBy: uid});


    countHowManyDislikedTuit = async (tid: string): Promise<any> =>
        DislikeModel.count({tuit: tid});
}