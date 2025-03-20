import express from "express";
import "dotenv/config";
import cors from "cors";

import { connectDb } from "./config/db.js";
import userRouter from "./routes/auth.routes.js";
import taskRouter from "./routes/task.routes.js";

const server = express();

server.use(express.json());
server.use(cors());
server.use("/api/auth", userRouter);
server.use("/api/task", taskRouter);

server.get("/", (req, res) => {
  res.json({ message: "server is running", success: true });
});

server.listen(process.env.PORT, async () => {
  await connectDb();
  console.log(`server is running at http://localhost:${process.env.PORT}`);
});
