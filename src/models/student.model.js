import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
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

module.exports = mongoose.model('Student', StudentSchema);

