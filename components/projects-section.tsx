"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function ProjectsSection() {
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
		<section id="projects" className="py-16 md:py-24 bg-muted/30">
			<div className="container max-w-6xl mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.5 }}
					className="mb-12 text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Things I've Built</h2>
					<div className="w-24 h-1 bg-chart-2 mx-auto mb-8"></div>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						These are my personal projects, thoughtfully built with curiosity and care.
					</p>
				</motion.div>

				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-100px" }}
					className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{PROJECTS.map((project) => (
						<motion.div key={project.id} variants={item}>
							<Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
								<div className="relative overflow-hidden">
									<AspectRatio ratio={16 / 9}>
										<Image
											src={project.imageUrl}
											alt={project.title}
											fill
											className="object-fit transition-transform duration-500 hover:scale-105"
										/>
									</AspectRatio>
								</div>

								<CardContent className="flex-grow pt-6">
									<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
									<p className="text-muted-foreground mb-4">{project.description}</p>
									<div className="flex flex-wrap gap-2 mt-4">
										{project.tags.map((tag) => (
											<span
												key={tag}
												className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">
												{tag}
											</span>
										))}
									</div>
								</CardContent>

								<CardFooter className="border-t pt-4 flex justify-start gap-4">
									{project.githubUrl && (
										<Button variant="outline" size="sm" asChild className="rounded-full">
											<a
												href={project.githubUrl}
												target="_blank"
												rel="noopener noreferrer"
												aria-label="View source code on GitHub">
												<Github className="h-4 w-4 mr-2" />
												Code
											</a>
										</Button>
									)}

									{project.demoUrl && (
										<Button variant="default" size="sm" asChild className="rounded-full">
											<a
												href={project.demoUrl}
												target="_blank"
												rel="noopener noreferrer"
												aria-label="View live demo">
												<ExternalLink className="h-4 w-4 mr-2" />
												Demo
											</a>
										</Button>
									)}
								</CardFooter>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
