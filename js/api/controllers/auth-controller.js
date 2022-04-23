const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = (req, res, next) => {
  bcrypt.hash(req, body.password, 10, function (err, hashedPass) {
    if (err) {
      res.json({
        error: err,
      })
    }

    let user = new User({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPass,
    })
    user
      .save()
      .then((user) => {
        res.json({
          message: "User Added Successfully!"
        })
      })
      .catch((error) => {
        res.json({
          message: "An error has occured!"
        })
      })
  })
}


const login  = (req, res) => {
  const username = req.body.username
  const password = req.body.password

  User.findOne({$or: [{email: username},{phone: username}]})
  .then(user => {
    if(user){
      bcrypt.compare(password, user.password, function(err, result){
        if(err) {
          res.json({
            error: err
          })
        }
        if(result){
          let token = jwt.sign({name: user.name}, process.env.SALT, {expiresIn: '1h'})
          res.json({
            message: "Logged In Successfully",
            token
          })
        } else {
          res.json({
            message: "Wrong Password or Username..."
          })
        }
      })
    } else {
      res.json({
        message: "User Not Found"
      })
    }
  })
}

module.exports = {
  register,
  login
}
