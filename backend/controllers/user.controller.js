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
        message: validationUser.error.message
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username: username,
      email: email,
      password: hashedPassword,
    });
   
    await user.save();

    return res.status(201).send({
      message: "User created with success",
      
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
    const validationUser = validateUserCreation(req.body);
    if (validationUser.error) {
      return res.status(400).send({
        error: validationUser.error.message
      });
    }
    const user = await User.findOne({email}).populate({path: 'role'});
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


    const token = jwt.sign({ role: user.role.name, name: user.username, role: user.role, email: user.email}, process.env.secret_key);
    res.cookie("accessToken", token, { maxAge: 1000 * 60 * 10, httpOnly: true });

  res.status(200).send({
    message: "User Logged In",
    token: token
  });

  } catch (error) {
    res.status(400).send({
      success : false, 
      message : error
    })
  }
}

// logout
const logout = (req, res) => {
  try {
    const userCookies = req.cookies;  // Use req.cookies instead of res.cookies
    if (!userCookies || !userCookies.accessToken) {
      return res.status(200).json({
        success: true,
        message: "User already logged out"
      });
    }

    res.clearCookie('accessToken');
    return res.status(200).json({
      success: true,
      message: "Logout success"
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message || "Internal Server Error"
    });
  }
}




// @desc Get User Profile
// Route GET /api/users/Profile
// @access Private

const getUserProfile = (req, res) => {
  console.log(req.user);
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
