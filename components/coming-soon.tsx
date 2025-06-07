"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { useTheme } from "@/context/theme-context";
import { ThemeToggle } from "@/components/theme-toggle";
import { getIcon } from "@/components/contact-section";
import { Github, Linkedin, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";

import { Progress } from "@/components/ui/progress";

export function ComingSoonPage() {
	const { theme } = useTheme();
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 90) {
					clearInterval(interval);
					return 90;
				}
				return prev + 1;
			});
		}, 20);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative h-screen w-full flex flex-col items-center justify-center bg-primary-foreground text-center px-5 overflow-hidden gap-6">
			<div className="z-50 flex flex-col w-full h-full">
				<div className="ml-auto p-2">
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.3, delay: 0.5 }}>
						<ThemeToggle />
					</motion.div>
				</div>
				<div className="flex flex-col justify-center h-full ">
					<img
						src="/assets/image.png"
						alt="Coders at work"
						className="size-60 sm:size-75 md:size-90 mx-auto"
					/>
					<h1 className="text-5xl">Coders At Work</h1>
					<p>Stay tuned for something amazing!</p>

					<div className="mt-6 mb-4">
						<div className="w-full flex justify-center items-center relative">
							<div className="absolute z-99 font-bold text-white">{progress}%</div>
							<Progress
								value={progress}
								className={`!w-[75%] ${theme === "light" ? "bg-gray-400" : ""}`}
								indicatorClassName="bg-chart-2"
							/>
						</div>
					</div>

					<div className="flex text-white justify-center gap-4">
						{SOCIAL_LINKS.slice(0, 3).map((social) => (
							<a
								key={social.platform}
								href={social.url}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`Connect on ${social.platform}`}
								className="flex justify-center items-center rounded-full size-[30px] shadow-sm"
								style={{
									background: theme === "light" ? "#f3f4f6" : "#2d3b55"
								}}>
								{getIcon(social.icon, {
									background: theme === "light" ? "#f3f4f6" : "#2d3b55",
									color: theme === "light" ? "#2d3b55" : "#f3f4f6"
								})}
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
