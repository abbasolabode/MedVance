import Button from "./Button";


export default function CardQoute() {
  return (
		<div className="hidden 2xl:block 2xl:w-[96rem] 2xl:mx-auto 2xl:relative 2xl:top-[9rem] ">
			<div className=" 2xl:w-[90rem] 2xl:flex 2xl:min-h-[20rem] 2xl:justify-around 2xl:mx-auto 2xl:rounded-[2rem] 2xl:z-50 2xl:bg-utiliBlue ">
				<div className="2xl:flex 2xl:flex-col 2xl:gap-3 2xl:mt-[2rem] 2xl:mr-[3rem]">
					<h2 className="2xl:text-[2.3rem] 2xl:font-poppins 2xl:pt-[2rem] 2xl:text-white">
						Master Your Wellness, Live Fully
					</h2>
					<p className="2xl:text-[1.2rem] 2xl:font-poppins 2xl:w-[39rem] 2xl:text-white">
						By cultivating healthy habits and embracing balance, you'll unlock
						your full potential and enjoy a life of vitality and purpose.
					</p>
				</div>

				<div className="2xl:flex 2xl:items-center 2xl:justify-center  2xl:w-[30rem]">
					<Button
						toQuote="/"
						getQuote="2xl:w-[35rem] 2xl:rounded-2xl 2xl:bg-white 2xl:min-h-[5rem]"
					>
						<p className="2xl:text-[1.5rem] 2xl:whitespace-nowrap 2xl:text-black 2xl:font-poppins">
							Receive Your Quote
						</p>
					</Button>
				</div>
			</div>
		</div>
	);
}
