import React from "react";
import PropTypes from "prop-types";

function History({ history }) {
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

History.propTypes = {
   history: PropTypes.array.isRequired
};

export default History;