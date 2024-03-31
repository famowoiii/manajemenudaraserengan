import Danukusuman from "../model/danukusumanDB.js";
import Jayengan from "../model/jayenganDB.js";
import Joyontakan from "../model/joyonyakanDB.js";
import Kemlayan from "../model/kemlayanDB.js";
import Kratonan from "../model/kratonanDB.js";
import Serengan from "../model/serenganDB.js";
import Tipes from "../model/tipesDB.js";
import { handlePostRequest } from "../utils/handlePostRequest.js";

export const postKemlayan = async (req, res, next) => {
  await handlePostRequest(Kemlayan, req, res, next);
};

export const postJayengan = async (req, res, next) => {
  await handlePostRequest(Jayengan, req, res, next);
};

export const postKratonan = async (req, res, next) => {
  await handlePostRequest(Kratonan, req, res, next);
};

export const postTipes = async (req, res, next) => {
  await handlePostRequest(Tipes, req, res, next);
};

export const postSerengan = async (req, res, next) => {
  await handlePostRequest(Serengan, req, res, next);
};

export const postDanukusuman = async (req, res, next) => {
  await handlePostRequest(Danukusuman, req, res, next);
};

export const postJoyontakan = async (req, res, next) => {
  await handlePostRequest(Joyontakan, req, res, next);
};

// export const postKemlayan = async (req, res, next) => {
//   try {
//     const { CO } = req.body; // Ambil data CO dari body request

//     // Buat data baru dengan nilai CO yang diterima
//     const newData = await Kemlayan.create({ CO });

//     res
//       .status(201)
//       .json({ message: "Data inserted successfully", data: newData });
//   } catch (err) {
//     next(err);
//   }
// };

// export const postJayengan = async (req, res, next) => {
//   try {
//     const { CO } = req.body;
//     const newData = await Jayengan.create({ CO });
//     res
//       .status(201)
//       .json({ message: "Data inserted successfully", data: newData });
//   } catch (err) {
//     next(err);
//   }
// };

// export const postKratonan = async (req, res, next) => {
//   try {
//     const { CO } = req.body;
//     const newData = await Kratonan.create({ CO });
//     res
//       .status(201)
//       .json({ message: "Data inserted successfully", data: newData });
//   } catch (err) {
//     next(err);
//   }
// };

// export const postTipes = async (req, res, next) => {
//   try {
//     const { CO } = req.body;
//     const newData = await Tipes.create({ CO });
//     res
//       .status(201)
//       .json({ message: "Data inserted successfully", data: newData });
//   } catch (err) {
//     next(err);
//   }
// };

// export const postSerengan = async (req, res, next) => {
//   try {
//     const { CO } = req.body;
//     const newData = await Serengan.create({ CO });
//     res
//       .status(201)
//       .json({ message: "Data inserted successfully", data: newData });
//   } catch (err) {
//     next(err);
//   }
// };

// export const postDanukusuman = async (req, res, next) => {
//   try {
//     const { CO } = req.body;
//     const newData = await Danukusuman.create({ CO });
//     res
//       .status(201)
//       .json({ message: "Data inserted successfully", data: newData });
//   } catch (err) {
//     next(err);
//   }
// };

// export const postJoyontakan = async (req, res, next) => {
//   try {
//     const { CO } = req.body;
//     const newData = await Joyontakan.create({ CO });
//     res
//       .status(201)
//       .json({ message: "Data inserted successfully", data: newData });
//   } catch (err) {
//     next(err);
//   }
// };

// menghapus database

// Fungsi untuk menangani request post untuk setiap model
