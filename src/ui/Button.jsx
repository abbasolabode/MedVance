/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";




export default function Button({
	toAbout,
	textHero,
	children,
	specialist,
	tips,
	tipsStyled,
	readMore,
	styledDiet,
	getQuote,
	toQuote,
	footerButtonStyled,
}) {
	const navigate = useNavigate();

	function handleNavigate() {
		//If toAbout is TRUE navigate to about page
		if (toAbout) return navigate(toAbout);
		if (specialist) return navigate(specialist);
		if (tips) return navigate(tips);
		if (readMore) return navigate(readMore);
		if(toQuote) return navigate(toQuote);
	}

	return (
		<div className="w-[12rem] min-h-[4rem] mx-auto flex justify-center items-center mt-5">
			<button
				className={` px-6 py-2 rounded-full bg-[#D87093] ${textHero} ${specialist} ${tipsStyled} ${styledDiet}, ${footerButtonStyled} ${getQuote}`}
				onClick={handleNavigate}
			>
				<p className="text-[1rem] text-white">{children}</p>
			</button>
		</div>
	);
}
