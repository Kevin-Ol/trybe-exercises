const { Books } = require('../models');
const { StatusCodes } = require('http-status-codes');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Books.findByPk(id) || [];

    return res.status(StatusCodes.OK).json(book);
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Algo deu errado' });
  };
};
