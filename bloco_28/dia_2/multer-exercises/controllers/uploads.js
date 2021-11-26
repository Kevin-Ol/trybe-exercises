module.exports = (req, res) => {
  if (req.file) return res.status(200).json({ message: 'Arquivo subido com sucesso' });
  if (req.invalidFile) return res.status(403).json({ message: 'Extension must be `png`' });
  if (req.fileExists) return res.status(403).json({ message: 'File already exists`' });
  return res.status(404).json({ message: 'Nenhum arquivo foi enviado' });
};
