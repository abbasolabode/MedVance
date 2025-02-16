/* eslint-disable react/prop-types */

export default function ShowTestimonials({ testimonial }) {
	return (
		<div>
			<div className="w-[22.575rem] mt-[2rem] min-h-[20rem] flex flex-col items-center justify-center mx-auto 2xl:min-h-[20rem] ">
				<div className="w-[22.575rem] min-h-[20rem] mt-5 py-3 px-3 border 2xl:border-0 2xl:flex 2xl:w-[96rem] 2xl:min-h-[20rem]">
					<div className="2xl:w-2/5 2xl:min-h-[20rem]">
						<img
							className="w-[20rem] mx-auto rounded-md 2xl:min-h-[15rem] 2xl:w-full 2xl:rounded-2xl"
							src={testimonial.image}
							alt=""
						/>
					</div>

					<div className="text-center font-poppins min-h-[15rem] flex flex-col justify-center 2xl:w-3/5  2xl:justify-start 2xl:pt-[4rem]">
						<div className="hidden 2xl:text-[2.5rem] 2xl:font-poppins 2xl:flex 2xl:pl-6 2xl:text-utiliBlue">
							Our Testimonials
						</div>
						<div className="font-light pt-4 2xl:w-[50rem] 2xl:pl-6 2xl:text-left 2xl:text-[1.4rem] text-[#D87093] 2xl:text-stone-800">
							{testimonial.testimonialsText}
						</div>
						<div className="pt-4 2xl:flex 2xl:flex-col 2xl:text-left 2xl:text-[]">
							<p className="font-semibold text-utiliBlue 2xl:text-[1.3rem] 2xl:pl-6">
								{testimonial.name}
							</p>
							<p className="2xl:text-[1.3rem] 2xl:pl-6">{testimonial.job}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
