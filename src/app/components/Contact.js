"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import svg from '@/app/assets/phone.svg';

const variants = {
	initial: {
		y: 500,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			staggerChildren: 0.2,
		},
	},
};

export default function Contact() {
	const form = useRef();
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_lyzc8be", "template_dqn15ii", form.current, {
				publicKey: "uBUr4s2U-8NmVhhN6",
			})
			.then(
				() => {
					setSuccess(true)
				},
				() => {
					setError(true)
				},
			);
	};

	return (
		<motion.div
			variants={variants}
			initial="initial"
			whileInView="animate"
			className="min-h-dvh max-w-[1366px] m-auto flex flex-col items-center justify-between gap-14 md:flex-row p-5"
		>
			<motion.div variants={variants} className="flex-1 flex flex-col gap-10 md:text-start text-center">
				<motion.h1 variants={variants} className="md:text-[100px] text-8xl">
					Contact Our Team
				</motion.h1>
				<motion.div variants={variants}>
					<h2 className="text-3xl font-semibold">Mail</h2>
					<span className="font-light leading-10">eng.fares0ahmed@gmail.com</span>
				</motion.div>
				<motion.div variants={variants}>
					<h2 className="text-3xl font-semibold">Address</h2>
					<span className="font-light leading-10">Adnan El Malky, Minya</span>
				</motion.div>
				<motion.div variants={variants}>
					<h2 className="text-3xl font-semibold">Phone</h2>
					<span className="font-light leading-10">+201064422142</span>
				</motion.div>
			</motion.div>
			<div className="flex-1 relative">
				<motion.div
					initial={{ opacity: 1 }}
					whileInView={{ opacity: 0 }}
					transition={{ delay: 3, duration: 1 }}
					className="absolute m-auto stroke-slate-400"
				>
					<Image src={svg} alt="svg"/>
				</motion.div>
				<motion.form
					className="flex flex-col gap-5 relative mb-24 md:mb-0"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 4, duration: 1 }}
					ref={form}
                    onSubmit={sendEmail}
				>
					<input
						className="bg-transparent p-5 border border-white text-white rounded-md"
						type="text"
						required
						placeholder="Name"
                        name="name"
					/>
					<input
						className="bg-transparent p-5 border border-white text-white rounded-md"
						type="email"
						required
						placeholder="Email"
                        name="email"
					/>
					<textarea
						className="bg-transparent p-5 border border-white text-white rounded-md"
						rows={8}
						placeholder="Message"
                        name="message"
					/>
					<button className="p-5 font-medium rounded-3xl text-xl bg-white text-stone-900 cursor-pointer mb-10 border-2 hover:bg-stone-800 hover:text-stone-200 transition-all duration-150">
						Submit
					</button>
                    {success && 'Sent Message Successfully'}
                    {error && 'Error Sending Message'}
				</motion.form>
			</div>
		</motion.div>
	);
}
