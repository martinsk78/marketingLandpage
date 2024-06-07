import React from "react";
import ReactDOM from "react-dom"; // Corregir la importación
import App from "./App";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
