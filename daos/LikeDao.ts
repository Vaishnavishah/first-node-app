/**
 * @file Data access object RESTful Web service API for Like resource
 */
import LikeDaoI from "../interfaces/LikeDaoI";
import LikeModel from "../mongoose/LikeModel";
import Like from "../models/Like";

/**
 * This class represents the Like DAO for implementing the API endpoints for Like resource.
 */
export default class LikeDao implements LikeDaoI {
    private static likeDao: LikeDao | null = null;

    /**
     * Creates singleton DAO instance
     * @return LikeDao
     */
    public static getInstance = (): LikeDao => {
        if(LikeDao.likeDao === null) {
            LikeDao.likeDao = new LikeDao();
        }
        return LikeDao.likeDao;
    }
    private constructor() {}

    /**
     * Retrieves all users that liked a tuit from the database
     * @param tid represents the liked tuit
     */
    findAllUsersThatLikedTuit = async (tid: string): Promise<Like[]> =>
        LikeModel
            .find({tuit: tid})
            .populate("likedBy")
            .exec();

    /**
     * Retrieves all tuits liked by a user from the database
     * @param uid represents the user liked the tuits
     */
    findAllTuitsLikedByUser = async (uid: string): Promise<Like[]> =>
        LikeModel
            .find({likedBy: uid})
            .populate("tuit")
            .exec();

    /**
     * User can like a tuit
     * @param uid user that is liking
     * @param tid tuit that is being liked
     */
    userLikesTuit = async (uid: string, tid: string): Promise<any> =>
        LikeModel.create({tuit: tid, likedBy: uid});

    /**
     * User can unlike a tuit
     * @param uid user that is unliking
     * @param tid tuit that is being unliked
     */
    userUnlikesTuit = async (uid: string, tid: string): Promise<any> =>
        LikeModel.deleteOne({tuit: tid, likedBy: uid});
}