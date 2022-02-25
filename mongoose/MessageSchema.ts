import mongoose, {Schema} from "mongoose";
import Bookmark from "../models/Bookmark";
import Message from "../models/Message";

const MessageSchema = new mongoose.Schema<Message>({
    message : {type: String, required : true},
    to : {type: Schema.Types.ObjectId, ref: "UserModel"},
    from: {type: Schema.Types.ObjectId, ref: "UserModel"},
    sentOn : {type: Date, default: Date.now}
}, {collection: "messages"});
export default MessageSchema;