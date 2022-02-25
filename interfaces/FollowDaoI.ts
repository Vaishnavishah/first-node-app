import Follow from "../models/Follow";

/**
 * @file Declares API for Follows related data access object methods
 */
export default interface FollowDaoI {
    getUsersFollowingThisUser (uid: string): Promise<Follow[]>;
    getUsersFollowedByThisUser (uid: string): Promise<Follow[]>;
    userFollowsAnotherUser (uid1: string, uid2: string): Promise<Follow>;
    userUnfollowsAnotherUser (uid1: string, uid2: string): Promise<any>;
};