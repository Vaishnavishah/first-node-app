/**
 * @file Data access object RESTful Web service API for follow resource
 */
import FollowDaoI from "../interfaces/FollowDaoI";
import FollowModel from "../mongoose/FollowModel";
import Follow from "../models/Follow";

/**
 * This class represents the Bookmark DAO for implementing the API endpoints for Follow resource.
 */
export default class FollowDao implements FollowDaoI {
    private static followDao: FollowDao | null = null;

    /**
     * Creates singleton DAO instance
     * @return FollowDao
     */
    public static getInstance = (): FollowDao => {
        if(FollowDao.followDao === null) {
            FollowDao.followDao = new FollowDao();
        }
        return FollowDao.followDao;
    }
    private constructor() {}

    /**
     * Retrieves all users that followed a user from the database
     * @param uid user whose followers are to be retrieved
     */
    getUsersFollowingThisUser = async (uid: string): Promise<Follow[]> =>
        FollowModel
            .find({userFollowing: uid})
            .populate("userFollowed")
            .exec();

    /**
     * Retrieves all users followed by a user from the database
     * @param uid User whose following is to be retrieved
     */
    getUsersFollowedByThisUser = async (uid: string): Promise<Follow[]> =>
        FollowModel
            .find({userFollowed: uid})
            .populate("userFollowing")
            .exec();

    /**
     * User can follow another user
     * @param uid1 user that wants to follow
     * @param uid2 user that is being followed
     */
    userFollowsAnotherUser = async (uid1: string, uid2: string): Promise<any> =>
        FollowModel.create({userFollowed: uid1, userFollowing: uid2});
        // return Promise.resolve(undefined);


    /**
     * User can unfollow another user
     * @param uid1 user that wants to unfollow
     * @param uid2 user that is being unfollowed
     */
    userUnfollowsAnotherUser = async (uid1: string, uid2: string): Promise<any> =>
        FollowModel.deleteOne({userFollowed: uid1, userFollowing: uid2});
}