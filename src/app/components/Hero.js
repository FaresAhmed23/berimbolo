"use client";

import Image from "next/image";
import pic from "@/app/assets/hold.svg";
import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
	hidden: { opacity: 0, x: -100 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.75,
			staggerChildren: 0.5,
		},
	},
};

const childVariants = {
	hidden: { opacity: 0, x: -100 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
	return (
		<div className="pb-4 lg:mb-36">
			<div className="flex flex-wrap lg:flex-row-reverse">
				<div className="w-full lg:w-1/2">
					<div className="flex justify-center lg:p-8">
						<motion.div
							initial={{ x: 100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 1, delay: 1.5 }}
						>
							<Image
								src={pic}
								alt="fares"
								className="border border-stone-900 rounded-3xl"
								priority
							/>
						</motion.div>
					</div>
				</div>
				<div className="w-full lg:w-1/2">
					<motion.div
						className="flex flex-col items-center lg:items-start mt-10"
						animate="visible"
						initial="hidden"
						variants={containerVariants}
					>
						<motion.h2
							variants={childVariants}
							className="pb-2 text-4xl tracking-tighter lg:text-8xl"
						>
							Berimbolo Security
						</motion.h2>
						<motion.span
							variants={childVariants}
							className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
						>
							A company that sells and
installs security systems
						</motion.span>
						<motion.p
							variants={childVariants}
							className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
						>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry&apos;s standard dummy text
							ever since the 1500s.
						</motion.p>

						<motion.button
							variants={childVariants}
							className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10 border-2 hover:bg-stone-800 hover:text-stone-200 transition-all duration-150"
						>
							<Link href="#contact">Contact Us</Link>
						</motion.button>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
