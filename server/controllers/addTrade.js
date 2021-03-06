/**
 * create new trade
 * @param {trade} -string- the trade tilte
 */

const boom = require("boom");
const { addTrade, findTradeByTitle } = require("./../database/queries");

const sendEmail = require("../helpers/emails");

module.exports = async (req, res, next) => {
  const { trade } = req.body;
  try {
    // check if the the trade exists
    const storedTrade = await findTradeByTitle(trade);
    if (storedTrade) {
      return next(boom.badRequest(`${trade} is already exist!`));
    }

    const newTrade = await addTrade({ title: trade });

    await sendEmail.newTradeAdded({ newTrade });

    return res.json(newTrade);
  } catch (error) {
    return next(boom.badImplementation(error));
  }
};
