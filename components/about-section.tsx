"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/theme-context";
import { ABOUT_ME, SKILLS, EXPERIENCES_DATA } from "@/lib/data";
import {
	Code,
	Component,
	Server,
	Palette,
	Cloud,
	GitBranch,
	FileCode,
	BriefcaseBusiness,
	GraduationCap,
	ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Button, buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";

const getIconComponent = (iconName: string) => {
	const icons: { [key: string]: React.ReactNode } = {
		code: <Code className="h-5 w-5" />,
		component: <Component className="h-5 w-5" />,
		server: <Server className="h-5 w-5" />,
		palette: <Palette className="h-5 w-5" />,
		cloud: <Cloud className="h-5 w-5" />,
		graduation: <GraduationCap className="h-5 w-5" />,
		"git-branch": <GitBranch className="h-5 w-5" />,
		"file-code": <FileCode className="h-5 w-5" />
	};

	return icons[iconName] || <Code className="h-5 w-5" />;
};

function Experience() {
	const { theme } = useTheme();

	return (
		<VerticalTimeline lineColor="">
			{EXPERIENCES_DATA.map((data, index) => (
				<motion.div
					key={index}
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ margin: "-100px" }}
					transition={{
						type: "spring",
						bounce: 0.6,
						duration: 0.8,
						delay: index * 0.15
					}}
					className="mb-12 text-center">
					<VerticalTimelineElement
						position={index % 2 === 0 ? "left" : "right"}
						contentStyle={{
							background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
							boxShadow: "none",
							border: "1px solid rgba(0, 0, 0, 0.05)",
							textAlign: "left",
							padding: "1.3rem 2rem"
						}}
						contentArrowStyle={{
							borderRight:
								theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255, 255, 255, 0.5)"
						}}
						date={data.date}
						dateClassName="mr-4"
						icon={getIconComponent(data.icon)}
						iconStyle={{
							background: theme === "light" ? "#f3f4f6" : "#2d3b55",
							fontSize: "1.5rem",
							boxShadow:
								theme === "light"
									? "0 0 0 2px #fff,inset 0 1px 0 rgba(0,0,0,.08),0 2px 0 4px rgba(0,0,0,.05)"
									: "0 0 0 2px #ffffff0d,inset 0 1px 0 rgba(0,0,0,.08),0 2px 0 4px rgba(0,0,0,.05)"
						}}
						visible={true}>
						<h3 className="font-semibold capitalize !text-xl">{data.title}</h3>
						<p className="font-normal !mt-0 !text-lg">{data.location}</p>
						<ul className="!font-normal text-gray-700 dark:text-white/75">
							{data.descriptions.map((description, idx) => (
								<motion.li
									key={idx}
									initial={{ opacity: 0, x: -50 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: false, amount: 0.5 }}
									transition={{
										type: "spring",
										stiffness: 50,
										damping: 15,
										duration: 0.6
									}}
									className="flex items-start gap-2 !text-md mt-0 mb-2 first:mt-2 last:mb-4">
									<ArrowRight className="w-4 h-4 shrink-0" />
									<span className="leading-[1.175]">{description}</span>
								</motion.li>
							))}
						</ul>
						{data.url && (
							<a
								target="_blank"
								href={data.url}
								rel="noref noopener"
								className={buttonVariants({
									variant: "default",
									className:
										"rounded-sm ml-0 bg-transparent text-secondary-foreground py-[10.4px] !px-0 min-[1170px]:bg-primary min-[1170px]:!px-4 min-[1170px]:ml-6 min-[1170px]:text-primary-foreground"
								})}>
								<ExternalLink className="mr-2 h-4 w-4" />
								{data.title.includes("Bachelor") ? "Final Project" : "Certificate"}
							</a>
						)}
					</VerticalTimelineElement>
				</motion.div>
			))}
		</VerticalTimeline>
	);
}

export function AboutSection() {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1
			}
		}
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
	};

	return (
		<section id="about" className="py-16 md:py-24 bg-background">
			<div className="container max-w-6xl mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.5 }}
					className="mb-12 text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
					<div className="w-24 h-1 bg-chart-2 mx-auto mb-8"></div>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.6 }}
						className="space-y-6">
						{ABOUT_ME.bio.split(" ").map((el, i) => (
							<motion.span
								key={i}
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{
									duration: 0.25,
									delay: i / 10
								}}
								viewport={{ once: true, amount: 0 }}
								className="text-lg leading-relaxed text-muted-foreground">
								{el}{" "}
							</motion.span>
						))}
						<div className="flex flex-wrap gap-2 mt-4">
							{["Python", "Javascript", "React", "Node.js", "Tailwind CSS"].map((tag) => (
								<span
									key={tag}
									className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
									{tag}
								</span>
							))}
						</div>
					</motion.div>

					<motion.div
						variants={container}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, margin: "-100px" }}
						className="space-y-4">
						<h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
						<div className="space-y-4">
							{SKILLS.map((skill) => (
								<motion.div key={skill.name} variants={item} className="space-y-2">
									<div className="flex items-center justify-between">
										<div className="flex items-center">
											<div className="mr-2 bg-secondary rounded-full p-1">
												{getIconComponent(skill.icon)}
											</div>
											<span>{skill.name}</span>
										</div>
										<span className="text-sm text-muted-foreground">{skill.level}%</span>
									</div>
									<div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
										<motion.div
											initial={{ width: 0 }}
											whileInView={{ width: `${skill.level}%` }}
											viewport={{ once: true }}
											transition={{ duration: 1, delay: 0.2 }}
											className={cn(
												"h-full rounded-full",
												skill.level > 75 ? "bg-chart-2" : "bg-chart-4"
											)}></motion.div>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
			<div className="container max-w-6xl mx-auto px-4 mt-12">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">My Journey</h2>
				<Experience />
			</div>
		</section>
	);
}
