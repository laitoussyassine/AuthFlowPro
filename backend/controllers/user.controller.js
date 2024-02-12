import UserModel from '../models/User.model.js';


const createUser = async(req,res) => {
    const {username, email, password, role} = req.body;
    try {
        const validationUser = validateUserCreation(req.body);
        if(validationUser.error) {
            return res.status(400).send({
                message: "validation failed to create user",
                error: validationUser.error.details
            });
        }
        await UserModel.create({
            username: username,
            email: email,
            password: password,
            role: role
        })
        res.send(200).send({
            message: "user created with success"
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
          message: "Oops Somthing Went Wrong!!!"
        })
    }
}


const UserControllers = {
    createUser,
}
export default UserControllers;