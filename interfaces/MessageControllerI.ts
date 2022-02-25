import {Request, Response} from "express";

export default interface MessageControllerI {
    userSendsMessage(req: Request, res: Response): void;
    userDeletesMessage(req: Request, res: Response): void;
    getAllMessagesSentByUser(req: Request, res: Response): void;
    getAllMessagesSentToUser(req: Request, res: Response): void;
}