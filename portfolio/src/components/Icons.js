import * as React from "react";

export const GithubIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={60}
		height={60}
		viewBox="0 0 30 30"
		className={` w-full h-auto ${className}`}
		{...rest}>
		<path d="M15 3C8.373 3 3 8.373 3 15c0 5.623 3.872 10.328 9.092 11.63a1.751 1.751 0 0 1-.092-.583v-2.051h-1.508c-.821 0-1.551-.353-1.905-1.009-.393-.729-.461-1.844-1.435-2.526-.289-.227-.069-.486.264-.451.615.174 1.125.596 1.605 1.222.478.627.703.769 1.596.769.433 0 1.081-.025 1.691-.121.328-.833.895-1.6 1.588-1.962-3.996-.411-5.903-2.399-5.903-5.098 0-1.162.495-2.286 1.336-3.233-.276-.94-.623-2.857.106-3.587 1.798 0 2.885 1.166 3.146 1.481A8.993 8.993 0 0 1 15.495 9c1.036 0 2.024.174 2.922.483C18.675 9.17 19.763 8 21.565 8c.732.731.381 2.656.102 3.594.836.945 1.328 2.066 1.328 3.226 0 2.697-1.904 4.684-5.894 5.097C18.199 20.49 19 22.1 19 23.313v2.734c0 .104-.023.179-.035.268C23.641 24.676 27 20.236 27 15c0-6.627-5.373-12-12-12z" />
	</svg>
);

export const LinkedInIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={60}
		height={60}
		viewBox="0 0 48 48"
		className={` w-full h-auto ${className}`}
		{...rest}>
		<path
			fill="#0078d4"
			d="M42 37a5 5 0 0 1-5 5H11a5 5 0 0 1-5-5V11a5 5 0 0 1 5-5h26a5 5 0 0 1 5 5v26z"
		/>
		<path
			d="M30 37V26.901c0-1.689-.819-2.698-2.192-2.698-.815 0-1.414.459-1.779 1.364-.017.064-.041.325-.031 1.114L26 37h-7V18h7v1.061C27.022 18.356 28.275 18 29.738 18c4.547 0 7.261 3.093 7.261 8.274L37 37h-7zm-19 0V18h3.457C12.454 18 11 16.528 11 14.499 11 12.472 12.478 11 14.514 11c2.012 0 3.445 1.431 3.486 3.479C18 16.523 16.521 18 14.485 18H18v19h-7z"
			opacity={0.05}
		/>
		<path
			d="M30.5 36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198-1.295 0-1.935.912-2.243 1.677-.082.199-.071.989-.067 1.326L25.5 36.5h-6v-18h6v1.638c.795-.823 2.075-1.638 4.238-1.638 4.233 0 6.761 2.906 6.761 7.774L36.5 36.5h-6zm-19 0v-18h6v18h-6zm2.957-19c-1.713 0-2.957-1.262-2.957-3.001 0-1.738 1.268-2.999 3.014-2.999 1.724 0 2.951 1.229 2.986 2.989 0 1.749-1.268 3.011-3.015 3.011h-.028z"
			opacity={0.07}
		/>
		<path
			fill="#fff"
			d="M12 19h5v17h-5V19zm2.485-2h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99-.144.35-.101 1.318-.101 1.807v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36z"
		/>
	</svg>
);

export const EmailIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={60}
		height={60}
		viewBox="0 0 24 24"
		className={`  w-full h-auto ${className}`}
		{...rest}>
		<path d="M22 5v4l-10 4L2 9V5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1ZM2 11.154V19a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-7.846l-10 4Z" />
	</svg>
);

export const HomeIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={60}
		height={60}
		viewBox="0 0 24 24"
		className={`w-full h-auto ${className}`}
		{...rest}>
		<path d="M12 2a1 1 0 0 0-.71.297l-10.087 8.8A.5.5 0 0 0 1 11.5a.5.5 0 0 0 .5.5H4v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-8h2.5a.5.5 0 0 0 .5-.5.5.5 0 0 0-.203-.402l-10.08-8.795a1 1 0 0 0-.006-.006A1 1 0 0 0 12 2z" />
	</svg>
);

export const ExternalLink = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={60}
		height={60}
		viewBox="0 0 24 24"
		className={`w-full h-auto ${className}`}
		{...rest}>
		<path d="M19 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h7v2H5v14h14v-7h2v7c0 1.1-.9 2-2 2z" />
		<path d="M21 10h-2V5h-5V3h7z" />
		<path d="m8.278 14.308 11.03-11.03 1.414 1.414-11.03 11.03z" />
	</svg>
);

export const Sun = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 0 24 24"
		className={`w-full h-auto ${className}`}
		{...rest}>
		<path fill="rgba(255, 255, 255, 0)" d="M0 0h24v24H0z" />
		<g>
			<animateTransform
				fill="none"
				stroke="currentColor"
				strokeDasharray={2}
				strokeDashoffset={2}
				strokeLinecap="round"
				strokeWidth={2}
				attributeName="transform"
				dur="30s"
				repeatCount="indefinite"
				type="rotate"
				values="0 12 12;360 12 12"
			/>
		</g>
		<g fill="currentColor">
			<path d="m15.22 6.03 2.53-1.94L14.56 4 13.5 1l-1.06 3-3.19.09 2.53 1.94-.91 3.06 2.63-1.81 2.63 1.81-.91-3.06Z">
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					dur="0.4s"
					values="1;0"
				/>
			</path>
			<path d="M19.61 12.25 21.25 11l-2.06-.05L18.5 9l-.69 1.95-2.06.05 1.64 1.25-.59 1.98 1.7-1.17 1.7 1.17-.59-1.98Z">
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="0.2s"
					dur="0.4s"
					values="1;0"
				/>
			</path>
		</g>
		<g
			fill="currentColor"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}>
			<path d="M7 6a10.994 10.994 0 0 0 12.56 10.89C17.95 19.36 15.17 21 12 21a9 9 0 0 1-9-9c0-3.17 1.64-5.95 4.11-7.56C7.04 4.95 7 5.47 7 6Z" />
			<set attributeName="opacity" begin="0.6s" to={0} />
		</g>
		<mask id="a">
			<circle cx={12} cy={12} r={12} fill="#fff" />
			<circle cx={18} cy={6} r={12} fill="#fff">
				<animate
					fill="freeze"
					attributeName="cx"
					begin="0.6s"
					dur="0.4s"
					values="18;22"
				/>
				<animate
					fill="freeze"
					attributeName="cy"
					begin="0.6s"
					dur="0.4s"
					values="6;2"
				/>
				<animate
					fill="freeze"
					attributeName="r"
					begin="0.6s"
					dur="0.4s"
					values="12;3"
				/>
			</circle>
			<circle cx={18} cy={6} r={10}>
				<animate
					fill="freeze"
					attributeName="cx"
					begin="0.6s"
					dur="0.4s"
					values="18;22"
				/>
				<animate
					fill="freeze"
					attributeName="cy"
					begin="0.6s"
					dur="0.4s"
					values="6;2"
				/>
				<animate
					fill="freeze"
					attributeName="r"
					begin="0.6s"
					dur="0.4s"
					values="10;1"
				/>
			</circle>
		</mask>
	</svg>
);

export const Moon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 0 24 24"
		className={`w-full h-auto ${className}`}
		{...rest}>
		<g
			fill="none"
			stroke="currentColor"
			strokeDasharray={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}>
			<path d="M12 21v1m9-10h1M12 3V2M3 12H2">
				<animate
					fill="freeze"
					attributeName="stroke-dashoffset"
					dur="0.2s"
					values="4;2"
				/>
			</path>
			<path d="m18.5 18.5.5.5m-.5-13.5L19 5m-13.5.5L5 5m.5 13.5L5 19">
				<animate
					fill="freeze"
					attributeName="stroke-dashoffset"
					begin="0.2s"
					dur="0.2s"
					values="4;2"
				/>
			</path>
		</g>
		<g fill="none" fillOpacity={0}>
			<path d="m15.22 6.03 2.53-1.94L14.56 4 13.5 1l-1.06 3-3.19.09 2.53 1.94-.91 3.06 2.63-1.81 2.63 1.81z">
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
					dur="0.4s"
					values="0;1"
				/>
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
					dur="0.4s"
					values="1;0"
				/>
			</path>
			<path d="M13.61 5.25 15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25-.59 1.98 1.7-1.17 1.7 1.17z">
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
					dur="0.4s"
					values="0;1"
				/>
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
					dur="0.4s"
					values="1;0"
				/>
			</path>
			<path d="M19.61 12.25 21.25 11l-2.06-.05L18.5 9l-.69 1.95-2.06.05 1.64 1.25-.59 1.98 1.7-1.17 1.7 1.17z">
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
					dur="0.4s"
					values="0;1"
				/>
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
					dur="0.4s"
					values="1;0"
				/>
			</path>
			<path d="m20.828 9.731 1.876-1.439-2.366-.067L19.552 6l-.786 2.225-2.366.067 1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
					dur="0.4s"
					values="0;1"
				/>
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
					dur="0.4s"
					values="1;0"
				/>
			</path>
		</g>
		<mask id="a">
			<circle cx={12} cy={12} r={12} fill="#fff" />
			<circle cx={22} cy={2} r={3} fill="#fff">
				<animate
					fill="freeze"
					attributeName="cx"
					begin="0.1s"
					dur="0.4s"
					values="22;18"
				/>
				<animate
					fill="freeze"
					attributeName="cy"
					begin="0.1s"
					dur="0.4s"
					values="2;6"
				/>
				<animate
					fill="freeze"
					attributeName="r"
					begin="0.1s"
					dur="0.4s"
					values="3;12"
				/>
			</circle>
			<circle cx={22} cy={2} r={1}>
				<animate
					fill="freeze"
					attributeName="cx"
					begin="0.1s"
					dur="0.4s"
					values="22;18"
				/>
				<animate
					fill="freeze"
					attributeName="cy"
					begin="0.1s"
					dur="0.4s"
					values="2;6"
				/>
				<animate
					fill="freeze"
					attributeName="r"
					begin="0.1s"
					dur="0.4s"
					values="1;10"
				/>
			</circle>
		</mask>
		<circle cx={12} cy={12} r={6} fill="currentColor" mask="url(#a)">
			<set attributeName="opacity" begin="0.5s" to={0} />
			<animate
				fill="freeze"
				attributeName="r"
				begin="0.1s"
				dur="0.4s"
				values="6;10"
			/>
		</circle>
	</svg>
);
