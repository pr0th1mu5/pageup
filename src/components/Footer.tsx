import { Globe, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import pageUpLogo from '@/assets/pageup-logo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-gradient-to-br from-primary to-primary-hover text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={pageUpLogo} 
                alt="PageUp! Logo" 
                className="w-12 h-12"
              />
              <div className="flex items-center space-x-1">
                <span className="text-2xl font-bold font-poppins">
                  Page
                </span>
                <span className="text-2xl font-bold font-poppins text-secondary">
                  Up!
                </span>
              </div>
            </div>
            
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Transformamos ideias em soluções digitais poderosas. Somos especialistas 
              em desenvolvimento web, insights de dados e estratégias que fazem sua 
              empresa crescer no mundo digital.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-primary-foreground/60">Siga-nos:</span>
              <div className="flex space-x-3">
                {['linkedin', 'instagram', 'facebook', 'youtube'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 bounce-hover"
                    aria-label={social}
                  >
                    <Globe className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold font-poppins">
              Links Rápidos
            </h3>
            <nav className="space-y-3">
              {[
                { id: 'inicio', label: 'Início' },
                { id: 'sobre', label: 'Sobre Nós' },
                { id: 'servicos', label: 'Serviços' },
                { id: 'time', label: 'Nosso Time' },
                { id: 'insights', label: 'Insights' },
                { id: 'faq', label: 'FAQ' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-primary-foreground/80 hover:text-secondary transition-colors duration-300 text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold font-poppins">
              Contato
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div className="text-primary-foreground/80">
                  <p>Av. Paulista, 1000</p>
                  <p>Bela Vista, São Paulo - SP</p>
                  <p>CEP: 01310-100</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <p>+55 (11) 99999-9999</p>
                  <p>+55 (11) 3333-4444</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <p>contato@pageup.com.br</p>
                  <p>comercial@pageup.com.br</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-secondary hover:bg-secondary-hover text-secondary-foreground py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:scale-105">
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-primary-foreground/60 text-sm text-center md:text-left">
              <p>© {currentYear} PageUp! Todos os direitos reservados.</p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a 
                href="#" 
                className="text-primary-foreground/60 hover:text-secondary transition-colors duration-300"
              >
                Política de Privacidade
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/60 hover:text-secondary transition-colors duration-300"
              >
                Termos de Uso
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/60 hover:text-secondary transition-colors duration-300"
              >
                Cookies
              </a>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary hover:text-secondary-foreground rounded-full flex items-center justify-center transition-all duration-300 bounce-hover"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;