import mongoose from "mongoose";
import { type } from "os";
import { ref } from "process";
import { deflate } from "zlib";


const MembersWorkSpaceSchema = new mongoose.Schema(
    {
        fk_id_user:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'User',
            required: true
        },
        fk_id_Workspace:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'Workspace',
            required: true
        },
        created_at:{
            type: Date,
            default: Date.now
        },
        role:{
            type: String,
            enum: ['Owner', 'Admin', 'User'],
            default: 'User',
            required: true
        }
    }
)

const MembersWorkSpace = mongoose.model('MemberWorkSpace', MembersWorkSpaceSchema)

export default MembersWorkSpace