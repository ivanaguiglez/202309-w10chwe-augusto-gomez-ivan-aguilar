import { type Request } from "express";

export interface UserStructure {
  _id: string;
  name: string;
  username: string;
  password: string;
}

export type UserWithoutPassword = Omit<UserStructure, "password">;

export type UserDataStructure = Omit<UserStructure, "_id">;

export interface UsersRepository {
  login: () => Promise<UserStructure>;
}

export interface UserMongooseRepositoryStructure {
  getUser: (username: string, password: string) => Promise<UserStructure>;
}

export type UserCredentialsStructure = Request<
  Record<string, unknown>,
  Record<string, unknown>,
  { username: string; password: string }
>;
