import React from "react";
import proyecto1 from "../imgs/proyectos/proyecto1.jpg";
import portfolioBackground from "../imgs/backgrounds/portfolioBackground.jpg";
const Portfolio = () => {
	const portfolioBackgroundStyle = {
		backgroundImage: `url(${portfolioBackground})`,
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
	};
	return (
		<section
			id="portfolio"
			className=" flex flex-col justify-center items-center "
			style={portfolioBackgroundStyle}
		>
			<div className="container   flex flex-col justify-around items-center py-12">
				<h2 className="text-3xl font-bold text-center mb-12">
					Nuestro Portafolio
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Proyecto 1 */}
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h3 className="text-xl font-semibold mb-4">
							Proyecto 1
						</h3>
						<img
							src={proyecto1}
							className=" h-64 w-full my-2 rounded"
						/>
						<p className="text-lg">
							En este proyecto se ha realizado una edicion de un
							video de clash royale. Un youtuber famoso nos
							contacto para que realicemos la edicion de su ultimo
							video y le ha encantado consiguiendo 200% mas de
							visitas que en su ultimo video.
						</p>
					</div>
					{/* Proyecto 2 */}
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h3 className="text-xl font-semibold mb-4">
							Proyecto 2
						</h3>
						<img
							src={proyecto1}
							className=" h-64 w-full my-2 rounded"
						/>
						<p className="text-lg">
							En este proyecto se ha realizado una edicion de un
							video de clash royale. Un youtuber famoso nos
							contacto para que realicemos la edicion de su ultimo
							video y le ha encantado consiguiendo 200% mas de
							visitas que en su ultimo video.
						</p>
					</div>
					{/* Proyecto 3 */}
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h3 className="text-xl font-semibold mb-4">
							Proyecto 3
						</h3>
						<img
							src={proyecto1}
							className=" h-64 w-full my-2 rounded"
						/>
						<p className="text-lg">
							En este proyecto se ha realizado una edicion de un
							video de clash royale. Un youtuber famoso nos
							contacto para que realicemos la edicion de su ultimo
							video y le ha encantado consiguiendo 200% mas de
							visitas que en su ultimo video.
						</p>
					</div>
					{/* Proyecto 4 */}
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h3 className="text-xl font-semibold mb-4">
							Proyecto 4
						</h3>
						<img
							src={proyecto1}
							className=" h-64 w-full my-2 rounded"
						/>
						<p className="text-lg">
							En este proyecto se ha realizado una edicion de un
							video de clash royale. Un youtuber famoso nos
							contacto para que realicemos la edicion de su ultimo
							video y le ha encantado consiguiendo 200% mas de
							visitas que en su ultimo video.
						</p>
					</div>
					{/* Proyecto 5 */}
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h3 className="text-xl font-semibold mb-4">
							Proyecto 5
						</h3>
						<img
							src={proyecto1}
							className=" h-64 w-full my-2 rounded"
						/>
						<p className="text-lg">
							En este proyecto se ha realizado una edicion de un
							video de clash royale. Un youtuber famoso nos
							contacto para que realicemos la edicion de su ultimo
							video y le ha encantado consiguiendo 200% mas de
							visitas que en su ultimo video.
						</p>
					</div>
					{/* Proyecto 6 */}
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h3 className="text-xl font-semibold mb-4">
							Proyecto 6
						</h3>
						<img
							src={proyecto1}
							className=" h-64 w-full my-2 rounded"
						/>
						<p className="text-lg">
							En este proyecto se ha realizado una edicion de un
							video de clash royale. Un youtuber famoso nos
							contacto para que realicemos la edicion de su ultimo
							video y le ha encantado consiguiendo 200% mas de
							visitas que en su ultimo video.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
