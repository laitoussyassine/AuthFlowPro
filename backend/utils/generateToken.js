import jwt from 'jsonwebtoken';
const generateToken = (res, userId) => {
    const token = jwt.sign({ userId}, process.env.secret_key, {
    expiresIn: '10m',
    });
    res.cookie("accessToken", token, { maxAge: 1000 * 60 * 10, httpOnly: true });
};
export default generateToken;