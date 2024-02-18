import User from '../models/User.model.js';
import  validateUserCreation  from '../function/userValidation.js';
import jwt from "jsonwebtoken";
import  { config }  from 'dotenv';
config()
import bcrypt from "bcryptjs"


// user register
const signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const validationUser = validateUserCreation(req.body);
    if (validationUser.error) {
      return res.status(400).send({
        message: "Validation failed to create user",
        error: validationUser.error.details
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username: username,
      email: email,
      password: hashedPassword,
      role: "65ca14f28d6d007e34cfca2e"
    });

    await user.save();

    return res.status(201).send({
      message: "User created with success"
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Oops, something went wrong!!!"
    });
  }
};


// user login
const login = async (req,res) => {
  const {email, password} = req.body;
  try {
    const user = await User.findOne({email:email});
    if (!user) {
      return res.status(401).send({
        message: "Email Not Found"
      })
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword){
      return res.status(401).send({
        message: "incorrect password"
      })
    }

  const token = jwt.sign({ userId: user.id }, process.env.secret_key);
  res.cookie("accessToken", token, { maxAge: 1000 * 60 * 10, httpOnly: true });

  res.status(200).send({
    success: true,
    message: "User Logged In"
  });

  } catch (error) {
    res.status(400).json({
      success : false, 
      message : error
    })
  }
}

// logout
const logout = (req,res) => {
  try {
      res.clearCookie('accessToken');
      return res.status(200).json({
          success : true, 
          message: "logout seccess"
      })
  } catch (err) {
      return res.status(500).json({
          success : false, 
          message : error
      })
  }
}

// @desc Get User Profile
// Route GET /api/users/Profile
// @access Private

const getUserProfile = (req, res) => {
  res.status(200).json({
    message : 'User Profile'
  })
}

// @desc Update User Profile
// Route PUT /api/users/Profile
// @access Private

const updateUserProfile = (req, res) => {
  res.status(200).json({
    message : "update user profile"
  })
}

const UserControllers = {
  signup,
  login,
  logout,
  getUserProfile,
  updateUserProfile
};
export default UserControllers;
