import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import project1 from "../../../public/ShingekiNoCowjin.png";
import project2 from "../../../public/PersonalWebsite.png";

const ProjectItem = ({ type, title, img, link, summary, github }) => {
	return (
		<article className="w-full flex flex-col items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-6 relative">
			<Link href={link} target="_blank">
				<Image src={img} alt={title} className="w-full h-auto" />
			</Link>

			<div className="w-full flex flex-col items-start justify-between mt-4">
				<span className="text-primary font-medium text-xl">{type}</span>
				<Link
					href={link}
					target="_blank"
					className="hover:underline underline-offset-2">
					<h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
				</Link>

				<div className="mt-2 flex items-center w-full justify-between">
					<Link
						href={link}
						target="_blank"
						className="ml-4 rounded-lg font-semibold">
						Visit Link
					</Link>
					<Link href={github} target="_blank" className="w-8">
						<GithubIcon />
					</Link>
				</div>
			</div>
		</article>
	);
};

const Projects = () => {
	return (
		<main className="">
			<AnimatedText text="My Work!" />

			<div className="grid grid-cols-12 gap-24 pt-4 text-dark">
				<div className="col-span-6">
					<ProjectItem
						title="Shingeki No Cowjin"
						link="/"
						type="School Project"
						img={project1}
						github="https://github.com/Kulkoen/ShingekiNoCowjin"
					/>
				</div>
				<div className="col-span-6">
					<ProjectItem
						title="Personal Website"
						link="/"
						type="Personal Project"
						img={project2}
						github="https://github.com/Kulkoen/kulkoen.github.io"
					/>
				</div>

				{/* <div className="col-span-6">
					<article className="w-full flex flex-col items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-6 relative">
						In Progress
					</article>
				</div> */}
			</div>
		</main>
	);
};

export default Projects;
