import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

const Services = () => {
	const [marketingVisible, setMarketingVisible] = useState(false);
	const [videoEditingVisible, setVideoEditingVisible] = useState(false);
	const [contentCreationVisible, setContentCreationVisible] = useState(false);

	return (
		<section
			id="services"
			className="flex flex-col items-center justify-center h-[90vh]  text-white"
			style={{
				background: "rgb(55,59,81)",
				background:
					"linear-gradient(301deg, rgba(55,59,81,1) 12%, rgba(24,30,46,1) 35%, rgba(21,27,40,1) 61%, rgba(65,73,93,1) 92%)",
			}}
		>
			<div className="container flex flex-col h-[80%]  justify-around">
				<h2 className="text-5xl drop-shadow-xl mb-10 font-bold text-center">
					Nuestros Servicios
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="bg-gray-800 p-6 rounded-lg shadow-2xl hover:shadow-neutral-400 duration-700 hover:scale-105 transition-all">
						<h3 className="text-3xl underline underline-offset-8 font-semibold mb-4 text-center">
							Marketing Digital
						</h3>
						<p className="text-xl text-justify p-5">
							El marketing digital es el conjunto de estrategias y
							acciones publicitarias que se realizan en los medios
							y canales digitales, con el objetivo de promocionar
							productos, servicios o marcas. Incluye una amplia
							variedad de tácticas, como el marketing en redes
							sociales, el marketing de contenidos, el SEO, la
							publicidad en línea, el email marketing y más. En la
							era digital actual, el marketing digital es esencial
							para cualquier empresa que desee alcanzar a su
							audiencia en línea y generar leads y ventas.
							<p
								className="text-blue-300 pt-2 cursor-pointer"
								onClick={() => setMarketingVisible(true)}
							>
								Ver mas...
							</p>
						</p>
					</div>
					<div className="bg-gray-800 p-6 rounded-lg shadow-2xl hover:shadow-neutral-400 duration-700 hover:scale-105 transition-all">
						<h3 className="text-3xl underline underline-offset-8 font-semibold mb-4 text-center">
							Edición de Video
						</h3>
						<p className="text-xl text-justify p-5">
							La edición de video es el proceso de manipulación y
							modificación de secuencias de video para crear una
							pieza final coherente y atractiva. Incluye la
							selección y recorte de clips, la adición de efectos
							visuales y de sonido, la corrección de color, la
							sincronización de audio y video, la creación de
							transiciones y mucho más. La edición de video es una
							habilidad fundamental en la producción de contenido
							multimedia, y es utilizada en una amplia gama de
							industrias, desde el cine y la televisión hasta el
							marketing digital y la producción de contenido en
							línea.
							<p
								className="text-blue-300 pt-2 cursor-pointer"
								onClick={() => setVideoEditingVisible(true)}
							>
								Ver mas...
							</p>
						</p>
					</div>
					<div className="bg-gray-800 p-6 rounded-lg shadow-2xl hover:shadow-neutral-400 duration-700 hover:scale-105 transition-all">
						<h3 className="text-3xl underline underline-offset-8 font-semibold mb-4 text-center">
							Creación de Contenido
						</h3>
						<p className="text-xl text-justify p-5">
							La creación de contenido es el proceso de
							planificación, desarrollo y producción de materiales
							de contenido para su uso en marketing, educación,
							entretenimiento y más. Puede incluir una variedad de
							formatos, como artículos de blog, videos,
							infografías, podcasts, eBooks, y más. La creación de
							contenido de alta calidad y relevante es fundamental
							para atraer y comprometer a la audiencia objetivo,
							establecer autoridad en la industria, mejorar el SEO
							y generar leads y conversiones.
							<p
								className="text-blue-300 pt-2 cursor-pointer"
								onClick={() => setContentCreationVisible(true)}
							>
								Ver mas...
							</p>
						</p>
					</div>
				</div>
			</div>
			<div
				className={`absolute h-[80vh] bg-dark-primary flex w-[85%] transition-opacity duration-500 transform ${marketingVisible ? "opacity-100 scale-100" : "opacity-0 scale-0 translate-x-full"}`}
			>
				<FaArrowLeft
					className="absolute left-5 top-5 text-3xl cursor-pointer"
					onClick={() => setMarketingVisible(false)}
				/>
				<div className="w-1/3 h-full flex flex-col mx-5 items-center text-white">
					<h2 className="text-2xl underline underline-offset-8 font-bold mb-4 text-center my-10">
						Marketing Digital
					</h2>
					<p className="mb-4">
						En la era digital actual, el marketing digital se ha
						convertido en el motor que impulsa el éxito empresarial
						en línea. En [Nombre de la Empresa], entendemos la
						importancia de tener una presencia sólida en el mundo
						digital, y es por eso que ofrecemos un conjunto completo
						de servicios de marketing digital diseñados para
						maximizar tu visibilidad, llegar a tu audiencia objetivo
						y aumentar tus conversiones.
					</p>
					<h3 className="text-lg font-bold mb-2">
						Nuestra Propuesta de Valor:
					</h3>
					<ul className="flex flex-col gap-5 list-disc list-inside mb-4">
						<li>
							Estrategias Personalizadas: No creemos en enfoques
							genéricos. Cada empresa es única, por lo que
							desarrollamos estrategias de marketing digital
							personalizadas que se adaptan a tus necesidades
							específicas y objetivos comerciales.
						</li>
						<li>
							Amplio Espectro de Tácticas: Desde el marketing en
							redes sociales y el SEO hasta la publicidad en línea
							y el email marketing, ofrecemos una amplia gama de
							tácticas diseñadas para llegar a tu audiencia en
							todos los puntos de contacto digitales relevantes.
						</li>
						<li>
							Optimización Continua: No nos detenemos en la
							implementación de las estrategias. Utilizamos
							análisis detallados y herramientas de seguimiento
							para optimizar constantemente nuestras campañas y
							garantizar resultados excepcionales a largo plazo.
						</li>
						<li>
							Transparencia y Medición de Resultados: Creemos en
							la transparencia total. Proporcionamos informes
							detallados y métricas claras para que siempre sepas
							cómo está funcionando tu inversión en marketing
							digital.
						</li>
					</ul>
				</div>
				<div
					className="w-2/3 h-full py-5 px-2"
					style={
						marketingVisible
							? { display: "block" }
							: { display: "none" }
					}
				>
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/LOuBICx33NQ"
						title="Marketing Digital Video"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
			</div>

			{/* Edición de Video */}
			<div
				className={`absolute h-[80vh] bg-dark-primary flex w-[85%] transition-opacity duration-500 transform ${videoEditingVisible ? "opacity-100 scale-100" : "opacity-0 scale-0 translate-x-full"}`}
			>
				<FaArrowLeft
					className="absolute left-5 top-5 text-3xl cursor-pointer"
					onClick={() => setVideoEditingVisible(false)}
				/>
				<div className="w-1/3 h-full flex flex-col mx-5 items-center text-white">
					<h2 className="text-2xl underline underline-offset-8 font-bold mb-4 text-center my-10">
						Edición de Video
					</h2>
					<div className="text-white">
						<p className="mb-6 text-lg ">
							Sumérgete en el emocionante mundo de la edición de
							video, donde cada fotograma se convierte en una
							oportunidad para cautivar a tu audiencia. Nuestro
							equipo de expertos se dedica a transformar tus
							grabaciones en obras maestras visuales que destacan
							en cada plataforma.
						</p>
						<p className="mb-6 text-lg">
							Desde la meticulosa selección y recorte de clips
							hasta la magia de añadir efectos visuales y sonoros,
							nuestra habilidad en la edición de video va más allá
							de lo convencional. Nos comprometemos a crear una
							experiencia visual coherente y atractiva, donde cada
							transición sea fluida y cada detalle esté
							perfectamente sincronizado. La edición de video es
							una piedra angular en la producción de contenido
							multimedia, utilizada en diversas industrias, desde
							el cine y la televisión hasta el marketing digital y
							la creación de contenido en línea.
						</p>
						<p className="mb-6 text-lg ">
							Confía en nosotros para dar vida a tus ideas y
							elevar tu contenido al siguiente nivel, cautivando a
							tu audiencia y destacando entre la multitud.
						</p>
					</div>
				</div>
				<div
					className="w-2/3 h-full py-5 px-2"
					style={
						videoEditingVisible
							? { display: "block" }
							: { display: "none" }
					}
				>
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/nydlGmRG_W8"
						title="Marketing Digital Video"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
			</div>

			{/* Creación de Contenido */}
			<div
				className={`absolute h-[80vh] bg-dark-primary flex w-[85%] transition-opacity duration-500 transform ${contentCreationVisible ? "opacity-100 scale-100" : "opacity-0 scale-0 translate-x-full"}`}
			>
				<FaArrowLeft
					className="absolute left-5 top-5 text-3xl cursor-pointer"
					onClick={() => setContentCreationVisible(false)}
				/>
				<div className="w-1/3 h-full flex flex-col mx-5 items-center text-white">
					<h2 className="text-2xl underline underline-offset-8 font-bold mb-4 text-center my-10">
						Creación de Contenido
					</h2>
					<div className="text-white">
						<p className="mb-6 text-lg">
							La creación de contenido es el proceso de
							planificación, desarrollo y producción de materiales
							de contenido para su uso en marketing, educación,
							entretenimiento y más. Puede incluir una variedad de
							formatos, como artículos de blog, videos,
							infografías, podcasts, eBooks, y más. La creación de
							contenido de alta calidad y relevante es fundamental
							para atraer y comprometer a la audiencia objetivo,
							establecer autoridad en la industria, mejorar el SEO
							y generar leads y conversiones.
						</p>
						<p className="mb-6 text-lg">
							Confía en nosotros para proporcionarte una
							estrategia de contenido sólida que elevará tu marca,
							aumentará tu presencia en línea y te llevará un paso
							más cerca de tus objetivos comerciales.
						</p>
					</div>
				</div>
				<div
					className="w-2/3 h-full py-5 px-2"
					style={
						contentCreationVisible
							? { display: "block" }
							: { display: "none" }
					}
				>
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/FlWAPrYpMJk"
						title="Marketing Digital Video"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
			</div>
		</section>
	);
};

export default Services;
