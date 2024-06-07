import React from "react";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Team from "../components/Team";
import Blog from "../components/Blog";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Intro from "../components/Intro";

const Home = () => {
	const handleScroll = (element) => {
		element?.scrollIntoView();
	};
	return (
		<div>
			<Navbar handleScroll={handleScroll} />
			<Intro />
			<Services />
			<Portfolio />
			<Team />
			<Blog />
			<ContactForm />
			<Footer />
		</div>
	);
};

export default Home;
