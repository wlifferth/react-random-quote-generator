export const REQUEST_QUOTE = "REQUEST_QUOTE";
export const ACCEPT_QUOTE = "ACCEPT_QUOTE";
export const GET_QUOTE = "GET_QUOTE";

const axios = require("axios");

export const requestQuote = () => ({
  type: REQUEST_QUOTE,
});

export const acceptQuote = (text, author, quoteId) => ({
  type: ACCEPT_QUOTE,
  text,
  author,
  quoteId,
});

export const getNewQuote = (quoteId) => async (dispatch) => {
  try {
    const totalQuotes = 44;
    dispatch(requestQuote());
    let newQuoteId = Math.floor(Math.random() * totalQuotes) + 1;
    if (newQuoteId === quoteId) {
      newQuoteId = (newQuoteId + 1) % totalQuotes;
    }
    const url = `https://quotes.stormconsultancy.co.uk/quotes/${newQuoteId}.json`;
    const response = await axios.get(url);
    if (response.status === 200) {
      console.log(response);
      const text = response.data.quote;
      const author = response.data.author;
      dispatch(acceptQuote(text, author, quoteId));
    }
  } catch (error) {
    console.error(error);
  }
};
