import React from "react";
// import PropTypes from "prop-types";
import { useHistoryContext } from "./HistoryContext";

function History() {
  const { history } = useHistoryContext();

  return (
    <div className="history">
      <ul>
        {history.map((operation, index) => (
          <li key={index}>{operation}</li>
        ))}
      </ul>
    </div>
  );
}

// History.propTypes = {
//    history: PropTypes.arrayOf(PropTypes.string).isRequired
//  };

export default History;