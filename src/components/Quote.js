import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getNewQuote } from "../actions";

const Quote = ({ newQuoteOnClick, text, author, quoteId }) => {
  const tweet = encodeURI(`${text} - ${author}`);
  const tweetHref = `https://twitter.com/intent/tweet?text=${tweet}`;
  return (
    <div id="quote-box" className="quote-box">
      <div id="text">{text}</div>
      <div id="author" className="author">
        -{author}
      </div>
      <div className="button-holder">
        <button id="new-quote" onClick={() => newQuoteOnClick(quoteId)}>
          New Quote
        </button>
        <a href={tweetHref}>
          <button id="tweet-quote">Tweet Quote</button>
        </a>
      </div>
    </div>
  );
};

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  newQuoteOnClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  text: state.text,
  author: state.author,
  quoteId: state.quoteId,
});

const mapDispatchToProps = (dispatch) => ({
  newQuoteOnClick: (quoteId) => dispatch(getNewQuote(quoteId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quote);
