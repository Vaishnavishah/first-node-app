import {Request, Response} from "express";

export default interface FollowControllerI {
    getUsersFollowingThisUser (req: Request, res: Response): void;
    getUsersFollowedByThisUser (req: Request, res: Response): void;
    userFollowsAnotherUser (req: Request, res: Response): void;
    userUnfollowsAnotherUser (req: Request, res: Response): void;
};