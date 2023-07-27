import React from "react";
const HelloBlueRed = ({ match }) => {
	const { word, color1, color2 } = match.params;
	const styles = {
		color: color1,
		backgroundColor: color2,
	};
	return <h1 style={styles}>{isNaN(Number(word)) ? word : "Invalid Word"}</h1>;
};

export default HelloBlueRed;
//
