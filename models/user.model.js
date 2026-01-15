import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
    {
        email:{
            type: String,
            require: true,
            unique: true
        },
        password:{
            type: String,
            require: true
        },
        username:{
            type: String,
            require: true
        },
        created_at:{
            type: Date,
            default: Date.now
        },
        active:{
            type: Boolean,
            default: true
        },
        email_verified:{
            type: Boolean,
            default: false
        }
    }
)

const User = mongoose.model("User", userSchema)

export default User