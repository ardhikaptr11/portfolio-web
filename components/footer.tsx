import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { SOCIAL_LINKS, ABOUT_ME } from "@/lib/data";

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="py-8 border-t bg-muted/30">
			<div className="container max-w-6xl mx-auto px-4">
				<div className="flex justify-center">
					<div className="mb-4 md:mb-0">
						<p className="text-muted-foreground">
							&copy; {currentYear} {ABOUT_ME.name}. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
