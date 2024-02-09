import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: mongoose.schema.types.objectid,
        ref: 'Role'
    }
})

const User = mongoose.model("User", userSchema);

export default User;