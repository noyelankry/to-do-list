import User from '../models/user.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = (req, res) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
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
      .save(function (err) {
        if (err) {
          console.log(err);
          return;
        }
        res.json({ user: user })
      })
  })
}


export const login = (req, res) => {
  console.log('Login received', req.body)
  const username = req.body.username
  const password = req.body.password

  User.findOne({ $or: [{ email: username }, { phone: username }] })
    .then(user => {
      console.log('Received user', user)
      if (user) {
        bcrypt.compare(password, user.password, function (err, result) {
          if (err) {
            console.error('bcrypt err', err)
            res.json({
              error: err
            })
          }
          if (result) {
            let token = jwt.sign({ name: user.name }, process.env.SALT, { expiresIn: '1h' })
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