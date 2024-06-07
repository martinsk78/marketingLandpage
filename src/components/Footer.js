import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white py-8">
			<div className="container mx-auto flex justify-between items-center">
				<div className="flex items-center space-x-4">
					<span className="text-lg font-bold">Síguenos:</span>
					<a
						href="#"
						className="text-blue-500 hover:text-blue-300 transition duration-300"
					>
						<FaFacebook />
					</a>
					<a
						href="#"
						className="text-blue-400 hover:text-blue-200 transition duration-300"
					>
						<FaTwitter />
					</a>
					<a
						href="#"
						className="text-red-500 hover:text-red-300 transition duration-300"
					>
						<FaInstagram />
					</a>
				</div>
				<div>
					<p className="text-sm">
						© 2024 Todos los derechos reservados
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
