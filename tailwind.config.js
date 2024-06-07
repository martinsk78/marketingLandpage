/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				// Dark Theme Color Palette
				dark: {
					primary: "#1a202c", // Dark blue-gray
					secondary: "#2d3748", // Dark blue-gray
					tertiary: "#4a5568", // Dark blue-gray
				},
				// Neon Accents
				neon: {
					primary: "#00d1b2", // Neon green
					secondary: "#ff3860", // Neon pink
					tertiary: "#ffdd57", // Neon yellow
				},
			},
			textColors: {
				// Dark Theme Text Colors
				"dark-primary": "#cbd5e0", // Light gray
				"dark-secondary": "#a0aec0", // Medium gray
				"dark-tertiary": "#718096", // Dark gray
				// Neon Text Colors
				"neon-primary": "#00d1b2", // Neon green
				"neon-secondary": "#ff3860", // Neon pink
				"neon-tertiary": "#ffdd57", // Neon yellow
			},
		},
	},
	plugins: [],
};
