import './connect';
import mongoose from 'mongoose';

const requestSchema = new mongoose.Schema({
    requestClass: { course: String, title: String, professor: String },
    nonClassDescription: String, //"School Newspaper"
    tutorType: String, // CONTENT || WRITING
    description: String, //"I don't understand 'this' or closures in JavaScript! Please help."
    prefLocation: String, //"Library"

    createdBy: String, // ID for Jaime Gensler
    assignedTo: String, // ID for Jordan Gensler
    status: { type: String, default: 'PENDING' }, // Pending || Assigned || Completed
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Request ||
    mongoose.model('Request', requestSchema);
