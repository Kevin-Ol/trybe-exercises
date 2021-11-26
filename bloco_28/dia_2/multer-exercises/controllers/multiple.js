module.exports = (req, res) => {
  if (req.files) {
    const files = req.files.map((file) => ({ 
      file: file.originalname, url: `http://localhost:3000/${file.filename}`, 
    }));
    return res.status(200).json(files);
  }
  return res.status(404).json({ message: 'Nenhum arquivo foi enviado' });
};
