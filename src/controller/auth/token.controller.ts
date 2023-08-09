import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const TokenAuthentication = (req: Request, res: Response) => {
  const { token } = req.body;
  if (token) {
    try {
      const verify = jwt.verify(req.body["token"], "CHANGE THIS SECERT KEY");
      return res.status(200).json({ verify, message: "vaild token" });
    } catch (err) {
      return res.status(400).json("invaild token");
    }
  }
};

export default TokenAuthentication;
