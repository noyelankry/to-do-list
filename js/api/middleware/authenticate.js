const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
    try {
        const secondString = 1
        const token = req.headers.authorization.split(' ')[secondString]
        const decode = jwt.verify(token, process.env.SALT)

        req.user = decode
        next()
    }
    catch(error) {
        res.json({
            message: "Authentication Failed"
        })
    }
}

module.exports = authenticate