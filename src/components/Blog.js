import React, { useState } from "react";
import articulo1 from "../imgs/articulos/articulo1.jpg";
import articulo2 from "../imgs/articulos/articulo2.jpg";
const Blog = () => {
	// Estado para controlar si se debe mostrar el contenido completo de cada entrada
	const [showFullContent, setShowFullContent] = useState(false);

	// Función para alternar entre mostrar el contenido completo y el resumen
	const toggleContent = () => {
		setShowFullContent(!showFullContent);
	};

	return (
		<section id="blog" className="h-screen bg-gray-900 text-white">
			<div className="container mx-auto py-8">
				<h2 className="text-3xl font-bold text-center mb-8">
					Nuestro Blog
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Blog Post 1 */}
					<div className="bg-gray-800 bg-opacity-90 border border-white p-6 flex flex-col items-center  rounded shadow-md">
						<h3 className="text-xl font-semibold mb-4">
							Cómo mejorar tu estrategia de marketing digital
						</h3>
						<img
							src={articulo1}
							alt="Imagen del artículo"
							className="mb-4 rounded h-[50vh] object-cover"
						/>
						<p className="text-lg">
							En este artículo te mostramos algunas estrategias
							efectivas para mejorar tu presencia en línea y
							aumentar tu alcance en las redes sociales.
						</p>
						<p
							className={
								showFullContent
									? "block text-lg"
									: "hidden text-lg"
							}
						>
							Descubre cómo optimizar tus campañas publicitarias,
							aumentar la participación de los seguidores y
							generar más conversiones en tu sitio web. Te
							ofrecemos consejos prácticos y ejemplos de éxito
							para ayudarte a alcanzar tus objetivos de marketing.
						</p>
						<button
							className="text-blue-500 mt-4"
							onClick={toggleContent}
						>
							{showFullContent ? "Ver menos" : "Leer más"}
						</button>
					</div>
					{/* Blog Post 2 */}
					<div className="bg-gray-800 bg-opacity-90 border border-white p-6 flex flex-col items-center  rounded shadow-md">
						<h3 className="text-xl font-semibold mb-4">
							Los beneficios de la edición de video para tu
							negocio
						</h3>
						<img
							src={articulo2}
							alt="Imagen del artículo"
							className="mb-4 rounded h-[50vh] object-cover"
						/>
						<p className="text-lg">
							Descubre cómo la edición de video puede ayudarte a
							destacar en el mercado y atraer a más clientes hacia
							tu marca.
						</p>
						<p
							className={
								showFullContent
									? "block text-lg"
									: "hidden text-lg"
							}
						>
							Aprende a crear videos profesionales que capten la
							atención de tu audiencia y comuniquen eficazmente tu
							mensaje. Te mostramos herramientas y técnicas para
							producir contenido de alta calidad y maximizar el
							impacto de tu estrategia de marketing.
						</p>
						<button
							className="text-blue-500 mt-4"
							onClick={toggleContent}
						>
							{showFullContent ? "Ver menos" : "Leer más"}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blog;
