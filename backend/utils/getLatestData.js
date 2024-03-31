export const getLatestData = async (model) => {
  try {
    const latestData = await model.findOne({
      order: [["createdAt", "DESC"]], // Urutkan berdasarkan createdAt secara descending
    });
    return latestData;
  } catch (err) {
    throw err;
  }
};
