import { Mail } from "lucide-react";
import type { Content } from "@/lib/content";
import { SOCIAL_LINKS } from "@/lib/config";
import { FacebookIcon, LinkedInIcon, XIcon } from "./SocialIcons";

export function Footer({ content }: { content: Content }) {
  const { footer } = content;

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-inner">
          <div>
            <a className="logo" href="#top">
              Therapeutics <span>Data</span>
            </a>
            <p className="footer-copy">{footer.tagline}</p>
          </div>
          <nav className="footer-links" aria-label="Footer">
            {footer.links.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="footer-social">
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FacebookIcon size={17} />
            </a>
            <a href={SOCIAL_LINKS.x} target="_blank" rel="noopener noreferrer" aria-label="X">
              <XIcon size={17} />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon size={17} />
            </a>
            <a href={SOCIAL_LINKS.email} aria-label="Email">
              <Mail size={17} />
            </a>
          </div>
        </div>
        <p className="footer-copy">{footer.copyright}</p>
      </div>
    </footer>
  );
}
