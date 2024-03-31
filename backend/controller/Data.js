// Import modul yang diperlukan

import Jayengan from "../model/jayenganDB.js";
import Kratonan from "../model/kratonanDB.js";
import Kemlayan from "../model/kemlayanDB.js";
import Tipes from "../model/tipesDB.js";
import Average from "../model/averageDB.js";
import Serengan from "../model/serenganDB.js";
import Danukusuman from "../model/danukusumanDB.js";
import Joyontakan from "../model/joyonyakanDB.js";
import { getLatestData } from "../utils/getLatestData.js";
import { addDataToWorksheet } from "../utils/addDataToWorksheet.js";

// Controller untuk mendapatkan semua data rata-rata
export const getAllDataAverage = async (req, res, next) => {
  try {
    const { CO } = req.body;
    const [
      jayenganData,
      kratonanData,
      kemlayanData,
      tipesData,
      serenganData,
      danukusumanData,
      joyontakanData,
    ] = await Promise.all([
      getLatestData(Jayengan),
      getLatestData(Kratonan),
      getLatestData(Kemlayan),
      getLatestData(Tipes),
      getLatestData(Serengan),
      getLatestData(Danukusuman),
      getLatestData(Joyontakan),
    ]);

    // Ambil CO dari setiap data terbaru
    const totalCO =
      jayenganData.CO +
      kratonanData.CO +
      kemlayanData.CO +
      tipesData.CO +
      serenganData.CO +
      danukusumanData.CO +
      joyontakanData.CO;

    const averageCO = totalCO / 7;

    // Buat data rata-rata baru dan simpan ke database
    const newDataAverage = await Average.create({ CO: averageCO });

    // Kirim data rata-rata sebagai respons API
    res.status(200).json({ averageCO });
  } catch (err) {
    next(err);
  }
};

// Set interval untuk menjalankan fungsi pembuatan data rata-rata setiap 5 menit
setInterval(async () => {
  try {
    const [
      jayenganData,
      kratonanData,
      kemlayanData,
      tipesData,
      serenganData,
      danukusumanData,
      joyontakanData,
    ] = await Promise.all([
      getLatestData(Jayengan),
      getLatestData(Kratonan),
      getLatestData(Kemlayan),
      getLatestData(Tipes),
      getLatestData(Serengan),
      getLatestData(Danukusuman),
      getLatestData(Joyontakan),
    ]);

    const totalCO =
      jayenganData.CO +
      kratonanData.CO +
      kemlayanData.CO +
      tipesData.CO +
      serenganData.CO +
      danukusumanData.CO +
      joyontakanData.CO;

    const averageCO = totalCO / 7;

    // Buat data rata-rata baru dan simpan ke database
    await Average.create({ CO: averageCO });
  } catch (err) {
    console.error("Error while creating average data:", err);
  }
}, 15 * 60 * 10000); // 5 menit dalam milidetik

// Controller untuk mendapatkan data dari model Jayengan
export const getJayengan = async (req, res, next) => {
  try {
    const data = await Jayengan.findAll();
    const COValues = data.map(({ CO, createdAt }) => ({
      CO,
      createdAt,
    }));
    // Kirim data melalui WebSocket ke semua client yang terhubung

    res.status(200).json(COValues);
  } catch (err) {
    next(err);
  }
};

// Controller untuk mendapatkan data dari model Kratonan
export const getKratonan = async (req, res, next) => {
  try {
    const data = await Kratonan.findAll();
    const COValues = data.map(({ CO, createdAt }) => ({
      CO,
      createdAt,
    }));
    // Kirim data melalui WebSocket ke semua client yang terhubung

    res.status(200).json(COValues);
  } catch (err) {
    next(err);
  }
};

// Controller untuk mendapatkan data dari model Kemlayan
export const getKemlayan = async (req, res, next) => {
  try {
    const data = await Kemlayan.findAll();
    const COValues = data.map(({ CO, createdAt }) => ({
      CO,
      createdAt,
    }));
    // Kirim data melalui WebSocket ke semua client yang terhubung

    res.status(200).json(COValues);
  } catch (err) {
    next(err);
  }
};

// Controller untuk mendapatkan data dari model Tipes
export const getTipes = async (req, res, next) => {
  try {
    const data = await Tipes.findAll();
    const COValues = data.map(({ CO, createdAt }) => ({
      CO,
      createdAt,
    }));
    // Kirim data melalui WebSocket ke semua client yang terhubung
    res.status(200).json(COValues);
  } catch (err) {
    next(err);
  }
};

// Controller untuk mendapatkan data dari model Serengan
export const getSerengan = async (req, res, next) => {
  try {
    const data = await Serengan.findAll();

    // Memetakan data untuk memilih properti CO dan createdAt
    const COValues = data.map(({ CO, createdAt }) => ({
      CO,
      createdAt,
    }));

    // Kirim data yang telah dipetakan sebagai respons JSON
    res.status(200).json(COValues);
  } catch (err) {
    next(err);
  }
};

// Controller untuk mendapatkan data dari model Danukusuman
export const getDanukusuman = async (req, res, next) => {
  try {
    const data = await Danukusuman.findAll();
    const COValues = data.map(({ CO, createdAt }) => ({
      CO,
      createdAt,
    }));
    // Kirim data melalui WebSocket ke semua client yang terhubung

    res.status(200).json(COValues);
  } catch (err) {
    next(err);
  }
};

// Controller untuk mendapatkan data dari model Joyontakan
export const getJoyontakan = async (req, res, next) => {
  try {
    const data = await Joyontakan.findAll();
    const COValues = data.map(({ CO, createdAt }) => ({
      CO,
      createdAt,
    }));
    // Kirim data melalui WebSocket ke semua client yang terhubung

    res.status(200).json(COValues);
  } catch (err) {
    next(err);
  }
};

//controller donwload excell

//controller donwload excell
export const donwloadExcel = async (req, res, next) => {
  try {
    // Mendapatkan semua data dari setiap model
    const [
      jayenganData,
      kratonanData,
      kemlayanData,
      tipesData,
      serenganData,
      danukusumanData,
      joyontakanData,
    ] = await Promise.all([
      Jayengan.findAll(),
      Kratonan.findAll(),
      Kemlayan.findAll(),
      Tipes.findAll(),
      Serengan.findAll(),
      Danukusuman.findAll(),
      Joyontakan.findAll(),
    ]);

    // Membuat file Excel
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Semua Data");
    worksheet.columns = [
      { header: "Model", key: "model", width: 30 },
      { header: "ID", key: "id", width: 10000 },
      { header: "CO", key: "CO", width: 15 },
      // Tambahkan kolom lain sesuai kebutuhan
    ];

    // Menambahkan data dari setiap model ke file Excel
    addDataToWorksheet(worksheet, "Jayengan", jayenganData);
    addDataToWorksheet(worksheet, "Kratonan", kratonanData);
    addDataToWorksheet(worksheet, "Kemlayan", kemlayanData);
    addDataToWorksheet(worksheet, "Tipes", tipesData);
    addDataToWorksheet(worksheet, "Serengan", serenganData);
    addDataToWorksheet(worksheet, "Danukusuman", danukusumanData);
    addDataToWorksheet(worksheet, "Joyontakan", joyontakanData);

    // Menyimpan file Excel ke dalam buffer
    const buffer = await workbook.xlsx.writeBuffer();

    // Mengirim file Excel sebagai respons
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="semua_data.xlsx"'
    );
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.send(buffer);
  } catch (err) {
    next(err);
  }
};
