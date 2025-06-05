import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { SOCIAL_LINKS, ABOUT_ME } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const getSocialIcon = (icon: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      "github": <Github className="h-5 w-5" />,
      "linkedin": <Linkedin className="h-5 w-5" />,
      "twitter": <Twitter className="h-5 w-5" />,
      "mail": <Mail className="h-5 w-5" />,
    };
    
    return icons[icon] || <Github className="h-5 w-5" />;
  };
  
  return (
    <footer className="py-8 border-t bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">
              &copy; {currentYear} {ABOUT_ME.name}. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Connect on ${link.platform}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {getSocialIcon(link.icon)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}