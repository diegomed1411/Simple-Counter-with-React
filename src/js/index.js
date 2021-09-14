//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { SecondsCounter } from "./component/SecondsCounter.jsx";

//render your react application
let unidades = 0;
let decenas = 0;
let centenas = 0;
let millares = 0;
let decomillares = 0;
setInterval(() => {
	unidades++;
	if (unidades >= 10) {
		decenas++;
		unidades = 0;
	}
	if (decenas >= 10) {
		centenas++;
		decenas = 0;
	}
	if (centenas >= 10) {
		millares++;
		centenas = 0;
	}
	if (millares >= 10) {
		decomillares++;
		millares = 0;
	}
	if (decomillares >= 10) {
		unidades = 0;
		decenas = 0;
		centenas = 0;
		millares = 0;
		decomillares = 0;
	}
	ReactDOM.render(
		<div className="container d-flex justify-content-center">
			<div
				className="text-center mt-5 mb-5 mr-5 ml-5"
				style={{ fontSize: "100px" }}>
				&#9201;
			</div>
			<SecondsCounter segundos={decomillares} />
			<SecondsCounter segundos={millares} />
			<SecondsCounter segundos={centenas} />
			<SecondsCounter segundos={decenas} />
			<SecondsCounter segundos={unidades} />
		</div>,
		document.querySelector("#app")
	);
}, 1000);
