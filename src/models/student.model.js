import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const StudentSchema = new Schema({
    firstName : {
        type: String,
        required: 'Enter first name'
    },
    lastName : {
        type: String,
        required: 'Enter last name'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

