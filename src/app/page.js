// app/page.js

import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Services from "./components/Services";

export default function Home() {
	return (
		<div className="overflow-x-hidden overflow-y-scroll text-stone-300 snap-y snap-mandatory scroll-smooth h-dvh">
			<div className="fixed inset-0 -z-10">
				<div className="relative h-full w-full bg-black">
					<div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:19px_29px]"></div>
					<div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
				</div>
			</div>
			<section
				className="container mx-auto px-8 snap-center min-h-dvh"
				id="home"
			>
				<Navbar />
				<Hero />
			</section>
			{/* <section className="snap-center min-h-screen" id="about">
				<Team />
			</section> */}
			<section className="snap-center min-h-dvh" id="work">
				<Services />
			</section>
			<section className="snap-center min-h-dvh" id="contact">
				<Contact />
			</section>
		</div>
	);
}
