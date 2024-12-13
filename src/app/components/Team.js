"use client";

import pfp from "@/app/assets/Delta.jpg";
import ImageTeam from "./ImageTeam";
import { motion } from "framer-motion";

export default function Team() {
	return (
		<div className="flex flex-col justify-around items-center min-h-screen p-10">
			<motion.h2
				className="w-full text-center text-6xl mb-16"
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 1.5 }}
			>
				Meet Our Team
			</motion.h2>
			<motion.div
				className="w-full max-w-6xl mx-auto"
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 1.5 }}
			>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
					<ImageTeam name="Ahmed Osama" role="Founder" src={pfp} dur="2.5"/>
					<ImageTeam name="Hassan Walid" role="CO-Founder" src={pfp} dur="3"/>
					<ImageTeam name="Mazen Ahmed" role="Head Chief" src={pfp} dur="4.5"/>
					<ImageTeam name="Aml Mahmoud" role="CO-Founder" src={pfp} dur="2"/>
					<ImageTeam name="Ahmed Tarek" role="Founder" src={pfp} dur="4"/>
					<ImageTeam name="Ahmed Tarek" role="Founder" src={pfp} dur="4"/>
				</div>
			</motion.div>
		</div>
	);
}
