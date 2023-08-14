import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config/dotenv";
import { TokenInfo } from "../types/auth";

export const createToken = ({
  index,
  id,
  ip,
  expiresIn,
  issuer,
  type,
}: TokenInfo) => {
  return jwt.sign({ index, id, ip, type }, SECRET_KEY, { expiresIn, issuer });
};

export const ValidationToken = (token: string) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (err) {
    console.error("Invaild Token :", err);
    return;
  }
};
