export const deleteOldDataIfLimitExceeded = async (Model) => {
  try {
    const dataCount = await Model.countDocuments();
    const maxDataLimit = 1000; // Misalnya, batas maksimal data adalah 1000

    if (dataCount > maxDataLimit) {
      // Jika jumlah data melebihi batas, hapus data lama
      const oldestData = await Model.findOne().sort({ createdAt: 1 }); // Mengambil data tertua
      await oldestData.remove();
      console.log("Old data deleted from", Model.modelName);
    }
  } catch (err) {
    console.error("Error while deleting old data:", err);
  }
};
