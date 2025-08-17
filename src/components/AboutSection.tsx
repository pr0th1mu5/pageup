import { CheckCircle, Target, Lightbulb, Rocket } from 'lucide-react';

const AboutSection = () => {
  const services = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Desenvolvimento Web Personalizado",
      description: "Criamos soluções web sob medida para seu negócio"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Análise de Dados e Insights",
      description: "Transformamos dados em estratégias que geram resultados"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Otimização de Performance",
      description: "Melhoramos a velocidade e eficiência dos seus sistemas"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Consultoria Digital",
      description: "Orientamos sua empresa na jornada de transformação digital"
    }
  ];

  return (
    <section id="sobre" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-4">
              <h2 className="text-section-title text-foreground">
                O que fazemos
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Somos uma startup especializada em transformar ideias em realidade digital. 
                Nossa missão é impulsionar o crescimento dos nossos clientes através de 
                soluções tecnológicas inovadoras e estratégicas.
              </p>
            </div>

            {/* Services List */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-background/50 hover:bg-background transition-all duration-300 bounce-hover"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {service.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-card-title text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative fade-in-up">
            <div className="grid grid-cols-2 gap-6">
              {/* Feature Cards */}
              <div className="space-y-6">
                <div className="card-gradient text-center">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Foco em Resultados</h3>
                  <p className="text-sm text-muted-foreground">
                    Cada projeto é desenvolvido com objetivos claros e métricas definidas.
                  </p>
                </div>
                
                <div className="card-gradient text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Inovação</h3>
                  <p className="text-sm text-muted-foreground">
                    Utilizamos as tecnologias mais modernas do mercado.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 pt-12">
                <div className="card-gradient text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Criatividade</h3>
                  <p className="text-sm text-muted-foreground">
                    Soluções criativas para desafios complexos.
                  </p>
                </div>
                
                <div className="card-gradient text-center">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Qualidade</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprometimento com a excelência em cada entrega.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;