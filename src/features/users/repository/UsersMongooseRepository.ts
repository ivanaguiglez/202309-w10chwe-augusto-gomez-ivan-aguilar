import User from "../../models/Users.js";
import { type UserStructure } from "../types.js";

class UserMongooseRepository {
  getUser = async (
    username: string,
    password: string,
  ): Promise<UserStructure> => {
    const user = await User.findOne({ username });

    if (!user) {
      throw new Error("Username inexistent");
    }

    const userPassword = await User.findOne({ password });

    if (!userPassword) {
      throw new Error("Wrong password");
    }

    return user;
  };
}

export default UserMongooseRepository;
