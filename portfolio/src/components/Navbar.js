"use client";

import React from "react";
import Link from "next/link";
import HomeButton from "./HomeButton";
import { usePathname } from "next/navigation";
import { ExternalLink } from "./Icons";

const CustomNavLinks = ({ href, title, className = "" }) => {
	const path = usePathname();

	return (
		<Link href={href} className={`${className} relative group`}>
			{title}

			<span
				className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0 group-hover:w-full transition-[width] ease duration-300 ${
					path === href ? "w-full" : "w-0"
				}`}>
				&nbsp;
			</span>
		</Link>
	);
};

const Navbar = () => {
	return (
		<div className="w-full px-8 py-2 font-medium flex items-center justify-between">
			<HomeButton />
			<nav>
				<CustomNavLinks href="/" title="Home" className="mr-4" />
				<CustomNavLinks href="/about" title="About" className="mx-4" />
				<CustomNavLinks href="/projects" title="Projects" className="mx-4" />
				{/* <CustomNavLinks
					href="/experience"
					title="Experience"
					className="mx-4"
				/> */}
				<Link
					href="/KeefeOentoroResume.pdf"
					target={"__blank"}
					className=" p-2 ml-2 flex-items bg-dark text-light rounded-lg hover:bg-light hover:text-dark
                     border-2 border-solid border-transparent hover:border-dark">
					Resume
				</Link>
			</nav>
		</div>
	);
};

export default Navbar;
