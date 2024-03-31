import { deleteOldDataIfLimitExceeded } from "./deleteOldDataIfLimitExceeded.js";
export const handlePostRequest = async (Model, req, res, next) => {
  try {
    const { CO } = req.body;
    const newData = await Model.create({ CO });
    await deleteOldDataIfLimitExceeded(Model); // Panggil fungsi hapus data jika batas tercapai
    res
      .status(201)
      .json({ message: "Data inserted successfully", data: newData });
  } catch (err) {
    next(err);
  }
};
