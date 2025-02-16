import Button from "./Button";
import { IoFitness } from "react-icons/io5";
import { IoIosFitness } from "react-icons/io";
import ImagesAndContents from "./ImagesAndContents";
import Testimonial from "../ui/Testimonial";
import CardQoute from "./CardQoute";

export default function MainSection() {
	return (
		<div className="w-[24.375rem] min-h-[300rem] 2xl:w-[96rem] 2xl:mt-[4rem]">
			<div className="w-[24.375rem] min-h-[50rem] 2xl:w-[96rem] 2xl:flex  2xl:bg-gray-300">
				{/* Left container */}
				<div className="w-[22.575rem] min-h-[15rem] mx-auto pt-10 2xl:w-1/3 2xl:px-10">
					<img
						className="w-[22.575rem] 2xl:w-[25rem] 2xl:object-cover min-h-[5rem] 2xl:rounded-2xl rounded-md"
						src="/images/telemedic.jpg"
						alt="telemedic "
					/>
				</div>

				{/* Right container */}
				<div className="w-[22.575rem] min-h-[30rem] mt-8 2xl:w-2/3  2xl:relative 2xl:right-[3rem] ">
					<div className="w-[22.575rem] text-center 2xl:w-full">
						{/* Reuseable button component */}
						<div className="2xl:flex 2xl:justify-start 2xl:w-[15rem] ">
							<Button specialist="/specialist">
								<p>Our Specialist</p>
							</Button>
						</div>

						<p className="text-[1.7rem] w-[22.575rem] font-poppins flex justify-center font-medium pt-4 pl-5 2xl:w-[53rem] 2xl:text-[2.6rem] 2xl:font-semibold">
							Health Services for Your Well-being
						</p>
						<p className="text-[] font-poppins pt-4 pl-6 2xl:w-[54rem] 2xl:text-[1rem] 2xl:whitespace-nowrap 2xl:text-stone-500">
							We provide an extensive array of health services designed to cater
							to your unique health needs.
						</p>

						<div className="w-[22.575rem] min-h-[25rem] flex flex-col items-center ml-[1rem] px-2 py-2  justify-center bg-zinc-300 mt-3 rounded-sm 2xl:flex-row 2xl:w-full 2xl:gap-10 2xl:bg-white">
							<div className="flex flex-col items-center justify-center mt-7 2xl:justify-start 2xl:min-h-[20rem] ">
								<div className="text-[2.5rem] text-utiliBlue 2xl:text-[4rem] 2xl:flex 2xl:justify-start 2xl:w-[26rem] ">
									<IoFitness />
								</div>
								<h2 className="text-[1.1rem] font-medium font-poppins pl-2 2xl:text-left 2xl:w-[35rem] 2xl:text-[1.3rem] 2xl:font-semibold 2xl:relative 2xl:left-[5rem] 2xl:mb-5">
									General Check-ups and Physical Exams
								</h2>
								<p className="font-poppins w-[20rem] 2xl:w-[29rem] 2xl:text-left 2xl:ml-[3rem] 2xl:relative 2xl:left-5  2xl:leading-7 2xl:min-h-[10rem] 2xl:text-[1rem]">
									Our comprehensive physical exams include evaluations of vital
									signs, physical examinations, and discussions about your
									health history, kidneys, and any concerns you may have.
								</p>
							</div>

							<div className="flex flex-col items-center justify-center mt-7 xl:justify-start 2xl:min-h-[20rem] ">
								<div className="text-[2.5rem] text-utiliBlue 2xl:text-[4rem] 2xl:flex 2xl:justify-start 2xl:w-[15rem] 2xl:relative 2xl:left-[-10rem]">
									<IoIosFitness />
								</div>
								<h2 className="text-[1.1rem] font-medium font-poppins pl-2  2xl:w-[25rem]  2xl:relative 2xl:left-[-7rem] 2xl:mb-3 2xl:text-[1.3rem] 2xl:font-semibold">
									Chronic Disease Management
								</h2>
								<p className="font-poppins w-[20rem] 2xl:w-[30rem] 2xl:text-left 2xl:leading-7 2xl:min-h-[10rem] 2xl:text-[1rem] 2xl:relative 2xl:left-[-2rem]">
									Our approach includes regular monitoring, personalized
									treatment plans, lifestyle modification support, and education
									to help you understand and manage your chronic condition,
									reducing complications and improving your quality od life.
								</p>
							</div>
							<div className="2xl:hidden">
								<Button>
									<p>Main services</p>
								</Button>
							</div>
						</div>

						<div className="hidden 2xl:flex 2xl:justify-start 2xl:w-[15rem]">
							<Button>
								<p>Main services</p>
							</Button>
						</div>
					</div>
				</div>
			</div>

			<ImagesAndContents />
			<Testimonial />
			<CardQoute />
		</div>
	);
}
