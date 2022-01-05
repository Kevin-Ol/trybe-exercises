const { Books } = require('../models');
const { StatusCodes } = require('http-status-codes');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Books.destroy({ where: { id } });

    if (!book) return res.status(StatusCodes.NOT_FOUND).json({ message: 'Livro não encontrado' });
    
    return res.status(StatusCodes.OK).json({ message: 'Livro deletado com sucesso' });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Algo deu errado' });
  };
};
