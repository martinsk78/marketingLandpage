import React, { useState } from "react";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Aquí puedes agregar la lógica para enviar el formulario
		console.log(formData);
		// Limpia los campos después de enviar
		setFormData({
			name: "",
			email: "",
			message: "",
		});
	};

	return (
		<section id="contact" className="bg-gray-200 py-12">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold text-center mb-8">
					Contáctanos
				</h2>
				<form onSubmit={handleSubmit} className="max-w-lg mx-auto">
					<div className="mb-6">
						<label
							htmlFor="name"
							className="block text-gray-700 font-bold mb-2"
						>
							Nombre
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
							className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="email"
							className="block text-gray-700 font-bold mb-2"
						>
							Correo electrónico
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
							className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="message"
							className="block text-gray-700 font-bold mb-2"
						>
							Mensaje
						</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							required
							rows="5"
							className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
						></textarea>
					</div>
					<button
						type="submit"
						className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
					>
						Enviar mensaje
					</button>
				</form>
			</div>
		</section>
	);
};

export default ContactForm;
