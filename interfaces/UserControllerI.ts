/**
 * @file Controller Interface  for user resource
 */
import {Request, Response} from "express";

/**
 * The interface contains the method signatures that need to be implemented by the Controller for user resource
 */
export default interface UserControllerI {
    findAllUsers(req: Request, res: Response): void;
    findUserById(req: Request, res: Response): void;
    createUser(req: Request, res: Response): void;
    deleteUser(req: Request, res: Response): void;
    updateUser(req: Request, res: Response): void;
}

