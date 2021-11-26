const multer = require('multer');
const fs = require('fs');

const path = require('path');

const fileExists = (name) => {
  const files = fs.readdirSync(path.join(__dirname, '..', 'uploads'));
  return files.some((file) => file.includes(name));
};

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, 'uploads');
  },
  filename: (_req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, callback) => {
  if (file.mimetype !== 'image/png') {
    req.invalidFile = true;
    return callback(null, false);
  }

  if (fileExists(file.originalname)) {
    req.fileExists = true;
    return callback(null, false);
  }
  return callback(null, true);
};

module.exports = multer({ storage, fileFilter });
