import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-image.png';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-4">
              <h1 className="text-hero bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Impulsionamos seu
                <span className="block text-secondary">negócio digital</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Transformamos ideias em soluções digitais poderosas. 
                Somos especialistas em desenvolvimento web, insights de dados 
                e estratégias que fazem sua empresa crescer no mundo digital.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('sobre')}
                className="btn-hero group flex items-center justify-center gap-2"
              >
                Conheça nossos serviços
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button
                onClick={() => scrollToSection('contato')}
                className="btn-primary flex items-center justify-center gap-2"
              >
                Fale conosco
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary font-poppins">100+</div>
                <div className="text-sm text-muted-foreground">Projetos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary font-poppins">5+</div>
                <div className="text-sm text-muted-foreground">Anos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary font-poppins">50+</div>
                <div className="text-sm text-muted-foreground">Clientes</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative fade-in-up">
            <div className="relative">
              <img 
                src={heroImage}
                alt="Desenvolvimento Web e Soluções Digitais" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-secondary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full opacity-10 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;