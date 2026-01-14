import { Link } from 'react-router-dom';
import { Linkedin, Globe, Briefcase, ArrowUpRight } from 'lucide-react';
import robinsonLogo from '../assets/robinson-logo.webp';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    presentation: [
      { name: 'Home', path: '/' },
      { name: 'Why Robinson', path: '/why-robinson' },
      { name: 'My Vision', path: '/vision' },
      { name: 'Digital Thread', path: '/digital-thread' },
      { name: 'About Me', path: '/about-me' },
    ],
    robinsonFacts: [
      { name: '1.3M Sq. Ft. Manufacturing', path: '/why-robinson' },
      { name: '4 WI Locations + IA Expansion', path: '/why-robinson' },
      { name: '100% Employee-Owned', path: '/why-robinson' },
      { name: 'FAB 40 Top 10', path: '/why-robinson' },
    ],
    myStrategy: [
      { name: 'ERP Modernization', path: '/digital-thread' },
      { name: 'Predictive Maintenance', path: '/digital-thread' },
      { name: 'OT/IT Convergence', path: '/digital-thread' },
      { name: 'Iowa IT Blueprint', path: '/digital-thread' },
    ],
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <div className="mb-6">
              <img src={robinsonLogo} alt="Robinson Inc." className="h-14 w-auto mb-2" />
              <div className="text-robinson-gray text-xs font-medium">IT Director Candidate Presentation</div>
            </div>
            <p className="text-robinson-gray text-sm leading-relaxed mb-6">
              20+ years of technology leadership across manufacturing, government, 
              and enterprise environments.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/in/dj-cline-22219834/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-robinson-bg flex items-center justify-center text-robinson-gray hover:text-robinson-blue hover:bg-robinson-bg-dark transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://dclineitpro.github.io/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-robinson-bg flex items-center justify-center text-robinson-gray hover:text-robinson-blue hover:bg-robinson-bg-dark transition-all duration-300"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Presentation Links */}
          <div>
            <h4 className="text-robinson-black font-semibold mb-4">Presentation</h4>
            <ul className="space-y-3">
              {footerLinks.presentation.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-robinson-gray hover:text-robinson-blue transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Robinson Facts */}
          <div>
            <h4 className="text-robinson-black font-semibold mb-4">Robinson Facts</h4>
            <ul className="space-y-3">
              {footerLinks.robinsonFacts.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-robinson-gray hover:text-robinson-blue transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* My Strategy */}
          <div>
            <h4 className="text-robinson-black font-semibold mb-4">My Strategy</h4>
            <ul className="space-y-3">
              {footerLinks.myStrategy.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-robinson-gray hover:text-robinson-blue transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-robinson-gray text-sm">
              <span>© {currentYear} IT Director Candidate Presentation</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">Built for Robinson Interview</span>
            </div>
            <div className="flex items-center gap-6">
              <a 
                href="https://www.robinsoninc.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-robinson-gray hover:text-robinson-blue text-sm transition-colors"
              >
                Robinson Official Site <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




