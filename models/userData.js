import mongoose from 'mongoose';
// const { ObjectId } = mongoose.Schema.Types;

const userDataSchema = new mongoose.Schema({
    isActive: {
        type: Boolean,
        default: true
    },
    isEmailverified:{
        type: Boolean,
        default: false
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    loginType:{
        type: Number
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
});

export default mongoose.models.userData || mongoose.model('userData', userDataSchema);