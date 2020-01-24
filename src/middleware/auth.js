const jwt = require('jsonwebtoken')
const auth = (req, res, next) => {
    const hearderAuth = req.headers.authorization

    if(!hearderAuth)  
        return res.send({ error: "Uuario não logado!"})


    const [,token] = hearderAuth.split(' ')

        jwt.verify(token, 'secret_token', (err, decoded) => {
            if(err) return res.status(401).send({ error: 'token invalid'})

            req.userId = decoded.id
            return next()
        })

}

module.exports = auth