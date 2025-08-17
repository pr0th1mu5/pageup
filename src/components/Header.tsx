import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import pageUpLogo from '@/assets/pageup-logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'insights', label: 'Insights' },
    { id: 'time', label: 'Time' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'faq', label: 'FAQ' },
    { id: 'localizacao', label: 'Localização' },
    { id: 'contato', label: 'Contato' }
  ];

  const socialLinks = [
    { href: '#', icon: 'linkedin', label: 'LinkedIn' },
    { href: '#', icon: 'instagram', label: 'Instagram' },
    { href: '#', icon: 'facebook', label: 'Facebook' },
    { href: '#', icon: 'youtube', label: 'YouTube' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo and Company Name */}
          <div 
            className="flex items-center space-x-3 cursor-pointer bounce-hover"
            onClick={() => scrollToSection('inicio')}
          >
            <img 
              src={pageUpLogo} 
              alt="PageUp! Logo" 
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <div className="flex items-center space-x-1">
              <span className="text-xl md:text-2xl font-bold font-poppins text-primary">
                Page
              </span>
              <span className="text-xl md:text-2xl font-bold font-poppins text-secondary">
                Up!
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="nav-link text-foreground hover:text-primary"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Social Links & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Desktop Social Links */}
            <div className="hidden md:flex items-center space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bounce-hover"
                  aria-label={social.label}
                >
                  <Globe className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-border mt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.icon}
                    href={social.href}
                    className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;