const mongoose = require("mongoose");

const auth = mongoose.Schema({
    name: { type: String },
    username: { type: String },
    email: { type: String },
    phone: { type: String },
    password: { type: String },
});
const UserSetup = mongoose.model("Users", auth);

const admin = mongoose.Schema({
    name: { type: String },
    username: { type: String },
    role: { type: String },
    status: { type: String },
    email: { type: String },
    phone: { type: String },
    password: { type: String },
});
const AdminSetup = mongoose.model("Admins", admin);

module.exports = { UserSetup, AdminSetup };