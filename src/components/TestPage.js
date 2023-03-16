import React, { useState } from "react";
import TestChild from "./TestChild";

export const ThemeContext = React.createContext();

function TestPage() {
	const [isDark, setDark] = useState(false);
	function toggleTheme() {
		setDark((prevState) => !prevState);
	}
	return (
		<div>
			<ThemeContext.Provider value={isDark}>
				TestPage
				<button onClick={toggleTheme}>Toggle</button>
				<TestChild />
			</ThemeContext.Provider>
		</div>
	);
}

export default TestPage;
