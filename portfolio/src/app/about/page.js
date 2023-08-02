import AnimatedText from "@/components/AnimatedText";
import React from "react";
import Image from "next/image";
import profilePic from "../../../public/KasualKeefe.jpg";

const About = () => {
	return (
		<main className="flex w-full flex-col items-center pb-0">
			<div className="p-6 flex w-full flex-col items-center justify-center">
				<AnimatedText text="A Little Bit About Me!" className="" />
				<div className="grid w-full grid-cols-8 gap-16 m-6">
					<div className="col-span-3 relative h-max rounded-2xl border-2 border-dark/75 p-2 ">
						{/* <div className="absolute top-0 -right-3 bg-dark w-[102%] h-[103%]" /> */}
						<Image
							src={profilePic}
							alt="Keefe Oentoro"
							className="w-full h-auto rounded-2xl border-2 border-solid"
						/>
					</div>

					<div className="col-span-5 border-2 border-dark/75 rounded-2xl p-2">
						<h2 className="mb-3 text-xl font-bold uppercase text-primary">
							Who am I?
						</h2>
						<p className="my-3 text-lg font-medium text-dark">
							My name is Keefe Oentoro and I am currently 21 years old. I am a
							fourth-year Computer Science student at Georgia Tech currently
							pursuing a Bachelor's Degree. My love of technology is a major
							reason why I want to pursue a career in the tech sector. With my
							passion for technology and innovation, I hope to one day see both
							my personal and professional projects succeed!
						</p>
						<h2 className="mb-3 text-xl font-bold uppercase text-primary">
							Likes
						</h2>
						<p className="my-3 text-lg font-medium text-dark">
							I like a lot of things including video games, movies, art,
							dancing, music, and photography! My favorite games right now
							include the Borderlands series and Valorant. I like all types of
							music but I would say I tend to be drawn towards R&B and mellow
							music.
						</p>
						<h2 className="mb-3 text-xl font-bold uppercase text-primary">
							Hobbies
						</h2>
						<p className="my-3 text-lg font-medium text-dark">
							Breakdancing | Photography | Video Editing | Video Games
						</p>
						{/* <h2 className="mb-3 text-xl font-bold uppercase text-dark/75">
							Currenly Listening to...
						</h2>
						<p className="my-3 text-lg font-medium">
							[Spotify API to show last listened to]
						</p> */}
					</div>
				</div>
			</div>
		</main>
	);
};

export default About;
