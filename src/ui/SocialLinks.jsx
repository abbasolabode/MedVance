import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function SocialLinks() {
	return (
		<div>
			<div className="2xl:flex 2xl:flex-col  ">
				<hr className="border-1 w-[23rem] mx-auto border-white 2xl:w-[90rem]" />
				<div className="2xl:py-10 py-5">
					<span className="text-white flex justify-center pt-5 gap-4 2xl:gap-10">
						<span className="text-[1.5rem] 2xl:text-[3rem]">
							<a href="https://www.facebook.com">
								<FaFacebook />
							</a>
						</span>
						<span className="text-[1.5rem] 2xl:text-[3rem]">
							<a href="https://www.twitter.com">
								<FaTwitter />
							</a>
						</span>
						<span className="text-[1.5rem] 2xl:text-[3rem]">
							<a href="https://www.instagram.com">
								<FaInstagram />
							</a>
						</span>
					</span>
				</div>
			</div>
		</div>
	);
}
