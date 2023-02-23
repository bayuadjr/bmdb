import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    tittle:{
        type: String,
    },
    description: {
        type: String
    },  
    question: {
        type: Array
    },
    invites: {
        type: Array
    },
    public: {
        type: Boolean,
    },
    createdAT: {
        type: Number        
    },
    updatedAT: {
        type: Number
    }
},
{
    timestamps: {
        currentTime: () => Math.floor(Date.now() / 1000)
    }
}
)

export default mongoose.model('form', Schema)