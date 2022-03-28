/**
 * @file Controller Interface  for Like resource
 */
import {Request, Response} from "express";

/**
 * The interface contains the method signatures that need to be implemented by the Controller for Like resource
 */
export default interface LikeControllerI {
    findAllUsersThatLikedTuit (req: Request, res: Response): void;
    findAllTuitsLikedByUser (req: Request, res: Response): void;
    userTogglesTuitLikes (req: Request, res: Response): void;
    userTogglesTuitUnlikes(req: Request, res: Response): void;
};