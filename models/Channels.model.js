import mongoose from "mongoose"
import { act } from "react"



const ChannelsSchema = new mongoose.Schema(
    {
        channels:{
            type: String,
            required: true
        },
        fk_id_WorkSpace:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'WorkSpace',
            required: true
        },
        created_at:{
            type: Date,
            default: Date.now
        },
        active:{
            type: Boolean,
            default: true
        }
    }
)

const Channels = mongoose.model('Channels', ChannelsSchema)

export default Channels