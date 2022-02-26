/**
 * @file Implements mongoose schema for bookmark
 */
import mongoose, {Schema} from "mongoose";
import Bookmark from "../models/Bookmark";

const BookmarkSchema = new mongoose.Schema<Bookmark>({
    userBookmarking: {type: Schema.Types.ObjectId, ref: "UserModel"},
    tuitBookmarked: {type: Schema.Types.ObjectId, ref: "TuitModel"},
}, {collection: "bookmarks"});
export default BookmarkSchema;