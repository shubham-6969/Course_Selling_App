import dotenv from 'dotenv'
dotenv.config();

// user password
//const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD


export default {
  JWT_SECRET,
  JWT_ADMIN_PASSWORD,
}