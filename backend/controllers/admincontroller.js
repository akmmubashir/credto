const { AdminSetup } = require("../models/schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const adminsignup = async(req, res) => {
    const { name, username, email, phone, password } = req.body;

    //encrypting password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const data = await AdminSetup.findOne({ email: email });

    if (data) {
        res.json({
            message: "Already Exist",
            isError: true,
        });
    } else {
        const newUser = await AdminSetup.create({
            name,
            username,
            email,
            phone,
            password: hashedPassword,
        });
        res.json({
            Message: "Account Created",
            Details: newUser,
            token: generateToken(newUser.id),
        });
    }
};
//TOKEN START

const generateToken = (id) => {
    return jwt.sign({ id }, "secretcode", { expiresIn: "1d" });
};
//TOKEN END

const adminlogin = async(req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.json("Enter login data");
    } else {
        const findUser = await AdminSetup.findOne({ email: email });

        if (findUser && (await bcrypt.compare(password, findUser.password))) {
            res.json({
                email: findUser.email,
                message: "Login Success",
                token: generateToken(findUser.id),
            });
            console.log("Succesfully Logged in");
        } else {
            res.json({ message: "Wrong Credentials", isError: true });
        }
    }
};

const admins = async(req, res) => {
    const user = await AdminSetup.find();
    res.json(user);
};

module.exports = { adminsignup, adminlogin, admins };