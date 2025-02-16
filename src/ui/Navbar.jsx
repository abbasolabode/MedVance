import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { useOpenMenu } from "../hooks/useOpenMenu";

export default function Navbar() {
	// Custom hook
	const { handleOpenMenu, isOpen, setIsOpen } = useOpenMenu();

	return (
		<header className="w-[24.375rem] min-h-[4rem] flex justify-between items-center overflow-hidden z-50 2xl:w-[96rem] 2xl:min-h-[10rem] 2xl:flex 2xl:border 2xl:bg-black">
			{/* Header content */}
			<div
				className={`${
					isOpen
						? "hidden"
						: "w-full flex justify-between items-center min-h-[3rem] fixed top-0 bg-black z-50 2xl:static 2xl:bg-transparent"
				}`}
			>
				<div className="w-[8rem] min-h-[2rem] pl-4 flex flex-col 2xl:pl-[7rem]">
					<Link
						to="/"
						className="text-[1.2rem] text-gray-500 text-poppins 2xl:text-[2.5rem]"
					>
						Med<span className="text-[#D87093]">Vance</span>
					</Link>
					<small className="text-white text-[0.5rem] font-poppins pl-0.5 whitespace-nowrap  2xl:text-[1.1rem] text-stone-300">
						Innovative healthcare
					</small>
				</div>

				{/* Menu toggle button (hidden on 96rem screens) */}
				<div className="w-[2rem] min-h-[2rem]">
					<button
						onClick={handleOpenMenu}
						className="text-[1.5rem] text-white 2xl:hidden"
					>
						<CiMenuBurger />
					</button>
				</div>
			</div>

			{/* Navigation menu */}
			{isOpen && (
				<nav
					className={`fixed top-0 left-0 w-full min-h-screen bg-black flex flex-col z-50 2xl:static 2xl:flex-row 2xl:min-h-0 2xl:bg-transparent 2xl:w-[40rem]  2xl:justify-start`}
				>
					{/* Close button (hidden on 96rem screens) */}
					<div
						className="flex justify-end pr-5 pt-5 text-[1.4rem] text-gray-400 2xl:hidden"
						role="button"
						onClick={() => setIsOpen(false)}
					>
						<IoMdClose />
					</div>

					{/* Menu items */}
					<ul className="min-h-[20rem] flex items-center flex-col justify-center gap-3 2xl:flex-row 2xl:min-h-0 2xl:gap-8 2xl:ml-[2rem] 2xl:justify-start 2xl:mr-[10rem]">
						<li>
							<Link
								to="/home"
								className="font-poppins hover:underline hover:decoration-white text-[1.2rem] text-white 2xl:text-black"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to="/about"
								className="font-poppins hover:underline hover:decoration-white text-[1.2rem] text-white "
							>
								About
							</Link>
						</li>
						<li>
							<Link
								to="/services"
								className="font-poppins hover:underline hover:decoration-white text-[1.2rem] text-white 2xl:text-black"
							>
								Services
							</Link>
						</li>
						<li>
							<Link
								to="/contact"
								className="font-poppins hover:underline hover:decoration-white text-[1.2rem] text-white 2xl:text-black"
							>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			)}

			{/* Always show the navbar on 96rem screens */}
			<div className="hidden 2xl:flex 2xl:items-center 2xl:gap-16 2xl:w-[70rem]">
				<Link
					to="/home"
					className="font-poppins hover:underline hover:decoration-black text-[1.3rem] text-white"
				>
					Home
				</Link>
				<Link
					to="/about"
					className="font-poppins hover:underline hover:decoration-black text-[1.3rem] text-white"
				>
					About
				</Link>
				<Link
					to="/services"
					className="font-poppins hover:underline hover:decoration-black text-[1.3rem] text-white"
				>
					Services
				</Link>
				<Link
					to="/contact"
					className="font-poppins hover:underline hover:decoration-black text-[1.3rem] text-white"
				>
					Contact
				</Link>
			</div>
		</header>
	);
}
