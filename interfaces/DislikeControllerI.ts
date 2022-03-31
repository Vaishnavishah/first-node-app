/**
 * @file Controller Interface  for Like resource
 */
import {Request, Response} from "express";

/**
 * The interface contains the method signatures that need to be implemented by the Controller for Like resource
 */
export default interface DislikeControllerI {
    findAllUsersThatDislikedTuit (req: Request, res: Response): void;
    findAllTuitsDislikedByUser (req: Request, res: Response): void;
    //userTogglesTuitLikes (req: Request, res: Response): void;
    userTogglesTuitDislikes(req: Request, res: Response): void;
};