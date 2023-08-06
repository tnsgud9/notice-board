import express from "express";
import controller from "./controller";
import { createServer } from "http";
import bodyParser from "body-parser";
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(controller);

const server = createServer(app);
server.listen(process.env.PORT || PORT);
