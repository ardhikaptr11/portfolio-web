"use client";

import { CSSProperties, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { SOCIAL_LINKS, CONTACT_INFORMATIONS } from "@/lib/data";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { IoLocationSharp, IoLogoWhatsapp } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa6";

const formSchema = z.object({
	name: z.string().min(2, { message: "Name must be at least 2 characters" }),
	email: z.string().email({ message: "Please enter a valid email address" }),
	message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type FormValues = z.infer<typeof formSchema>;

export const getIcon = (icon: string, definedStyle: CSSProperties = {}) => {
	const icons: { [key: string]: React.ReactNode } = {
		github: <Github className="h-5 w-5" style={definedStyle} />,
		linkedin: <Linkedin className="h-5 w-5" style={definedStyle} />,
		whatsapp: <IoLogoWhatsapp className="h-5 w-5" style={definedStyle} />,
		telegram: <FaTelegram className="h-5 w-5" style={definedStyle} />,
		mail: <Mail className="h-5 w-5" style={definedStyle} />,
		location: <IoLocationSharp style={definedStyle} />
	};

	return icons[icon] || <Github className="h-5 w-5" />;
};

async function sendContactForm(data: FormValues) {
	const res = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json"
		}
	});

	if (!res.ok) {
		throw new Error("Failed to send");
	}
}

export function ContactSection() {
	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			message: ""
		}
	});

	async function onSubmit(data: FormValues) {
		const promise = sendContactForm(data);

		toast.promise(promise, {
			loading: "Sending your message...",
			success: "Your message sent successfully!",
			error: "Failed to send message. Please try again."
		});

		try {
			await promise;
			form.reset();
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<section id="contact" className="py-16 md:py-24 bg-background relative">
			<div className="container max-w-6xl mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.5 }}
					className="mb-12 text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
					<div className="w-24 h-1 bg-chart-2 mx-auto mb-8"></div>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Looking for a passionate developer? Feel free to reach out to me.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.6 }}
						className="space-y-8">
						<div>
							<h3 className="text-xl font-semibold mb-4">Contact Information</h3>
							<p className="text-muted-foreground mb-4">
								I'm actively seeking full-time or internship opportunities as a developer.
							</p>
							<div className="flex flex-col gap-3">
								{CONTACT_INFORMATIONS.map((information) => (
									<div key={information.icon} className="flex items-center gap-4">
										{getIcon(information.icon, { height: "24px", width: "24px" })}
										<p className="text-muted-foreground">{information.text}</p>
									</div>
								))}
							</div>
						</div>

						<div className="space-y-4">
							<h4 className="text-lg font-medium">Connect with me</h4>
							<div className="flex flex-wrap gap-4">
								{SOCIAL_LINKS.filter((_, idx) => idx !== 2).map((link) => (
									<a
										key={link.platform}
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={`Connect on ${link.platform}`}
										className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
										{getIcon(link.icon)}
									</a>
								))}
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.6 }}>
						<Form {...form}>
							<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative">
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Name</FormLabel>
											<FormControl>
												<Input placeholder="Your name" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input placeholder="Your email address" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="message"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Message</FormLabel>
											<FormControl>
												<Textarea placeholder="Your message" rows={5} {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
									<Button
										type="submit"
										disabled={form.formState.isSubmitting}
										className="w-full md:w-auto rounded-full">
										<Send className="mr-2 h-4 w-4" />
										Send Message
									</Button>
								</div>
							</form>
						</Form>
					</motion.div>
				</div>
			</div>
			<Toaster position="bottom-right" closeButton />
		</section>
	);
}
