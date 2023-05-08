const { json } = require("express");
const jwt = require("jsonwebtoken");

const { json } = require("express");
const jwt = require("jsonwebtoken");

function tokenTest(req, res, next) {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      jwt.verify(token, "secretcode");
      next();
    } catch (error) {
      res.json("Not authorized ,Token not found");
      console.log(error);
    }
  } else {
    res.json("No Token Found");
  }
}

module.exports = tokenTest;
