import React from "react";
import Clock from "./clock";
import Card from "./card";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center mt-5">
			<Card />
		</div>
	);
};

export default Home;
