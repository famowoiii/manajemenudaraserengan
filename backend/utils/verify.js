// verify.js

import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  if (!req.cookies || !req.cookies.access_token) {
    return res.status(403).json("You are not authenticated");
  }

  const token = req.cookies.access_token;
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) {
      return res.status(403).json("Token is not valid");
    }
    req.user = user;
    next(); // Panggil next() setelah user ditetapkan
  });
};

export const verifyAdmin = (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    // Periksa isAdmin dengan benar
    return res.status(403).json("You are not authorized");
  }
  next();
};
