const UserModel = require('../models/user.model')
const ERRORS = require('../constants/global.errors')

exports.getToken = (req, res, next) => {

    const email = req.body.email  ? req.body.email : '';
    const password = req.body.password  ? req.body.password : '';
    UserModel.findOne({
        where: {
            email,
            password
        }
    }).then((user) => {
        console.log(user);
        return res.json({
            message: ERRORS.SUCCESS,
            access_token: user.access_token
        })
    }).catch((error) => {
        return res.json({
            message: ERRORS.CREDENTIAL_ERROR,
            details: ERRORS.MESSAGE_CREDENTIAL_ERROR
        });
    })
}

