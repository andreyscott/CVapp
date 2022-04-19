import React from "react";

export const EmailIcon = ({
	fill = "currentColor",
	className,
	width = 30,
	height = 30,
}) => {
	return (
		<svg
			role="img"
			aria-label=""
			viewBox="0 0 1024 1024"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			fill={fill}
			width={width}
			height={height}
		>
			<path d="M810.666667 170.666667H213.333333a128 128 0 0 0-128 128v426.666666a128 128 0 0 0 128 128h597.333334a128 128 0 0 0 128-128V298.666667a128 128 0 0 0-128-128z m-28.586667 85.333333L512 458.666667 241.92 256zM810.666667 768H213.333333a42.666667 42.666667 0 0 1-42.666666-42.666667V309.333333l315.733333 236.8a42.666667 42.666667 0 0 0 25.6 8.533334 42.666667 42.666667 0 0 0 25.6-8.533334L853.333333 309.333333V725.333333a42.666667 42.666667 0 0 1-42.666666 42.666667z" />
		</svg>
	);
};

export const GithubIcon = ({
	fill = "currentColor",
	className,
	width = 30,
	height = 30,
}) => {
	return (
		<svg
			role="img"
			aria-label=""
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 50 50"
			fill={fill}
			className={className}
			width={width}
			height={height}
		>
			<path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z" />
		</svg>
	);
};

export const TwitterIcon = ({
	fill = "currentColor",
	className,
	width = 30,
	height = 30,
}) => {
	return (
		<>
			<svg
				role="img"
				aria-label=""
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 48 48"
				fill={fill}
				className={className}
				width={width}
				height={height}
			>
				<path d="M44.719,10.305C44.424,10,43.97,9.913,43.583,10.091l-0.164,0.075c-0.139,0.064-0.278,0.128-0.418,0.191	c0.407-0.649,0.73-1.343,0.953-2.061c0.124-0.396-0.011-0.829-0.339-1.085c-0.328-0.256-0.78-0.283-1.135-0.066	c-1.141,0.693-2.237,1.192-3.37,1.54C37.4,7.026,35.071,6,32.5,6c-5.247,0-9.5,4.253-9.5,9.5c0,0.005,0,0.203,0,0.5l-0.999-0.08	c-9.723-1.15-12.491-7.69-12.606-7.972c-0.186-0.47-0.596-0.813-1.091-0.916C7.81,6.927,7.297,7.082,6.939,7.439	C6.741,7.638,5,9.48,5,13c0,2.508,1.118,4.542,2.565,6.124c-0.674-0.411-1.067-0.744-1.077-0.753	c-0.461-0.402-1.121-0.486-1.669-0.208c-0.546,0.279-0.868,0.862-0.813,1.473c0.019,0.211,0.445,4.213,5.068,7.235l-0.843,0.153	c-0.511,0.093-0.938,0.444-1.128,0.928C6.914,28.437,6.988,28.984,7.3,29.4c0.105,0.141,2.058,2.68,6.299,4.14	C11.334,34.295,8.222,35,4.5,35c-0.588,0-1.123,0.344-1.366,0.88c-0.244,0.536-0.151,1.165,0.237,1.607	C3.532,37.672,7.435,42,17.5,42C34.213,42,42,26.485,42,16v-0.5c0-0.148-0.016-0.293-0.022-0.439	c2.092-2.022,2.879-3.539,2.917-3.614C45.084,11.067,45.014,10.609,44.719,10.305z" />
			</svg>
		</>
	);
};

export const InstagramIcon = ({
	fill = "currentColor",
	className,
	width = 30,
	height = 30,
	
}) => {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill={fill}
				viewBox="0 0 24 24"
				className={className}
				width={width}
				height={height}
			>
				<path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" />
			</svg>
		</>
	);
};

export const LinkedinIcon = ({
	fill = "currentColor",
	className,
	width = 30,
	height = 30,
}) => {
	return (
		<svg
			role="img"
			aria-label=""
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 26 26"
			fill={fill}
			className={className}
			width={width}
			height={height}
		>
			<path d="M 21.125 0 L 4.875 0 C 2.183594 0 0 2.183594 0 4.875 L 0 21.125 C 0 23.816406 2.183594 26 4.875 26 L 21.125 26 C 23.816406 26 26 23.816406 26 21.125 L 26 4.875 C 26 2.183594 23.816406 0 21.125 0 Z M 8.039063 22.070313 L 4 22.070313 L 3.976563 9.976563 L 8.015625 9.976563 Z M 5.917969 8.394531 L 5.894531 8.394531 C 4.574219 8.394531 3.722656 7.484375 3.722656 6.351563 C 3.722656 5.191406 4.601563 4.3125 5.945313 4.3125 C 7.289063 4.3125 8.113281 5.191406 8.140625 6.351563 C 8.140625 7.484375 7.285156 8.394531 5.917969 8.394531 Z M 22.042969 22.070313 L 17.96875 22.070313 L 17.96875 15.5 C 17.96875 13.910156 17.546875 12.828125 16.125 12.828125 C 15.039063 12.828125 14.453125 13.558594 14.171875 14.265625 C 14.066406 14.519531 14.039063 14.867188 14.039063 15.222656 L 14.039063 22.070313 L 9.945313 22.070313 L 9.921875 9.976563 L 14.015625 9.976563 L 14.039063 11.683594 C 14.5625 10.875 15.433594 9.730469 17.519531 9.730469 C 20.105469 9.730469 22.039063 11.417969 22.039063 15.046875 L 22.039063 22.070313 Z" />
		</svg>
	);
};

export const MenuIcon = ({
	fill = "currentColor",
	stroke = "currentColor",
	className,
	width = 30,
	height = 30,
}) => {
	return (
		<svg
			role="img"
			aria-label=""
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill={fill}
			className={className}
			width={width}
			height={height}
		>
			<path
				d="M4 6H20M4 12H12M4 18H20"
				stroke={stroke}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
		</svg>
	);
};

export const HomeIcon = ({
	fill = "currentColor",
	className,
	width = 30,
	height = 30,
}) => {
	return (
		<svg
			role="img"
			aria-label=""
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1024 1024"
			className={className}
			width={width}
			height={height}
		>
			<path
				d="M96 480c-9.6 0-19.2-3.2-25.6-12.8-12.8-12.8-9.6-35.2 3.2-44.8l377.6-310.4c35.2-25.6 86.4-25.6 118.4 0l377.6 307.2c12.8 9.6 16 32 3.2 44.8-12.8 12.8-32 16-44.8 3.2L531.2 166.4c-9.6-6.4-28.8-6.4-38.4 0L115.2 473.6c-6.4 6.4-12.8 6.4-19.2 6.4zM816 928H608c-19.2 0-32-12.8-32-32v-150.4c0-22.4-38.4-44.8-67.2-44.8-28.8 0-64 19.2-64 44.8V896c0 19.2-12.8 32-32 32H211.2C163.2 928 128 892.8 128 848V544c0-19.2 12.8-32 32-32s32 12.8 32 32v304c0 9.6 6.4 16 19.2 16H384v-118.4c0-64 67.2-108.8 128-108.8s131.2 44.8 131.2 108.8V864h176c9.6 0 16 0 16-19.2V544c0-19.2 12.8-32 32-32s32 12.8 32 32v304C896 896 864 928 816 928z"
				fill={fill}
			/>
		</svg>
	);
};

export const CloseIcon = ({
	stroke = "currentColor",
	className,
	width = 30,
	height = 30,
}) => {
	return (
		<svg
			role="img"
			aria-label=""
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			width={width}
			stroke={stroke}
			height={height}
			className={className}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M6 18L18 6M6 6l12 12"
			/>
		</svg>
	);
};

export const CloseCircleIcon = ({
	fill = "currentColor",
	className,
	width = 30,
	height = 30,
}) => {
	return (
		<svg
			role="img"
			aria-label=""
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1024 1024"
			className={className}
			width={width}
			fill={fill}
			height={height}
		>
			<path d="M512 960C264.97 960 64 759.03 64 512S264.97 64 512 64c247.04 0 448 200.97 448 448S759.04 960 512 960z m0-861.54C283.98 98.46 98.46 283.98 98.46 512S283.98 925.54 512 925.54 925.54 740.02 925.54 512 740.02 98.46 512 98.46z" />
			<path d="M353.61 687.62c-4.41 0-8.82-1.68-12.18-5.05-6.73-6.73-6.73-17.63 0-24.37l316.78-316.78c6.73-6.73 17.63-6.73 24.37 0s6.73 17.63 0 24.37L365.79 682.57a17.14 17.14 0 0 1-12.18 5.05z" />
			<path d="M670.39 687.62c-4.41 0-8.82-1.68-12.18-5.05L341.43 365.79c-6.73-6.73-6.73-17.63 0-24.37s17.63-6.73 24.37 0L682.58 658.2c6.73 6.73 6.73 17.63 0 24.37a17.18 17.18 0 0 1-12.19 5.05z" />
		</svg>
	);
};

export const ResumeIcon = ({
	fill = "currentColor",
	className,
	width = 30,
	height = 30,
}) => {
	return (
		<svg
			role="img"
			aria-label=""
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1024 1024"
			className={className}
			width={width}
			fill={fill}
			height={height}
		>
			<path d="M334.336 616.3456c0 11.5712 9.5232 21.0944 21.0944 21.0944h315.4944c11.5712 0 21.0944-9.5232 21.0944-21.0944s-9.5232-21.0944-21.0944-21.0944H355.4304c-11.6736 0-21.0944 9.5232-21.0944 21.0944zM670.9248 702.0544H355.4304c-11.5712 0-21.0944 9.5232-21.0944 21.0944s9.5232 21.0944 21.0944 21.0944h315.4944c11.5712 0 21.0944-9.5232 21.0944-21.0944s-9.5232-21.0944-21.0944-21.0944z" />
			<path d="M586.9568 165.888H272.4864c-23.2448 0-42.1888 18.944-42.1888 42.1888v607.8464c0 23.2448 18.944 42.1888 42.1888 42.1888H751.616c23.2448 0 42.1888-18.944 42.1888-42.1888V372.736l-206.848-206.848z m27.4432 87.1424l97.1776 97.1776h-89.9072c-3.8912 0-7.2704-3.3792-7.2704-7.2704v-89.9072z m137.1136 562.7904s0 0.1024 0 0l-479.0272 0.1024s-0.1024 0-0.1024-0.1024V208.1792s0-0.1024 0.1024-0.1024h297.984l1.6384 1.6384v133.12c0 27.2384 22.3232 49.4592 49.4592 49.4592h129.9456v423.5264z" />
			<path d="M428.8512 388.7104c37.1712 0 67.2768-30.1056 67.2768-67.2768 0-37.1712-30.1056-67.2768-67.2768-67.2768S361.472 284.16 361.472 321.4336c0 37.1712 30.1056 67.2768 67.3792 67.2768z m0-97.6896c16.7936 0 30.4128 13.6192 30.4128 30.4128s-13.6192 30.4128-30.4128 30.4128-30.4128-13.6192-30.4128-30.4128 13.6192-30.4128 30.4128-30.4128zM355.4304 504.7296c11.6736 0 21.0944-9.4208 21.0944-21.0944 0-22.8352 23.9616-42.1888 52.3264-42.1888s52.3264 19.2512 52.3264 42.1888c0 11.6736 9.4208 21.0944 21.0944 21.0944s21.0944-9.4208 21.0944-21.0944c0-46.4896-42.3936-84.3776-94.5152-84.3776s-94.5152 37.888-94.5152 84.3776c0 11.6736 9.4208 21.0944 21.0944 21.0944z" />
		</svg>
	);
};

export const ContactIcon = ({
	fill = "currentColor",
	className,
	width = 30,
	height = 30,
}) => {
	return (
		<svg
			role="img"
			aria-label=""
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1024 1024"
			className={className}
			width={width}
			fill={fill}
			height={height}
		>
			<path
				d="M128.32 266.666667A170.666667 170.666667 0 0 1 298.666667 106.666667h448a170.666667 170.666667 0 0 1 170.666666 170.666666v469.333334a170.666667 170.666667 0 0 1-170.666666 170.666666H298.666667a170.666667 170.666667 0 0 1-170.346667-160H106.666667a32 32 0 0 1 0-64h21.333333v-149.333333H106.666667a32 32 0 0 1 0-64h21.333333v-149.333333H106.666667a32 32 0 0 1 0-64h21.653333z m64.213333 0H213.333333a32 32 0 0 1 0 64H192v149.333333h21.333333a32 32 0 0 1 0 64H192v149.333333h21.333333a32 32 0 0 1 0 64h-20.8A106.666667 106.666667 0 0 0 298.666667 853.333333h448a106.666667 106.666667 0 0 0 106.666666-106.666666V277.333333a106.666667 106.666667 0 0 0-106.666666-106.666666H298.666667a106.666667 106.666667 0 0 0-106.133334 96zM632.533333 516.949333C688.170667 548.970667 725.333333 607.104 725.333333 673.536V695.466667a51.2 51.2 0 0 1-51.2 51.2H392.533333a51.2 51.2 0 0 1-51.2-51.2v-21.952c0-66.410667 37.162667-124.544 92.8-156.586667a149.333333 149.333333 0 1 1 198.442667 0zM533.333333 490.666667a85.333333 85.333333 0 1 0 0-170.666667 85.333333 85.333333 0 0 0 0 170.666667z m-128 192h256v-9.152C661.333333 608.597333 604.714667 554.666667 533.333333 554.666667s-128 53.930667-128 118.848V682.666667z"
				fill={fill}
			/>
		</svg>
	);
};

export const PortfolioIcon = ({
	fill = "currentColor",
	className,
	width = 30,
	height = 30,
}) => {
	return (
		<svg
			role="img"
			aria-label=""
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1186 1024"
			className={className}
			width={width}
			fill={fill}
			height={height}
		>
			<path d="M0 964.122947C0 1024 59.284211 1024 59.284211 1024l1067.115789 0c0 0 59.284211 0 59.284211-59.877053L1185.684211 485.052632l-429.756632 0 0 53.086316 378.88 0 0 435.631158L52.277895 973.770105 52.277895 538.138947l379.203368 0L431.481263 485.052632 0 485.052632 0 964.122947z" />
			<path d="M692.331789 0 493.352421 0C493.352421 0 431.157895 0 431.157895 67.368421L431.157895 161.684211 59.284211 161.684211C59.284211 161.684211 0 161.684211 0 222.908632L0 431.157895l53.894737 0L53.894737 215.578947l1077.894737 0 0 215.578947 53.894737 0L1185.684211 222.908632C1185.684211 161.684211 1126.4 161.684211 1126.4 161.684211L754.526316 161.684211 754.526316 67.368421C754.526316 0 692.331789 0 692.331789 0zM703.541895 161.684211 485.645474 161.684211 485.645474 52.762947l217.950316 0L703.595789 161.684211z" />
			<path d="M539.432421 377.263158C509.413053 377.263158 485.052632 401.138526 485.052632 431.642947l0 106.765474C485.052632 568.481684 508.928 592.842105 539.432421 592.842105l106.765474 0C676.271158 592.842105 700.631579 568.966737 700.631579 538.462316L700.631579 431.642947C700.631579 401.623579 676.756211 377.263158 646.251789 377.263158L539.432421 377.263158zM646.736842 538.947368l-107.789474 0L538.947368 431.157895l107.789474 0L646.736842 538.947368z" />
		</svg>
	);
};

export const AboutIcon = ({
	fill = "currentColor",
	className,
	width = 30,
	height = 30,
}) => {
	return (
		<svg
			role="img"
			aria-label=""
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1186 1024"
			className={className}
			width={width}
			fill={fill}
			height={height}
		>
			<path d="M925.1 338.9c-22.5-53.3-54.8-101.2-95.9-142.3-41.1-41.1-89-73.4-142.3-95.9-55.2-23.4-113.8-35.2-174.2-35.2-60.4 0-119 11.8-174.2 35.2-53.3 22.5-101.2 54.8-142.3 95.9-41.1 41.1-73.4 89-95.9 142.3C76.9 394.1 65 452.8 65 513.2s11.8 119 35.2 174.2c22.5 53.3 54.8 101.2 95.9 142.3s89 73.4 142.3 95.9c55.2 23.4 113.8 35.2 174.2 35.2 60.4 0 119-11.8 174.2-35.2 53.3-22.5 101.2-54.8 142.3-95.9s73.4-89 95.9-142.3c23.4-55.2 35.2-113.8 35.2-174.2s-11.8-119.1-35.1-174.3zM778.3 778.8c-70.9 70.9-165.3 110-265.6 110S318 849.7 247 778.8c-70.9-70.9-110-165.3-110-265.6 0-100.3 39.1-194.7 110-265.6 70.9-70.9 165.3-110 265.6-110s194.7 39.1 265.6 110c70.9 70.9 110 165.3 110 265.6 0.1 100.3-39 194.6-109.9 265.6z" />
			<path d="M512.6 436.5c-19.8 0-36 16.2-36 36V730c0 19.8 16.2 36 36 36s36-16.2 36-36V472.5c0-19.8-16.2-36-36-36z" />
			<path d="M512.6 310.8m-63.5 0a63.5 63.5 0 1 0 127 0 63.5 63.5 0 1 0-127 0Z" />
		</svg>
	);
};

export const LiveIcon = ({
	fill = "currentColor",
	className,
	width = 30,
	height = 30,
}) => {
	return (
		<svg
			role="img"
			aria-label=""
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1024 1024"
			className={className}
			width={width}
			fill={fill}
			height={height}
		>
			<path d="M897.536 264.704H655.36l142.848-145.408c10.752-10.752 10.24-28.16-0.512-38.912-10.752-10.752-28.16-10.24-38.912 0.512L578.56 264.704H448.512L267.776 80.896c-10.752-10.752-28.16-10.752-38.912-0.512-10.752 10.752-10.752 28.16-0.512 38.912l142.848 145.408H129.024c-55.296 0-100.864 45.056-100.864 100.864v481.792c0 55.296 45.056 100.864 100.864 100.864h768.512c55.296 0 100.864-45.056 100.864-100.864V365.568c0-55.808-45.056-100.864-100.864-100.864z m46.08 582.656c0 25.088-20.48 45.568-45.568 45.568H129.024c-25.088 0-45.568-20.48-45.568-45.568V365.568c0-25.088 20.48-45.568 45.568-45.568h768.512c25.088 0 45.568 20.48 45.568 45.568v481.792z" />
			<path d="M653.312 582.656L415.744 445.44c-8.704-5.12-18.944-5.12-27.648 0-8.704 5.12-13.824 13.824-13.824 23.552v274.432c0 9.728 5.12 18.944 13.824 23.552 4.096 2.56 9.216 3.584 13.824 3.584 4.608 0 9.728-1.024 13.824-3.584l237.568-137.216c8.704-5.12 13.824-13.824 13.824-23.552s-5.12-18.944-13.824-23.552zM429.568 696.32v-179.2l155.136 89.6L429.568 696.32z" />
		</svg>
	);
};

export const ZoomIcon = ({
	stroke = "currentColor",
	className,
	width = 30,
	height = 30,
}) => {
	return (
		<svg
			role="img"
			aria-label=""
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			className={className}
			width={width}
			fill="none"
			stroke={stroke}
			height={height}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
			/>
		</svg>
	);
};

export const WebIcon = ({
	fill = "currentColor",
	className,
	width = 30,
	height = 30,
}) => {
	return (
		<svg
			role="img"
			aria-label=""
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1024 1024"
			className={className}
			width={width}
			fill={fill}
			height={height}
		>
			<path d="M201.335495 603.006713c1.973958 0 3.974521-0.193405 5.979178-0.581238 16.999163-3.285836 28.115338-19.723204 24.830525-36.722366-3.382027-17.529235-5.102205-35.599799-5.102205-53.701063 0-90.140996 42.502-170.541141 108.514459-222.223221 5.633301 15.357779 15.283078 31.56695 31.639604 37.693484 2.657526 0.99977 5.142114 2.004657 7.540743 2.969635 12.81077 5.157463 26.059516 10.499122 48.323589 10.499122 0.061398 0 0.122797 0 0.184195 0 3.622504 0.714268 11.555174 8.121981 17.202801 15.7231 2.918469 15.396665 6.367011 36.793998 6.367011 44.895513 0 12.713556 2.325975 26.794249 4.377704 39.222303 0.907673 5.478781 1.795902 10.80509 2.407839 15.683191 1.520633 12.172227 9.453303 21.63167 20.692275 24.682146 2.729158 0.744967 5.336542 1.102101 7.856945 1.102101 17.472953 0 30.66644-17.131169 49.415456-41.48688 3.566222-4.64274 8.335852-10.835789 10.494005-13.243629 1.209548-0.806365 2.734274-1.683339 4.397147-2.693342 12.805654-7.744381 34.242895-20.702508 37.508265-43.527352 1.096984-7.642051 0.887206-19.284205 0.459464-37.660738-0.234337-9.923-0.596588-25.391297-0.163729-33.349549 5.300726-4.427846 16.457834-11.943007 27.100218-18.192338l53.429887-15.028275c54.399981 36.07052 96.261391 90.635253 115.26828 155.963121 4.836145 16.631796 22.223141 26.172079 38.84982 21.345144 16.621563-4.836145 26.177196-22.233374 21.340027-38.854936-42.532699-146.204873-178.687682-248.315482-331.101977-248.315482-190.121082 0-344.794837 154.678872-344.794837 344.799954 0 22.079878 2.101871 44.150546 6.244214 65.598021C173.49031 592.589456 186.617281 603.006713 201.335495 603.006713zM593.370239 242.907309c-1.805112 0.561795-3.545756 1.306762-5.187139 2.240017-45.461401 25.916253-50.782593 39.222303-52.782134 44.222177-3.872191 9.668197-3.954055 23.610744-3.203972 55.491849 0.193405 8.438183 0.479931 20.49887 0.24457 26.426883-2.99931 2.775206-9.606799 6.77531-13.019525 8.836249-3.877307 2.346441-7.254218 4.468778-9.596566 6.223748-3.361561 2.51017-6.453992 5.825682-10.866489 11.285021-0.852414-18.407232-6.984065-49.854455-8.284687-56.373938-0.617054-3.091408-1.795902-6.045693-3.469008-8.723685-4.571109-7.315616-29.125341-43.808762-63.537082-43.808762-12.672624 0-18.621103-2.39249-29.416983-6.744611-1.938142-0.780783-3.928472-1.582031-6.009877-2.387373-2.240017-3.462868-5.04183-11.425214-6.77531-19.108197 38.359656-19.553335 81.755002-30.592762 127.680984-30.592762C538.211988 229.892901 566.552453 234.43331 593.370239 242.907309z" />
			<path d="M957.527053 409.325549c-5.478781-23.600511-25.946952-40.752146-60.812017-50.986231-13.866822-4.080945-28.360931 3.856841-32.42141 17.703197-4.060479 13.846356 3.867074 28.355815 17.708314 32.416294 21.097504 6.193049 24.589025 12.619412 24.620747 12.621459 1.638313 21.585621-111.772666 105.686041-377.078101 167.325913-265.38116 61.669548-404.239717 36.129872-412.218436 16.172331-0.005117-0.081864 0.341784-8.866948 21.360494-26.549679 11.040451-9.28548 12.458753-25.76378 3.173273-36.804231-9.290597-11.050684-25.76378-12.479219-36.804231-3.173273-31.544437 26.539446-44.538379 52.884464-38.624692 78.291111 8.885368 38.231743 55.085596 58.750055 140.971685 62.454424 0.314155 0.663102 0.64366 1.321088 1.00898 1.970888 61.047378 108.574834 176.284959 176.030156 300.736389 176.030156 183.829795 0 334.733691-143.290497 344.29751-326.523705C932.524612 488.061798 966.605825 448.414823 957.527053 409.325549zM496.471328 793.812387l24.594141-20.357654 43.547819-5.030573c8.535397-0.989537 16.039301-6.101975 20.075221-13.69286l9.402137-17.703197 8.90788 18.294668-6.009877 24.898063c-27.662013 9.018398-57.192583 13.885242-87.840604 13.885242C504.907465 794.107099 500.682233 794.002722 496.471328 793.812387zM656.68424 752.652965c0.049119-4.03899-0.816598-8.06263-2.607384-11.746532l-35.471886-72.913637c-4.300956-8.836249-13.198603-14.509459-23.024389-14.69263-10.06524-0.061398-18.921955 5.183046-23.533996 13.866822l-27.059286 50.935066-37.604456 4.347005c-5.02034 0.581238-9.764388 2.602268-13.662161 5.825682l-57.149605 47.303352c-2.540869 2.101871-4.576225 4.587482-6.102998 7.300266-59.482743-17.325597-112.223944-53.952796-149.262512-104.638175 76.699869-3.872191 167.07725-17.317411 260.160251-38.938847 90.823542-21.106714 175.904289-48.055482 245.520833-77.534887C772.558317 642.825604 723.913411 711.457728 656.68424 752.652965z" />
		</svg>
	);
};

export const HTMLIcon = ({
	fill = "currentColor",
	className,
	width = 30,
	height = 30,
}) => {
	return (
		<svg
			role="img"
			aria-label=""
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1024 1024"
			className={className}
			width={width}
			fill={fill}
			height={height}
		>
			<path d="M984.752 532.72 790.432 726.8C778.432 738.768 758.976 738.768 746.976 726.8 734.992 714.816 734.992 695.408 746.976 683.44L919.616 511.04 746.976 338.656C734.992 326.672 734.992 307.264 746.976 295.296 758.976 283.312 778.432 283.312 790.432 295.296L984.752 489.36C996.752 501.344 996.752 520.752 984.752 532.72ZM347.776 911.568C338.944 926.992 319.376 932.288 304.064 923.376 288.752 914.48 283.52 894.752 292.352 879.328L676.352 112.432C685.184 96.992 704.752 91.712 720.064 100.624 735.376 109.52 740.608 129.248 731.776 144.672L347.776 911.568ZM277.152 726.8C265.152 738.768 245.696 738.768 233.696 726.8L39.36 532.72C27.376 520.752 27.376 501.344 39.36 489.36L233.696 295.296C245.696 283.312 265.152 283.312 277.152 295.296 289.136 307.264 289.136 326.672 277.152 338.656L104.528 511.04 277.152 683.44C289.136 695.408 289.136 714.816 277.152 726.8Z" />
		</svg>
	);
};

export const CodeBracesIcon = ({
	fill = "currentColor",
	className,
	width = 30,
	height = 30,
}) => {
	return (
		<svg
			role="img"
			aria-label=""
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1024 1024"
			className={className}
			width={width}
			fill={fill}
			height={height}
		>
			<path
				d="M341.333333 128a85.333333 85.333333 0 0 0-85.333333 85.333333v170.666667a85.333333 85.333333 0 0 1-85.333333 85.333333H128v85.333334h42.666667a85.333333 85.333333 0 0 1 85.333333 85.333333v170.666667a85.333333 85.333333 0 0 0 85.333333 85.333333h85.333334v-85.333333H341.333333v-213.333334a85.333333 85.333333 0 0 0-85.333333-85.333333 85.333333 85.333333 0 0 0 85.333333-85.333333V213.333333h85.333334V128m256 0a85.333333 85.333333 0 0 1 85.333333 85.333333v170.666667a85.333333 85.333333 0 0 0 85.333333 85.333333h42.666667v85.333334h-42.666667a85.333333 85.333333 0 0 0-85.333333 85.333333v170.666667a85.333333 85.333333 0 0 1-85.333333 85.333333h-85.333334v-85.333333h85.333334v-213.333334a85.333333 85.333333 0 0 1 85.333333-85.333333 85.333333 85.333333 0 0 1-85.333333-85.333333V213.333333h-85.333334V128h85.333334z"
				fill=""
			/>
		</svg>
	);
};
