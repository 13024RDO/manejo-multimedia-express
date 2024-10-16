import { upload } from "../src/settings/upload.config.js";

export const uploadImage = (fielName) => (req, res, next) => {
  const uploadSingle = upload.single(fielName);

  uploadSingle(req, res, (error) => {
    if (error || !req.file) {
      console.error("Error al subir el archivo:", error);
      return res.status(400).json({
        message: "Error al subir el archivo",
        error: error.message,
      });
    }

    req.body[fielName] = req.file.filename;

    next();
  });
};
