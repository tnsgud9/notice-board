import { Request, Response } from "express";
import { LoginInfo } from "../../types/auth";
import AccountModel from "../../models/account.model";
import jwt from "jsonwebtoken";

export const Login = async (req: Request, res: Response) => {
  const { id, password } = req.body as LoginInfo;

  if (!id || !password)
    return res.status(400).json("Need to Login Info (ID, Password)");
  // do action login process
  const account = (await AccountModel.findOne({
    where: { id, password },
  }).catch(() =>
    res.status(400).json("ID or password does not match")
  )) as AccountModel;

  const token = jwt.sign(
    {
      index: account.dataValues.index,
      id: id,
      ip: req.ip,
    },
    "CHANGE THIS SECERT KEY",
    { expiresIn: "3h" }
  );
  // 토큰 생성
  /*
  payload:
  {
  "index": 1,
  "id": "sadas",
  "ip": "adsf",
  "exp": default 3hour?
  }
  */

  return res.status(200).json({
    token,
    message: "Send it to the key 'token' on request through that token.",
  }); // 토큰을 생성한다.
};

export default Login;
