import React from "react";
// import PropTypes from "prop-types";
import { useHistoryContext } from "./HistoryContext";

function History() {
  const { history } = useHistoryContext();

  // if(history.length > 2){
  //   throw new Error('Test error for Error Boundary');
  // }

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