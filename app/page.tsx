import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ChatbotWidget } from "@/components/chatbot-widget";

export default function Home() {
	return (
		<main id="home" className="min-h-screen">
			<Navbar />
			<HeroSection />
			<AboutSection />
			<ProjectsSection />
			<ContactSection />
			<Footer />
			<ChatbotWidget />
		</main>
	);
}
