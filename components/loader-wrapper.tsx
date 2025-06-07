"use client";

import { useEffect, useState } from "react";
import Loader from "./screen-loader";
import { DevToolsDetector } from "@/components/devtools-detector";

interface LoaderWrapperProps {
	children: React.ReactNode;
}

const LoaderWrapper = ({ children }: { children: React.ReactNode }) => {
	const [isCounterDone, setCounterDone] = useState(false);
	const [animateOut, setAnimateOut] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		if (isCounterDone) {
			const timeout = setTimeout(() => setAnimateOut(true), 500);
			return () => clearTimeout(timeout);
		}
	}, [isCounterDone]);

	if (!isLoaded) {
		return (
			<Loader
				animateOut={animateOut}
				onCounterDone={() => setCounterDone(true)}
				onFinish={() => setIsLoaded(true)}
			/>
		);
	}

	return (
		<>
			<DevToolsDetector />
			{children}
		</>
	);
};

export default LoaderWrapper;
