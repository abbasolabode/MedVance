import HeroSection from "../ui/HeroSection";
import Navbar from "../ui/Navbar";
import MainSection from "../ui/MainSection";
import Footer from "../ui/Footer";

export default function Home() {
	return (
		<div className="mx-auto w-[24.575rem] flex flex-col items-center overflow-hidden 2xl:w-[96rem]">
			<div>
				<Navbar />
			</div>
			<HeroSection />
			<MainSection />
			<Footer />
		</div>
	);
}
