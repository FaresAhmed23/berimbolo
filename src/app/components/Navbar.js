
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/Delta.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Navbar() {
	return (
		<nav className="flex items-center justify-center lg:justify-between py-6">
			<div className="flex flex-shrink-0 items-center">
				<Link href={"/"} aria-label="Home" className="flex justify-center items-center gap-2">
					<span className="tracking-tighter text-3xl">Berimbolo Security</span>
				</Link>
			</div>
			<div className="m-8 items-center justify-center gap-4 text-2xl md:flex hidden">
				<a href="https://www.facebook.com/deltacyberteam" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#0666FF] hover:scale-125 transition-all duration-100">
					<FaFacebook />
				</a>
				<a href="https://www.instagram.com/delta.cyberteam/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#833AB4] hover:scale-125 transition-all duration-100">
					<FaInstagram />
				</a>
			</div>
		</nav>
	);
}