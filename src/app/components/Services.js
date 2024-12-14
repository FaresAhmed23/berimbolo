"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import pic from "@/app/assets/hold.svg";

export default function Services() {
	const [windowWidth, setWindowWidth] = useState(0);
	const [hovered, setHovered] = useState(0);
	const [isMobile, setIsMobile] = useState(false);
	const prefersReducedMotion = useReducedMotion();

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			setWindowWidth(width);
			setIsMobile(width < 768);
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const serviceItems = [
		{ title: "Safe Guarding", id: 1 },
		{ title: "Network Protection", id: 2 },
		{ title: "Data Security", id: 3 },
		{ title: "Cyber Defense", id: 4 },
	];

	const getAnimationProps = (delay = 0) => {
		if (isMobile || prefersReducedMotion) {
			return {
				initial: { opacity: 0 },
				whileInView: { opacity: 1 },
				transition: { duration: 0.3, delay },
			};
		}
		return {
			initial: { opacity: 0, y: 50 },
			whileInView: { opacity: 1, y: 0 },
			transition: { duration: 0.5, delay },
		};
	};

	return (
		<motion.div className="min-h-dvh flex flex-col justify-between">
			<motion.div
				className="md:self-end self-center flex flex-col md:flex-row items-center gap-5 my-16"
				{...getAnimationProps()}
			>
				<p className="text-[20px] font-extralight md:text-right text-center text-stone-400">
					We focus on helping your Network
					<br /> to be safe
				</p>
				<hr className="w-[300px] border-t-[0.5px] border-stone-500 opacity-75" />
			</motion.div>
			<motion.div
				className="flex flex-col items-center gap-4"
				{...getAnimationProps(0.2)}
			>
				<div className="flex gap-5 flex-col md:flex-row md:gap-14 items-center">
					<Image
						src={pic}
						alt="svg"
						className="w-72 h-24 rounded-[50px] object-cover"
						priority
					/>
					<h1 className="font-thin md:text-8xl text-4xl">
						<motion.b whileHover={{ color: "rgb(41 37 36)" }}>Unique</motion.b>{" "}
						Ideas
					</h1>
				</div>
				<div className="flex gap-5 flex-col md:flex-row md:gap-14 items-center">
					<h1 className="font-thin md:text-8xl text-4xl">
						<motion.b whileHover={{ color: "rgb(41 37 36)" }}>
							For Your
						</motion.b>{" "}
						Network.
					</h1>
					<button className="md:p-8 p-4 rounded-[50px] bg-white md:text-2xl text-lg text-stone-800 border-2 hover:bg-stone-800 hover:text-stone-200 transition-all duration-150">
						What We Do?
					</button>
				</div>
			</motion.div>
			<motion.div
				className="flex flex-col max-w-[1366px] md:m-auto md:flex-row mx-10 gap-10"
				{...getAnimationProps(0.4)}
			>
				{serviceItems.map((item, index) => (
					<motion.div
						key={item.id}
						onHoverStart={() => setHovered(item.id)}
						className={`p-12 text-center flex flex-col justify-between md:border-[0.5px] border-stone-500 opacity-75 group relative ${item.id === 4 ? 'mb-48' : ''} md:mb-0`}
						{...getAnimationProps(0.6 + index * 0.1)}
					>
						<h2 className="text-2xl font-medium">{item.title}</h2>
						<p className="my-5">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry&apos;s standard dummy text
							ever since the 1500s.
						</p>
						<button className="rounded-[50px] p-2 bg-white text-stone-800 border-2 hover:bg-stone-800 hover:text-stone-200 transition-all duration-150">
							Go
						</button>
						{hovered === item.id && (
						<motion.span
							layoutId="nav-item"
							className="absolute bg-gray-100 bg-opacity-10 inset-0 -z-10"
						></motion.span>
					)}
					</motion.div>
				))}
				
			</motion.div>
		</motion.div>
	);
}
