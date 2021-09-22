/*const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const fs = require('fs');//lee archivos
const privatekey = fs.readFileSync('./key/private.pem');
const jwtOptions = {algorithm: 'RS256', expiresIn: '5h'};


const login = (req, res) => {
    const token = jwt.sign({id: 1}, privateKey, jwtOption);
    res.status(200).json({jwt: token});
};

router.post('/', login);

module.exports = router;*/
