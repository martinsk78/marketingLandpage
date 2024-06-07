import React, { useEffect, useState } from "react";

export default function Navbar({ handleScroll }) {
	const [visible, setVisible] = useState(true);
	const [prevScroll, setPrevScroll] = useState(0);

	useEffect(() => {
		const handleScrollEvent = () => {
			const scrollHeight = window.scrollY;
			setVisible(scrollHeight < prevScroll);
			setPrevScroll(scrollHeight);
		};

		window.addEventListener("scroll", handleScrollEvent);

		return () => {
			window.removeEventListener("scroll", handleScrollEvent);
		};
	}, [prevScroll]);
	const liShadowStyle = {
		textShadow: "1px 2px 2px #B6B0FF",
	};
	return (
		<nav
			className="nav"
			style={visible ? {} : { transform: "translateY(-100%)" }}
		>
			<ul className=" bg-gray-800 bg-opacity-90 text-white fixed w-full flex justify-end gap-20 px-10 h-[9vh] items-center text-2xl  transition-all">
				<li
					className="hover:scale-110  transition-all  "
					style={liShadowStyle}
					onClick={() =>
						handleScroll(document.querySelector("#services"))
					}
				>
					Servicios
				</li>
				<li
					className="hover:scale-110  transition-all  "
					style={liShadowStyle}
					onClick={() =>
						handleScroll(document.querySelector("#portfolio"))
					}
				>
					Portafolio
				</li>
				<li
					className="hover:scale-110  transition-all  "
					style={liShadowStyle}
					onClick={() =>
						handleScroll(document.querySelector("#team"))
					}
				>
					Equipo
				</li>

				<li
					className="hover:scale-110  transition-all "
					style={liShadowStyle}
					onClick={() =>
						handleScroll(document.querySelector("#contact"))
					}
				>
					Contacto
				</li>
			</ul>
		</nav>
	);
}
