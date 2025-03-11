import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const testimonialsData = [
	{
		text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus...',
		img: 'assets/img/testimonials/testimonials-1.jpg',
		name: 'Saul Goodman',
		role: 'CEO & Founder',
	},
	{
		text: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid...',
		img: 'assets/img/testimonials/testimonials-2.jpg',
		name: 'Sara Wilsson',
		role: 'Designer',
	},
	{
		text: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem...',
		img: 'assets/img/testimonials/testimonials-3.jpg',
		name: 'Jena Karlis',
		role: 'Store Owner',
	},
	{
		text: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim...',
		img: 'assets/img/testimonials/testimonials-4.jpg',
		name: 'Matt Brandon',
		role: 'Freelancer',
	},
	{
		text: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor...',
		img: 'assets/img/testimonials/testimonials-5.jpg',
		name: 'John Larson',
		role: 'Entrepreneur',
	},
];

const Testimonials = () => {
	return (
		<section
			id="testimonials"
			className="testimonials section light-background">
			<div className="container section-title" data-aos="fade-up">
				<h2>Testimonials</h2>
				<p>
					Necessitatibus eius consequatur ex aliquid fuga eum quidem
					sint consectetur velit
				</p>
			</div>

			<div className="container" data-aos="fade-up" data-aos-delay="100">
				<Swiper
					loop={true}
					speed={600}
					autoplay={{ delay: 5000 }}
					slidesPerView={'auto'}
					pagination={{ clickable: true }}
					breakpoints={{
						320: { slidesPerView: 1, spaceBetween: 40 },
						1200: { slidesPerView: 3, spaceBetween: 1 },
					}}
					modules={[Pagination, Autoplay]}>
					{testimonialsData.map((testimonial, index) => (
						<SwiperSlide key={index}>
							<div className="testimonial-item">
								<p>
									<i className="bi bi-quote quote-icon-left"></i>
									<span>{testimonial.text}</span>
									<i className="bi bi-quote quote-icon-right"></i>
								</p>
								<img
									src={testimonial.img}
									className="testimonial-img"
									alt={testimonial.name}
								/>
								<h3>{testimonial.name}</h3>
								<h4>{testimonial.role}</h4>
							</div>
						</SwiperSlide>
					))}
					<div className="swiper-pagination"></div>
				</Swiper>
			</div>
		</section>
	);
};

export default Testimonials;
