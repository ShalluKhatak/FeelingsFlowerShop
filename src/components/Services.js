const Services = () => {
	return (
		<>
			<section id="services" class="services section">
				Section Title
				<div class="container section-title" data-aos="fade-up">
					<h2>Services</h2>
					<p>
						Necessitatibus eius consequatur ex aliquid fuga eum
						quidem sint consectetur velit
					</p>
				</div>{' '}
				End Section Title
				<div class="container">
					<div class="row gy-4">
						<div
							class="col-xl-3 col-md-6 d-flex"
							data-aos="fade-up"
							data-aos-delay="100">
							<div class="service-item position-relative">
								<div class="icon">
									<i class="bi bi-activity icon"></i>
								</div>
								<h4>
									<a
										href="service-details.html"
										class="stretched-link">
										Lorem Ipsum
									</a>
								</h4>
								<p>
									Voluptatum deleniti atque corrupti quos
									dolores et quas molestias excepturi
								</p>
							</div>
						</div>{' '}
						End Service Item
						<div
							class="col-xl-3 col-md-6 d-flex"
							data-aos="fade-up"
							data-aos-delay="200">
							<div class="service-item position-relative">
								<div class="icon">
									<i class="bi bi-bounding-box-circles icon"></i>
								</div>
								<h4>
									<a
										href="service-details.html"
										class="stretched-link">
										Sed ut perspici
									</a>
								</h4>
								<p>
									Duis aute irure dolor in reprehenderit in
									voluptate velit esse cillum dolore
								</p>
							</div>
						</div>{' '}
						End Service Item
						<div
							class="col-xl-3 col-md-6 d-flex"
							data-aos="fade-up"
							data-aos-delay="300">
							<div class="service-item position-relative">
								<div class="icon">
									<i class="bi bi-calendar4-week icon"></i>
								</div>
								<h4>
									<a
										href="service-details.html"
										class="stretched-link">
										Magni Dolores
									</a>
								</h4>
								<p>
									Excepteur sint occaecat cupidatat non
									proident, sunt in culpa qui officia
								</p>
							</div>
						</div>{' '}
						End Service Item
						<div
							class="col-xl-3 col-md-6 d-flex"
							data-aos="fade-up"
							data-aos-delay="400">
							<div class="service-item position-relative">
								<div class="icon">
									<i class="bi bi-broadcast icon"></i>
								</div>
								<h4>
									<a
										href="service-details.html"
										class="stretched-link">
										Nemo Enim
									</a>
								</h4>
								<p>
									At vero eos et accusamus et iusto odio
									dignissimos ducimus qui blanditiis
								</p>
							</div>
						</div>{' '}
						End Service Item
					</div>
				</div>
			</section>

			<section id="stats" class="stats section light-background">
				<div class="container" data-aos="fade-up" data-aos-delay="100">
					<div class="row gy-4">
						<div class="col-lg-3 col-md-6">
							<div class="stats-item">
								<i class="bi bi-emoji-smile"></i>
								<span
									data-purecounter-start="0"
									data-purecounter-end="232"
									data-purecounter-duration="1"
									class="purecounter"></span>
								<p>
									<strong>Happy Clients</strong>{' '}
									<span>consequuntur quae</span>
								</p>
							</div>
						</div>{' '}
						End Stats Item
						<div class="col-lg-3 col-md-6">
							<div class="stats-item">
								<i class="bi bi-journal-richtext"></i>
								<span
									data-purecounter-start="0"
									data-purecounter-end="521"
									data-purecounter-duration="1"
									class="purecounter"></span>
								<p>
									<strong>Projects</strong>{' '}
									<span>adipisci atque cum quia aut</span>
								</p>
							</div>
						</div>{' '}
						End Stats Item
						<div class="col-lg-3 col-md-6">
							<div class="stats-item">
								<i class="bi bi-headset"></i>
								<span
									data-purecounter-start="0"
									data-purecounter-end="1453"
									data-purecounter-duration="1"
									class="purecounter"></span>
								<p>
									<strong>Hours Of Support</strong>{' '}
									<span>aut commodi quaerat</span>
								</p>
							</div>
						</div>{' '}
						End Stats Item
						<div class="col-lg-3 col-md-6">
							<div class="stats-item">
								<i class="bi bi-people"></i>
								<span
									data-purecounter-start="0"
									data-purecounter-end="32"
									data-purecounter-duration="1"
									class="purecounter"></span>
								<p>
									<strong>Hard Workers</strong>{' '}
									<span>rerum asperiores dolor</span>
								</p>
							</div>
						</div>{' '}
						End Stats Item
					</div>
				</div>
			</section>

			<section
				id="call-to-action"
				class="call-to-action section accent-background">
				<img src="assets/img/cta-bg.jpg" alt="" />

				<div class="container">
					<div
						class="row justify-content-center"
						data-aos="zoom-in"
						data-aos-delay="100">
						<div class="col-xl-10">
							<div class="text-center">
								<h3>Call To Action</h3>
								<p>
									Duis aute irure dolor in reprehenderit in
									voluptate velit esse cillum dolore eu fugiat
									nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui
									officia deserunt mollit anim id est laborum.
								</p>
								<a class="cta-btn" href="#">
									Call To Action
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Services;
