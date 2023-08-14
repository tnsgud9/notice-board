import { Request, Response } from "express";
import { ValidationToken } from "../../service/token.service";

const TokenAuthentication = (req: Request, res: Response) => {
  const { token } = req.body;

  if (token) {
    const result = ValidationToken(token);
    if (result) return res.status(200).json({ result, message: "vaild token" });
    return res.status(400).json("invaild token");
  }
};

export default TokenAuthentication;
