/**
 * @file Controller Interface  for follow resource
 */
import {Request, Response} from "express";

/**
 * The interface contains the method signatures that need to be implemented by the Controller for Follow resource
 */
export default interface FollowControllerI {
    getUsersFollowingThisUser (req: Request, res: Response): void;
    getUsersFollowedByThisUser (req: Request, res: Response): void;
    userFollowsAnotherUser (req: Request, res: Response): void;
    userUnfollowsAnotherUser (req: Request, res: Response): void;
};