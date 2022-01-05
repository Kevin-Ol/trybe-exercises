const { Books } = require('../models');
const { StatusCodes } = require('http-status-codes');

module.exports = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const createdBook = await Books.create({ title, author, pageQuantity });

    return res.status(StatusCodes.CREATED).json(createdBook);
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Algo deu errado' });
  };
};
