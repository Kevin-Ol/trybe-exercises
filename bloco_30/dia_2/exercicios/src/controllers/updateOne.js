const { Books } = require('../models');
const { StatusCodes } = require('http-status-codes');

module.exports = async (req, res) => {
  try {
    const { id } = req.params
    const { title, author, pageQuantity } = req.body;
    const [updatedBook] = await Books.update({ title, author, pageQuantity }, { where: { id } });
    
    if (!updatedBook) return res.status(StatusCodes.NOT_FOUND).json({ message: 'Livro não encontrado' });
    
    return res.status(StatusCodes.OK).json({ message: 'Livro atualizado com sucesso' });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Algo deu errado' });
  };
};
