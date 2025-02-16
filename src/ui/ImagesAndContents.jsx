import ImagesAndContentDisplay from "./ImagesAndContentDisplay";
import Button from "./Button";
import Community from "./Community";

const tipCards = [
	{
		id: 1,
		image: "/images/fruits.jpg",
		spanTip1: "Wellness",
		spanTip2: "Nutrition",
		spanTip3: "Immunity",
		header: "Boost your immunity with These SuperFoods",
		contentTip:
			"Discover the top superfoods that can enhance your immune system and help you stay healthy year-round",
	},
	{
		id: 2,
		image: "/images/exercise2.jpg",
		spanTip1: "Fitness",
		spanTip2: "Mental health",
		spanTip3: "Lifestyle",
		header: "The Benefits of Regular Exercise for Mental Health",
		contentTip:
			"Learn how incorporating physical activity into your daily routine can improve your mood, reduce stress, and boost mental clarity",
	},
	{
		id: 3,
		image: "/images/sleepingPerson.jpg",
		spanTip1: "Sleep Health",
		spanTip2: "Wellness",
		spanTip3: "Lifestyle",
		header: "Healthy Sleep Habits: Tips for a Restful Night",
		contentTip:
			"Explore effective strategies for improving your sleep quality and achieving a restful night's sleep.",
	},
];

export default function ImagesAndContents() {
	return (
		<div className="w-[24.575rem] min-h-[125rem] pt-5 2xl:w-[96rem] 2xl:mx-auto">
			<div className="2xl:w-[96rem]">
				<Button tips="/tips" tipsStyled="bg-blue-200 transparent 2xl:w-[96rem]">
					<p className="text-utiliBlue">News and Tips</p>
				</Button>
				<h2 className="text-center text-[1.5rem] font-poppins 2xl:mx-auto 2xl:text-[3rem] 2xl:w-[70rem]">
					Latest Health News and Tips
				</h2>
				<p className="w-[22.575rem] pl-5 text-center font-poppins text-[0.8rem] 2xl:text-center 2xl:mx-auto 2xl:text-[0.8rem] 2xl:w-[70rem]">
					Stay informed with the latest updates, expert advice, and practical
					tips to keep you healthy and well
				</p>

				{/* Static layout for tipCards */}
				<div className="flex flex-col  2xl:flex-row 2xl:flex-nowrap 2xl:overflow-hidden 2xl:gap-4">
					{tipCards.map((tipCard) => (
						<div key={tipCard.id} className="w-full 2xl:w-[30rem]">
							<ImagesAndContentDisplay tipCard={tipCard} />
						</div>
					))}
				</div>
			</div>

			<Community />
		</div>
	);
}
