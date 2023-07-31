"use client";
import Image from "next/image";
import profilePic from "../../public/headshot.jpg";
import HomeLayout from "@/components/HomeLayout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { EmailIcon, GithubIcon, LinkedInIcon } from "@/components/Icons";
import { MotionLink } from "@/components/HomeButton";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<main className="flex items-center text-dark w-full min-h-screen">
			<div className="flex items-center justify-around w-full h-screen ">
				<div className="w-1/2 flex justify-center">
					<Image
						src={profilePic}
						width={650}
						height={650}
						alt="Picture of Keefe"
						className="rounded-full"
					/>
				</div>
				<div className="w-1/2 flex flex-col items-center self-center">
					<AnimatedText text="Keefe Oentoro" className="" />
					<p className="my-4 text-base font-medium ">
						As a an aspiring software engineer and developer, I am dedicated to
						turning ideas into the tangible. Here you can see some of my
						projects, my skills, and learn a little bit about me.
					</p>
					<nav className=" w-full px-8 py-2 font-medium flex items-center justify-center">
						<MotionLink
							href="https://github.com/Kulkoen?tab=repositories"
							title="Github"
							target={"__blank"}
							whileHover={{ scale: 1.1 }}>
							<GithubIcon />
						</MotionLink>
						<MotionLink
							href="https://www.linkedin.com/in/keefeoentoro/"
							title="LinkedIn"
							target={"__blank"}
							whileHover={{ scale: 1.1 }}>
							<LinkedInIcon />
						</MotionLink>
						<motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer">
							<a href="mailto:keefenoentoro@gmail.com">
								<EmailIcon />
							</a>
						</motion.div>
					</nav>
				</div>
			</div>
		</main>
	);
}
