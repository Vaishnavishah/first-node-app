import MessageDaoI from "../interfaces/MessageDaoI";
import Message from "../models/Message";
import MessageModel from "../mongoose/MessageModel";

export default class MessageDao implements MessageDaoI {
    private static messageDao: MessageDao | null = null;
    public static getInstance = (): MessageDao => {
        if(MessageDao.messageDao === null) {
            MessageDao.messageDao = new MessageDao();
        }
        return MessageDao.messageDao;
    }
    private constructor() {}
    userSendsMessage = async (message: Message): Promise<Message> =>
        MessageModel.create({...message});
    userDeletesMessage = async (mid: string): Promise<any> =>
        MessageModel.deleteOne({_id: mid});

    getAllMessagesSentByUser = async (uid: string): Promise<Message[]> =>
        MessageModel.find({from: uid});

    getAllMessagesSentToUser = async (uid: string): Promise<Message[]> =>
        MessageModel.find({to: uid});
}