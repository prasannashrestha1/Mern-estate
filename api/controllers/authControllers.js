import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;s

  const hashedPassword = bcrypt.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    next(error);
  }
};

// this is for checking  the authentication of sign in 
export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User Not Found"));
 
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Wrong Credentials"));

    const token = jwt.sign({id: validUser._id}, `${process.env.JWT_SECRET_KEY}`);
    const {password: pass, ...rest} = validUser._doc;
    res.cookie('access_token', token).status(200).json(rest);

  } catch (error) {
    next(error);
  }
};
