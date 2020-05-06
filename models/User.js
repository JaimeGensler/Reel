import './connect';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: String, // "Jaime Gensler"
    username: String, // "jgensler"
    passwordHash: String, // "asdflkasjdflkasdjf"
    createdAt: { type: Date, default: Date.now },

    classStanding: Number, // 1 => FR, 2 => SO, ...
    majors: [String], // ["PHIL"]
    minors: [String], // ["CRWR"]
    currentClasses: [{ course: String, title: String, professor: String }],

    tutorTypes: [String], // ["CONTENT", "WRITING"]
    tutorClasses: [{ course: String, title: String, professor: String }],
});

export default mongoose.models.User || mongoose.model('User', userSchema);
