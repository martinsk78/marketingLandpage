import React from "react";
import introBackground from "../imgs/backgrounds/introBackground.jpg";

function Intro() {
	const introBackgroundStyle = {
		backgroundImage: `url(${introBackground})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundAttachment: "fixed",
		backgroundRepeat: "no-repeat",
	};
	return (
		<div
			className=" flex items-center h-[80vh] w-full"
			style={introBackgroundStyle}
		>
			<div className="pb-20 pl-36 flex flex-col gap-10 ">
				<h1 className="text-6xl  text-sky-100      ">
					Bienvenido a nuestra agencia de marketing
				</h1>
				<h3 className="text-4xl pl-10 text-white opacity-75">
					Transformando ideas en resultados, un clic a la vez.
				</h3>
			</div>
		</div>
	);
}

export default Intro;
