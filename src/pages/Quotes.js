import { useContext, useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import { useData } from "../Hooks/useData";
import { LogInContext } from "../LogInContextComponent";
import { ThemeContext } from "../ThemeContextComponent";

const Quotes = () => {
  const url = `https://dummyjson.com/quotes`;
  const { data, error } = useData(url);
  const { classToBe2 } = useContext(ThemeContext);
  return (
    <div className="main-q">
      <h1>Quotes</h1>
      <div>
        {error ? (
          <p>Error</p>
        ) : (
          data?.quotes.map((quote) => {
            return (
              <div
                className={"quotes" + " " + "divs" + " " + classToBe2}
                key={quote.id}
              >
                <p className="quote">"{quote.quote}"</p>
                <p className="quote-a">{quote.author}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Quotes;
