import Button from "./Button";

//Background image styling
const backgroundStyling = {
  backgroundImage: "url('./images/medImage.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",

};


export default function HeroSection() {
  return (
		<div
			className="w-[24.575rem] min-h-[40rem] relative top-0 mt-[-2rem]  bg-[#D8BFD8] 2xl:w-[96rem]"
			style={backgroundStyling}
		>
			<div className="absolute top-[10rem] right-0 left-0 2xl:w-[96rem] ">
				<div className="2xl:w-[96rem]">
					<h1 className="text-[1.8rem] text-center font-bold text-stone-800 font-poppins 2xl:w-[96rem] 2xl:text-[3.5rem] 2xl:text-stone-800 2xl:gap-2 2xl:text-center 2xl:flex 2xl:justify-center 2xl:font-bold">
						Empowering <span className="text-[#D87093]"> Health care </span>
						through Innovation
					</h1>

					<p className="text-center w-[20rem] mx-auto font-poppins text-[0.9rem] text-stone-800 font-medium 2xl:text-[1.5rem] 2xl:w-[96rem] 2xl:text-stone-800 2xl:font-semibold">
						Fast, reliable, and affordable medical care at your fingertips.
					</p>
				</div>

				{/* Reuseable button component */}
				<Button
					toAbout="/about"
					textHero="w-[13rem]  2xl:py-[1rem] 2xl:w-[40rem]"
				>
					<p className="2xl:text-[2.2rem] 2xl:w-[40rem] 2xl:whitespace-nowrap 2xl:pr-[3rem]">
						Learn more
					</p>
				</Button>
			</div>
		</div>
	);
}

