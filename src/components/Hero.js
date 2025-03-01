import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: 'ease-in-out',
			once: true,
			mirror: false,
		});
	}, []);

	return (
		<section id="hero" className="hero section accent-background">
			<img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />
			<div
				className="container text-center"
				data-aos="fade-up"
				data-aos-delay="100">
				<h2>Welcome to Squad</h2>
				<p>
					We are team of talented designers making websites with
					Bootstrap
				</p>
				<a href="#about" className="btn-scroll" title="Scroll Down">
					<i className="bi bi-chevron-down"></i>
				</a>
			</div>
		</section>
	);
};

export default Hero;
