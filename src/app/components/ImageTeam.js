import Image from "next/image";
import { motion } from "framer-motion";

const pVariants = (duration) => ({
	initial: { y: -10 },
	animate: {
		y: [10, -10],
		transition: {
			duration: duration,
			ease: [0.76, 0, 0.24, 1],
			repeat: Infinity,
			repeatType: "reverse",
		},
	},
});

export default function ImageTeam({ name, role, src, dur }) {
	return (
		<motion.div 
            className="text-stone-300 rounded-lg py-6 px-4 w-full max-w-xs"
            variants={pVariants(dur)}
            initial="initial"
            animate="animate"
        >
			<div className="p-4">
				<Image
					className="rounded-full mx-auto w-40 h-40 object-cover"
					src={src}
					alt={name}
					width={160}
					height={160}
				/>
			</div>
			<div className="text-center mt-4">
				<h3 className="text-xl font-semibold mb-2">{name}</h3>
				<p className="text-stone-400 text-sm font-medium">{role}</p>
			</div>
		</motion.div>
	);
}
