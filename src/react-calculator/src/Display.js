import React from "react";

const Display = ({value}) => {
    return (
        <div className="calc-display" id="display">
        {value}
        </div>
    )
}

export default Display;