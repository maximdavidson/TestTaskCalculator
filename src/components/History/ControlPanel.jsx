import React, { useState } from "react";
import PropTypes from "prop-types";
import c from './History.module.css'
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function ControlPanel({ onToggleHistory }) {
   const [isHistoryOpen, setIsHistoryOpen] = useState(false);

   const handleToggleHistory = () => {
      setIsHistoryOpen(!isHistoryOpen);
      onToggleHistory(!isHistoryOpen);
   };

   return (
      <div className="control-panel">
         <button className={c.button}  onClick={handleToggleHistory}>
            {isHistoryOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
         </button>
      </div>
   );
}

ControlPanel.propTypes = {
   onToggleHistory: PropTypes.func.isRequired
};

export default ControlPanel;