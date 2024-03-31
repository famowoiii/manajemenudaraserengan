export const addDataToWorksheet = (worksheet, modelName, data) => {
  if (data && data.length > 0) {
    worksheet.addRow({ model: modelName });
    data.forEach((item) => {
      worksheet.addRow({ id: item.id, CO: item.CO });
      // Tambahkan baris lain sesuai kebutuhan
    });
  }
};
