const express = require("express");
const { usersignup, userlogin, users } = require("../controllers/usercontroller");
const { adminsignup, adminlogin, admins } = require("../controllers/admincontroller");


const routerindex = express.Router();
routerindex.route("/user-signin").post(usersignup);
routerindex.route("/user-login").post(userlogin);
routerindex.route("/users").get(users);
routerindex.route("/admin-signin").post(adminsignup);
routerindex.route("/admin-login").post(adminlogin);
routerindex.route("/admins").get(admins);


module.exports = routerindex;