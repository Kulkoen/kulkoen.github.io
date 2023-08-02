import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HomeIcon } from "./Icons";

export const MotionLink = motion(Link);

const HomeButton = () => {
	return (
		<div className="flex items-center justify-center mt-2">
			<MotionLink
				href="/"
				className="w-12 h-12 text-dark flex items-center justify-center rounded-full text-2xl font-bold"
				whileHover={{ scale: 1.1 }}>
				<HomeIcon />
			</MotionLink>
		</div>
	);
};

export default HomeButton;
