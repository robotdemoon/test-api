const PersonModel = require('../models/person.model')
const UserModel = require('../models/user.model')
const ERRORS = require('../constants/global.errors');

/**
 * Get a valid user profile
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getProfile = (req, res, next) => {
    const access_token = req.params.token ? req.params.token : '';
    UserModel.findOne({
        where: {
            access_token
        }
    }).then(user => {
        return PersonModel.findOne({
            person_id: user.person_id
        });

    }).then((person) => {
        return res.json({
            message: ERRORS.SUCCESS,
            platform: 'uber',
            profile: person
        })
    }).catch((error) => {
        return res.json({
            message: ERRORS.CREDENTIAL_ERROR,
            details: ERRORS.MESSAGE_INCORRECT_TOKEN
        });
    })
}
