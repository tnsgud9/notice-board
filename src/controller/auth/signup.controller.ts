import { Response, Request } from "express";
import { SignupInfo } from "../../types/auth";
import AccountModel, { PermissionState } from "../../models/account.model";
import bcrypt from "bcrypt";

export const SignUp = async (req: Request, res: Response) => {
  const { password, username, id } = req.body as SignupInfo;
  const regPass = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,64}$/;

  if (!regPass.exec(password))
    return res.status(400).json("Error: Wrong sign up info");
  const [user, created] = await AccountModel.findOrCreate({
    where: { id },
    defaults: {
      id,
      password: bcrypt.hashSync(password, 12),
      username,
      permission: PermissionState.user,
    },
  });
  return created
    ? res.status(200).json({ user, message: "user created" })
    : res.status(400).json({ message: "ID already exists." });
};

export default SignUp;
