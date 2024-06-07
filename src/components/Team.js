import React from "react";
import teamBackground from "../imgs/backgrounds/teamBackground.jpg";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import gino1 from "../imgs/team/gino1.jpg";
import gino2 from "../imgs/team/gino2.jpg";
import fran1 from "../imgs/team/fran1.jpg";
import fran2 from "../imgs/team/fran2.jpg";

const Team = () => {
	const teamBackgroundStyle = {
		backgroundImage: `url(${teamBackground})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundAttachment: "fixed",
		backgroundRepeat: "no-repeat",
	};

	const moveContainer = (direction, number) => {
		const container = document.getElementById(`img-container${number}`);
		const imageWidth = container?.querySelector("img")?.clientWidth;
		if (container && imageWidth) {
			const scrollAmount =
				direction === "left" ? -imageWidth : imageWidth;
			container.scrollBy({ left: scrollAmount, behavior: "smooth" });
		}
	};

	return (
		<section id="team" style={teamBackgroundStyle} className="h-[95vh]">
			<div className="container mx-auto py-10">
				<h2 className="text-3xl font-bold text-center mb-10 text-white">
					Nuestro Equipo
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Miembro 1 */}
					<div className="bg-white h-[90%] overflow-y-scroll bg-opacity-90 border border-white p-6 flex flex-col items-center  rounded shadow-md">
						<h3 className="text-3xl font-semibold mb-4">
							Gino Cordoneda
						</h3>
						<div className="flex items-center gap-16 text-4xl">
							<BiChevronLeft
								className="cursor-pointer"
								onClick={() => moveContainer("left", 1)}
							/>
							<div
								className="w-[100%] flex overflow-x-hidden"
								id="img-container1"
							>
								<img
									src={gino1}
									alt="Miembro 1"
									className="w-full aspect-square mb-4 rounded-sm"
								/>
								<img
									src={gino2}
									alt="Miembro 2"
									className="w-full aspect-square mb-4 rounded-sm"
								/>
							</div>
							<BiChevronRight
								className="cursor-pointer"
								onClick={() => moveContainer("right", 1)}
							/>
						</div>
						<p className="text-lg">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Dolorem molestiae tenetur blanditiis impedit
							consequatur, possimus esse illum veritatis
							temporibus perferendis sed doloribus voluptatum quos
							in, reprehenderit magnam enim modi ut. Explicabo
							distinctio rerum asperiores culpa dignissimos iste
							cumque aut, nobis harum, saepe ipsum dolorem,
							doloribus voluptatibus temporibus sunt laborum quas
							optio quae. Expedita sequi soluta, ex tempore
							voluptate corporis quam libero rerum?
						</p>
					</div>
					{/* Miembro 2 */}
					<div className="bg-white h-[90%] overflow-y-scroll bg-opacity-90 border border-white p-6 flex flex-col items-center  rounded shadow-md">
						<h3 className="text-3xl font-semibold mb-4">
							Franco Martel
						</h3>
						<div className="flex items-center gap-16 text-4xl">
							<BiChevronLeft
								className="cursor-pointer"
								onClick={() => moveContainer("left", 2)}
							/>
							<div
								className="w-[100%] flex overflow-x-hidden"
								id="img-container2"
							>
								<img
									src={fran1}
									alt="Miembro 1"
									className="w-full aspect-square mb-4 rounded-sm"
								/>
								<img
									src={fran2}
									alt="Miembro 2"
									className="w-full aspect-square mb-4 rounded-sm"
								/>
							</div>
							<BiChevronRight
								className="cursor-pointer"
								onClick={() => moveContainer("right", 2)}
							/>
						</div>

						<p className="text-lg">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Dolorem molestiae tenetur blanditiis impedit
							consequatur, possimus esse illum veritatis
							temporibus perferendis sed doloribus voluptatum quos
							in, reprehenderit magnam enim modi ut. Explicabo
							distinctio rerum asperiores culpa dignissimos iste
							cumque aut, nobis harum, saepe ipsum dolorem,
							doloribus voluptatibus temporibus sunt laborum quas
							optio quae. Expedita sequi soluta, ex tempore
							voluptate corporis quam libero rerum?
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team;
