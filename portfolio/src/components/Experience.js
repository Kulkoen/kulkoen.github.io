import React from "react";

const Details = ({ position, company, time, place, companyLink }) => {
	return (
		<li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
			<div>
				<h3 className="capitalize font-bold text-2xl">
					{position} &nbsp;
					<a
						href={companyLink}
						target="_blank"
						className="text-primary capitalize">
						@{company}
					</a>
				</h3>
				<span className="capitalize font-medium text-dark/75">
					{time} | {place}
				</span>
			</div>
		</li>
	);
};

const Experience = () => {
	return (
		<div className="my-64">
			<h2 className="font-bold text-8xl mb-32 w-full text-center">
				Experience
			</h2>
			<div className="w-full mx-auto relative">
				<div className="absolute left-16 top-0 w-[4px] h-full bg-dark origin-top" />
				<ul>
					<Details
						position="Student Assistant"
						company="Georgia Institute of Technology"
						time="September 2021 - Present"
						place="Atlanta, GA"
						companyLink="https://studentengagement.gatech.edu/"
					/>
					<Details
						position="Student Admin Assistant"
						company="Georgia State University"
						time="September 2020 - December 2020"
						place="Atlanta, GA"
						companyLink=""
					/>
					<Details
						position="Host"
						company="Longhorn Steakhouse"
						time="September 2019 - May 2020"
						place="Lawrenceville, GA"
						companyLink=""
					/>
					<Details
						position="Cashier"
						company="Teriyaki Box"
						time="March 2017 - December 2017"
						place="Lawrenceville, GA"
						companyLink=""
					/>
				</ul>
			</div>
		</div>
	);
};

export default Experience;
