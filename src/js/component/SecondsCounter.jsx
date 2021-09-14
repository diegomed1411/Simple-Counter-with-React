import React from "react";
import PropTypes from "prop-types";

//create your first component
export const SecondsCounter = props => {
	return (
		<div
			className="text-center mt-5 mb-5 mr-5 ml-5"
			style={{
				fontFamily: "Brush Script MT', cursive",
				fontSize: "100px",
				backgroundColor: "#353535",
				margin: "25px",
				marginLeft: "25px",
				borderRadius: "10px",
				width: "100px"
			}}>
			{" "}
			{props.segundos}{" "}
		</div>
	);
};

SecondsCounter.propTypes = {
	segundos: PropTypes.number
};
