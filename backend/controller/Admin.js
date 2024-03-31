import express from "express";
import Admin from "../model/adminDB.js";
import { Sequelize } from "sequelize";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createNewUser = async (req, res, next) => {
  try {
    // Mendapatkan data yang diterima dari request
    const { username, email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    // Menambahkan data baru ke dalam database menggunakan Sequelize
    const newAdmin = await Admin.create({
      username: username,
      email: email,
      password: hash,
    });

    res.status(200).json(newAdmin);
  } catch (err) {
    next(err);
  }
};

export const getAllUser = async (req, res, next) => {
  try {
    const getAllAdmin = await Admin.findAll();
    res.status(200).json(getAllAdmin);
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    // Mendapatkan username dan password dari request body
    const { username, password } = req.body;

    // Mencari admin berdasarkan username
    const admin = await Admin.findOne({ where: { username: username } });

    // Memeriksa apakah admin ditemukan
    if (!admin) {
      return res.status(400).json({ msg: "Username tidak ditemukan" });
    }

    // Memeriksa kecocokan password
    const isPasswordCorrect = await bcrypt.compare(password, admin.password);

    // Memeriksa apakah password benar
    if (!isPasswordCorrect) {
      return res.status(400).json({ msg: "Password salah" });
    }

    // Jika username dan password benar, membuat dan mengirimkan token JWT
    const token = jwt.sign(
      {
        id: admin.id,
        isAdmin: admin.isAdmin,
      },
      process.env.JWT
    );

    // Mengirimkan token JWT dalam cookie
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ msg: "Login berhasil" });
  } catch (err) {
    next(err);
  }
};
