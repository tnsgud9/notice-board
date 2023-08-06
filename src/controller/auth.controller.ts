import express from "express";

type LoginInfo = {
  id: string;
  password: string;
};

const router = express.Router();

router.post("/login", async (req, res) => {
  console.log(req.body);
  const { id, password } = req.body as LoginInfo;
  if (!id || !password)
    return res.status(400).json("Need to Login Info (ID, Password)");

  // do action login process
  return res.status(200).json();
});

export default router;
