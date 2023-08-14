import { Request, Response } from "express";
import { LoginInfo, TokenInfo } from "../../types/auth";
import AccountModel from "../../models/account.model";
import "dotenv/config";
import { createToken } from "../../service/token.service";
import { FindAccount } from "../../service/auth.service";

export const Login = async (req: Request, res: Response) => {
  const { id, password } = req.body as LoginInfo;

  if (!id || !password)
    return res.status(400).json("Need to Login Info (ID, Password)");

  const account = FindAccount(id, password) as unknown as AccountModel;
  if (!account) return res.status(400).json("ID or Password does not match.");
  // Crate Token Part
  const accessToken = createToken({
    index: account.index,
    id,
    ip: req.ip,
    expiresIn: "3h",
    issuer: "notice-board",
    type: "access",
  } as TokenInfo);

  const refreshToken = createToken({
    index: account.index,
    id,
    ip: req.ip,
    expiresIn: "7d",
    issuer: "notice-board",
    type: "refresh",
  } as TokenInfo);

  return res.status(200).json({
    accessToken,
    refreshToken,
    message: "Send it to the key 'token' on request through that token.",
  });
};

export default Login;
