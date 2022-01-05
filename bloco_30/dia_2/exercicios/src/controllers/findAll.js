const { Books } = require('../models');
const { StatusCodes } = require('http-status-codes');

module.exports = async (_req, res) => {
  try {
    const books = await Books.findAll();

    return res.status(StatusCodes.OK).json(books);
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Algo deu errado' });
  };
};
