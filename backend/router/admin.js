import express from "express";
import Admin from "../model/adminDB.js";
import { createNewUser, getAllUser, login } from "../controller/Admin.js";
import { verifyAdmin, verifyToken } from "../utils/verify.js";

const router = express.Router();

//POST
router.post("/register", createNewUser);
router.post("/login", login);

//GET
router.get("/getadmin", verifyToken, verifyAdmin, getAllUser);

export default router;
