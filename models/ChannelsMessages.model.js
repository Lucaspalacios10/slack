import mongoose from 'mongoose';


const ChannelsMessagesSchema = new mongoose.Schema(
    {
        messages:{
            type: String,
        },
        fk_id_Channels:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'Channels',
            required: true
        },
        fk_id_MembersWorkSpace:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'MembersWorkSpace',
            required: true
        }
    }
)


const ChannelsMessages = mongoose.model('ChannelsMessages', ChannelsMessagesSchema)

export default ChannelsMessages