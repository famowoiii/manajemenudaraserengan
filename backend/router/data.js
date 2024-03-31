import express from "express";
import {
  getJayengan,
  getDanukusuman,
  getJoyontakan,
  getKemlayan,
  getKratonan,
  getSerengan,
  getAllDataAverage,
  getTipes,
  donwloadExcel,
} from "../controller/Data.js";
import { verifyAdmin } from "../utils/verify.js";
import { verifyToken } from "../utils/verify.js";

import {
  postDanukusuman,
  postJayengan,
  postJoyontakan,
  postKemlayan,
  postKratonan,
  postSerengan,
  postTipes,
} from "../controller/ESP32.js";

// import { verifyAdmin, verifyToken } from "../utils/verify.js";

const router = express.Router();

//GET DATA DOWNLOAD EXCEL
router.get("/download-excel", verifyToken, verifyAdmin, donwloadExcel);

//GET DATA PER KELURAHAN
router.get("/average", getAllDataAverage);
router.get("/jayengan", getJayengan);
router.get("/danukusuman", getDanukusuman);
router.get("/joyontakan", getJoyontakan);
router.get("/kemlayan", getKemlayan);
router.get("/kratonan", getKratonan);
router.get("/serengan", getSerengan);
router.get("/tipes", getTipes);

//POST DATA esp32 sensor mku
router.post("/jayengan", postJayengan);
router.post("/danukusuman", postDanukusuman);
router.post("/joyontakan", postJoyontakan);
router.post("/kemlayan", postKemlayan);
router.post("/kratonan", postKratonan);
router.post("/serengan", postSerengan);
router.post("/tipes", postTipes);
//GET DATA EXCELL
router.get("/download-excel", verifyToken, verifyAdmin, donwloadExcel);

export default router;
