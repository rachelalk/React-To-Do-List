//has a state in main app file ✅
//props are function - handlechange ✅

import React from "react";

function Input({ handleChange, inputValue, className }) {
	return (
		<input
			type="text"
			value={inputValue}
			onChange={handleChange}
			placeholder="Enter task..."
            className={className}
		/>
	);
}

export default Input;
