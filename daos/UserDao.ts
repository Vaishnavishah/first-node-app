/**
 * @file Data access object RESTful Web service API for User resource
 */
import User from "../models/User";
import UserModel from "../mongoose/UserModel";
import UserDaoI from "../interfaces/UserDaoI";

/**
 * This class represents the User DAO for implementing the API endpoints for User resource.
 */
export default class UserDao implements UserDaoI {
    /**
     * To find all the users in the database
     */
    async findAllUsers(): Promise<User[]> {
        return await UserModel.find();
    }

    /**
     * To get a particular user by its ID from database
     * @param uid User ID
     */
    async findUserById(uid: string): Promise<any> {
        return await UserModel.findById(uid);
    }

    /**
     * To create a new user and store it in the database
     * @param user user to be added
     */
    async createUser(user: User): Promise<User> {
        console.log(user);
        return await UserModel.create(user);
    }

    /**
     * To delete a user from database
     * @param uid user ID
     */
    async deleteUser(uid: string):  Promise<any> {
        return await UserModel.deleteOne({_id: uid});
    }

    /**
     * To update an existing user
     * @param uid user that needs to be updated
     * @param user new user information
     */
    async updateUser(uid: string, user: User): Promise<any> {
        return await UserModel.updateOne({_id: uid}, {$set: user});
    }
}

