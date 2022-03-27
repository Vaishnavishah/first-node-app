/**
 * @file Controller Interface  for Tuit resource
 */
import {Request, Response} from "express";

/**
 * The interface contains the method signatures that need to be implemented by the Controller for Tuit resource
 */
export default interface TuitControllerI {
    findAllTuits(req: Request, res: Response): void;
    findTuitById(req: Request, res: Response): void;
    findAllTuitsByUser(req: Request, res: Response): void;
    createTuit(req: Request, res: Response): void;
    updateTuit(req: Request, res: Response): void;
    deleteTuit(req: Request, res: Response): void;
}

