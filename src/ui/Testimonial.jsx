import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShowTestimonials from "./ShowTestimonials";

export default function Testimonial() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 390,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 428,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5,
				},
			},
		],
	};

	const testimonials = [
		{
			id: 1,
			image: "/images/card-image-1.png",
			testimonialsText:
				"Medvance has been a life saver for me. The ability to consult with a doctor anytime has made my health so much easier. The doctors are knowledgeable and compassionate, and I always feel heard and cared for.",
			name: "John Dayne",
			job: "Contractor",
		},
		{
			id: 2,
			image: "/images/card-image-1.png",
			testimonialsText:
				"Medvance has been a life saver for me. The ability to consult with a doctor anytime has made my health so much easier. The doctors are knowledgeable and compassionate, and I always feel heard and cared for.",
			name: "John Dayne",
			job: "Contractor",
		},
		{
			id: 3,
			image: "/images/card-image-1.png",
			testimonialsText:
				"Medvance has been a life saver for me. The ability to consult with a doctor anytime has made my health so much easier. The doctors are knowledgeable and compassionate, and I always feel heard and cared for.",
			name: "John Dayne",
			job: "Contractor",
		},
		{
			id: 4,
			image: "/images/card-image-1.png",
			testimonialsText:
				"Medvance has been a life saver for me. The ability to consult with a doctor anytime has made my health so much easier. The doctors are knowledgeable and compassionate, and I always feel heard and cared for.",
			name: "John Dayne",
			job: "Contractor",
		},
	];

	return (
		<div className="w-[24.575rem] min-h-[20rem] 2xl:w-[96rem] 2xl:min-h-[20rem] 2xl:mt-[4rem]">
			<div className="w-[24.575rem] min-h-[20rem] 2xl:w-[96rem] 2xl:min-h-[20rem]">
				<div>
					<h2 className="text-center pt-10 text-[2rem] font-poppins 2xl:hidden">
						Our Testimonials
					</h2>
				</div>
				<Slider {...settings}>
					{testimonials.map((testimonial, index) => {
						return (
							// Ensure to return the component
							<ShowTestimonials
								testimonial={testimonial}
								key={testimonial.id}
								index={index}
							/>
						);
					})}
				</Slider>
			</div>
		</div>
	);
}
