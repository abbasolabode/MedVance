import { Link } from "react-router-dom";
import Button from "./Button";
import SocialLinks from "./SocialLinks";


export default function Footer() {
	return (
		<div className="border w-[24.575rem] min-h-[35rem] bg-black mt-[3rem] overflow-hidden 2xl:w-[96rem]">
			<div className="min-h-[35rem] 2xl:w-[96rem] 2xl:flex 2xl:items-center 2xl:justify-around">
				<div className="flex flex-col items-center">
					<h2 className="text-[1.3rem] text-center font-poppins text-white pt-5 2xl:w-[42rem] 2xl:text-[2rem] 2xl:pr-[8rem]">
						Suporting Your Wellness Journey
					</h2>
					<p className="w-[20rem] font-poppins text-sm pt-2 text-white 2xl:w-[40rem] 2xl:text-[1.1rem]">
						Our comprehensive resources, expert advice, and supportive community
						are here to guide you every step of the way
					</p>
					<div className="flex items-center justify-center w-[22.575rem] 2xl:w-[40rem] ml-5">
						<input
							type="text"
							className="w-[12rem] py-2 min-h-[3rem] px-7 mt-5 ml-11 placeholder:font-poppins placeholder:text-stone-700 rounded-md outline-none border border-stone-800 2xl:w-[30rem]"
							value=""
							placeholder="Enter your Email"
						/>
						<div className="2xl:relative 2xl:left-[-1.5rem] relative left-[-1.7rem] ">
							<Button onClick="/" footerButtonStyled="bg-utiliBlue rounded">
								Enter Email
							</Button>
						</div>
					</div>
				</div>

				<div className="text-white flex justify-around min-h-[15rem] items-center gap-1 2xl:mt-9 2xl:min-h-[30rem] 2xl:w-[40rem]">
					<div className="2xl:min-h-[12rem]">
						<h3 className="text-[1.1rem] font-poppins 2xl:text-[1.5rem]">
							About Medvance
						</h3>
						<nav>
							<ul className="2xl:w-[15rem] 2xl:min-h-[10rem] 2xl:flex  2xl:flex-col 2xl:gap-2">
								<li>
									<Link
										to="/pathNoFound"
										className="text-[0.8rem] font-poppins 2xl:text-[1rem] 2xl:font-light"
									>
										About us
									</Link>
								</li>
								<li>
									<Link
										to="/pathNoFound"
										className="text-[0.8rem] font-poppins 2xl:text-[1rem] 2xl:pt-2"
									>
										Our Team
									</Link>
								</li>
								<li>
									<Link
										to="/pathNoFound"
										className="text-[0.8rem] font-poppins 2xl:text-[1rem] 2xl:pt-2"
									>
										Careers
									</Link>
								</li>
								<li>
									<Link
										to="/pathNoFound"
										className="text-[0.8rem] font-poppins 2xl:text-[1rem] 2xl:mt-7"
									>
										Blog
									</Link>
								</li>
								<li>
									<Link
										to="/pathNoFound"
										className="text-[0.8rem] font-poppins 2xl:text-[1rem] 2xl:pt-2"
									>
										Contact Us
									</Link>
								</li>
							</ul>
						</nav>
					</div>

					<div className="2xl:min-h-[12rem]">
						<h3 className="text-[1.1rem] font-poppins 2xl:text-[1.5rem] 2xl:pt-15">
							For Employees
						</h3>
						<nav>
							<ul className="2xl:w-[15rem]  2xl:flex  2xl:flex-col 2xl:gap-2">
								<li>
									<Link
										to="/pathNoFound"
										className="text-[0.8rem] font-poppins 2xl:text-[1rem] 2xl:mt-5"
									>
										Health Contact
									</Link>
								</li>
								<li>
									<Link
										to="/pathNoFound"
										className="text-[0.8rem] font-poppins 2xl:text-[1rem] "
									>
										Employ Association Program
									</Link>
								</li>
								<li>
									<Link
										to="/pathNoFound"
										className="text-[0.8rem] font-poppins 2xl:text-[1rem] "
									>
										Teammate Health Portal
									</Link>
								</li>
								<li>
									<Link
										to="/pathNoFound"
										className="text-[0.8rem] font-poppins 2xl:text-[1rem] "
									>
										Employer Services
									</Link>
								</li>
								<li>
									<Link
										to="/pathNoFound"
										className="text-[0.8rem] font-poppins 2xl:text-[1rem]"
									>
										Employee Assistance
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
			<SocialLinks />
		</div>
	);
}







