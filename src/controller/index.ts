import express from "express";
import authController from "./auth";

const router = express.Router();

type ClientInfo = {
  userAgent?: string;
  ip: string;
  requestMethod: string;
  requestURL: string;
};

router.use("/auth", authController);

router.get("/", async (req, res) => {
  const info: ClientInfo = {
    userAgent: req.headers["user-agent"],
    ip: req.ip,
    requestMethod: req.method,
    requestURL: req.url,
  };
  return res.send(
    `<h1>Notice-Board</h1> 
     <hr/>
     <h2>Connection Info</h2>
      <p><b>userAgent :</b> ${info.userAgent}</p>
      <p><b>ip :</b> ${info.ip}</p>
      <p><b>requestMethod :</b> ${info.requestMethod}</p>
      <p><b>requestURL :</b> ${info.requestURL}</p> 
    `
  );
});

export default router;
