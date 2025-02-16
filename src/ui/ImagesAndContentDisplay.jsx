/* eslint-disable no-unused-vars */
import Button from "./Button";

/* eslint-disable react/prop-types */
export default function ImagesAndContentDisplay({ tipCard }) {
	return (
		<div className="mt-8 w-[22.575rem] min-h-[25rem] 2xl:w-[30rem] 2xl:mx-4">
			<div className="w-full min-h-[32rem] py-2 px-2 relative hover:shadow-lg hover:border ml-5 mt-8 shadow transition-shadow duration-300 ease-in-out">
				<div className="flex flex-col items-center pl-2 min-h-[20rem]">
					<div className="min-h-[15rem]">
						<img
							className="rounded-md min-h-[20rem] w-full object-cover"
							src={tipCard.image}
							alt="fruits"
						/>
					</div>
					<div className="absolute top-[15rem] right-0 left-[11rem] 2xl:left-[17rem]">
						<Button readMore="/" styledDiet="bg-white rounded-md">
							<p className="text-[#D87093] font-poppins font-medium">
								Read More
							</p>
						</Button>
					</div>
				</div>

				<div className="hidden 2xl:flex 2xl:gap-1">
					<span className="2xl:border-2 2xl:px-3 2xl:py-1 2xl:rounded-full 2xl:mt-2">
						<p>{tipCard.spanTip1}</p>
					</span>
					<span className="2xl:border-2 2xl:px-3 2xl:py-1 2xl:rounded-full 2xl:mt-2">
						<p>{tipCard.spanTip2}</p>
					</span>
					<span className="2xl:border-2 2xl:px-3 2xl:py-1 2xl:rounded-full 2xl:mt-2">
						<p>{tipCard.spanTip3}</p>
					</span>
				</div>

				<div>
					<h3 className="text-center font-semibold text-[1.2rem] mt-2 font-poppins">
						{tipCard.header}
					</h3>
					<p className="w-[22.2rem] text-[0.9rem] mx-auto font-poppins mt-4 2xl:w-full">
						{tipCard.contentTip}
					</p>
				</div>
			</div>
		</div>
	);
}
