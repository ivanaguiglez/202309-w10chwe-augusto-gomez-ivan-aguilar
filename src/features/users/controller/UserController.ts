import type { Response } from "express";
import { type JwtPayload } from "jsonwebtoken";
import jwt from "jsonwebtoken";
import type UserMongooseRepository from "../repository/UsersMongooseRepository.js";
import { type UserCredentialsStructure } from "../types.js";

class UserController {
  constructor(private readonly userRepository: UserMongooseRepository) {}

  loginUser = async (req: UserCredentialsStructure, res: Response) => {
    try {
      const { username, password } = req.body;
      const user = await this.userRepository.getUser(username, password);
      const userData: JwtPayload = { sub: user._id, name: user.name };
      const token = jwt.sign(userData, process.env.JWT_SECRET_KEY!);

      res.status(200).json({ token });
    } catch (error) {
      res.status(401).json({ error: "User not found" });
    }
  };
}
export default UserController;
