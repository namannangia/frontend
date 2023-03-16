import React, { useContext } from "react";
import { ThemeContext } from "./TestPage";

function TestChild() {
	const darkTheme = useContext(ThemeContext);
	const themeStyles = {
		backgroundColor: darkTheme ? "grey" : "darkgrey",
	};

	return <div style={themeStyles}>TestChild</div>;
}

export default TestChild;
