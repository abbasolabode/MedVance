import Button from "./Button";

export default function Community() {
	return (
		<div className="w-[24.575rem] min-h-[60rem] 2xl:mt-[6rem] 2xl:min-h-[70rem] 2xl:py-5">
			<div className="w-[24.575rem] mt-10 flex justify-center flex-col items-center bg-black 2xl:w-[96rem]">
				<div className="flex justify-center flex-col items-center w-[24.575rem]">
					<h3 className="hidden 2xl:block">Community</h3>
					<h2 className="text-[1.4rem] pt-5 font-semibold font-poppins text-white 2xl:w-[96rem] 2xl:text-center 2xl:text-[2.5rem]">
						Creating Wellness Together
					</h2>
					<p className="w-[22.5rem] font-poppins text-white 2xl:text-[0.8rem] 2xl:pt-3 2xl:font-semibold 2xl:w-[90rem] 2xl:text-center">
						We provide the resources and connections you need to thrive. Let's
						create a heathier future together.
					</p>
				</div>

				<div className="mt-10 w-[22.575rem] min-h-[40rem] 2xl:w-[96rem]">
					<div className="w-[22.575rem] min-h-[20rem] px-2 py-2 2xl:w-[96rem] 2xl:min-h-[40rem] 2xl:flex 2xl:justify-evenly">
						<div className="2xl:w-1/2">
							<img
								src="/images/doctorandpatient.jpg"
								alt="doctor and patient"
								className="min-h-[20rem] 2xl:pl-4 w-[22.575rem] 2xl:rounded-md  rounded-md 2xl:w-full"
							/>
						</div>
						<div className="2xl:w-1/2 2xl:flex 2xl:items-start 2xl:flex-col 2xl:justify-start 2xl:mt-10">
							<h3 className="text-center text-[1.4rem] font-poppins mt-3 text-white 2xl:text-[2.2rem] 2xl:pl-4">
								Discover Our Collaborations
							</h3>
							<p className="w-[21.575rem] font-poppins text-center text-white 2xl:w-[44.5rem] 2xl:text-[1.15rem] 2xl:pt-4 ">
								Together, we work to enhance health services, promote wellness
								initiatives, and improve the overall well-being of our
								community. Discover how these collaborations bring innovations
								solutions and valuable resources to meet your health needs.
							</p>
							<div>
								<Button>
									<p>Learn More</p>
								</Button>
							</div>
						</div>
					</div>
					<div className=" mt-8 2xl:w-[96rem] 2xl:min-h-[40rem] 2xl:flex 2xl:justify-evenly">
						<div className="2xl:w-1/2 2xl:flex 2xl:items-start 2xl:flex-col 2xl:justify-start 2xl:mt-10">
							<h3 className="text-center text-[1.4rem] font-poppins mt-3 text-white 2xl:text-[2.2rem] 2xl:pl-4">
								Explore Our Initiatives
							</h3>
							<p className="w-[21.575rem] font-poppins text-center text-white 2xl:w-[44rem] 2xl:pl-2 2xl:text-[1.15rem] 2xl:pt-4">
								From fitness and nutrition programs to mental health and chronic
								disease management, we offer a variety of services to help you
								lead a healthier, happier life.
							</p>

							<div>
								<Button>
									<p>Learn More</p>
								</Button>
							</div>
						</div>

						<div className="2xl:w-1/2">
							<img
								src="/images/exercise1.jpg"
								alt="woman engaging in fitness"
								className="min-h-[25rem] 2xl:rounded-md 2xl:w-full w-[22.575rem] rounded-md"
							/>
						</div>
					</div>

					<div className="mt-8 2xl:flex 2xl:justify-evenly  2xl:pb-[3rem]">
						<div className="2xl:w-1/2 2xl:pl-4">
							<img
								className="2xl:w-[40rem]"
								src="/images/team.jpg"
								alt="team"
							/>
						</div>

						<div className="2xl:w-1/2 2xl:flex 2xl:items-start 2xl:flex-col 2xl:justify-start 2xl:mt-10">
							<h3 className="text-center text-[1.4rem] font-poppins mt-3 text-white 2xl:text-[2.2rem] 2xl:pl-4">
								Discover Our Collaborations
							</h3>
							<p className="w-[21.575rem] font-poppins text-center text-white 2xl:w-[44rem] 2xl:pl-2 2xl:text-[1.15rem] 2xl:pt-4">
								Together, we work to enhance health services, promote wellness
								initiatives, and improve the overall well-being of our
								community. Discover how these collaborations bring innovations
								solutions and valuable resources to meet your health needs.
							</p>
							<div>
								<Button>Learn More</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
