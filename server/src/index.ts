import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { ConnectToDb, GetDb } from "./database";
import router from "./router";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

ConnectToDb((err) => {
  if (!err) {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
    const db = GetDb();
    console.log("🚀 ~ file: index.ts:32 ~ ConnectToDb ~ db:", db);
  }
});

app.use("/api/v1", router());
