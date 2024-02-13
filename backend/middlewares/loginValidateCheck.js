import Joi from 'joi';

const loginValidationSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.required()
})

const validateUserLogin = (data) => {
    return loginValidationSchema.validate(data, { abortEarly: false });
}


const validateUserLoginInput = async (req, res, next) => {
    const validation = validateUserLogin(req.body);

    if (validation.error) {
        return res.status(400).send({
            message: "Invalid Data",
            errors: validation.error.details[0].message
        })
    }
    next();
}

export default validateUserLoginInput;