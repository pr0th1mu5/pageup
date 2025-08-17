import { 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  BarChart3, 
  Shield, 
  Zap,
  ArrowRight,
  Check
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Desenvolvimento Web",
      description: "Sites e aplicações web modernas, responsivas e otimizadas para performance.",
      features: ["React & Next.js", "Design Responsivo", "SEO Otimizado", "Performance A+"],
      color: "primary"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Apps Mobile",
      description: "Aplicativos nativos e híbridos para iOS e Android com experiência excepcional.",
      features: ["React Native", "UI/UX Nativa", "Push Notifications", "App Store Ready"],
      color: "secondary"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce",
      description: "Lojas virtuais completas com integração de pagamentos e gestão de estoque.",
      features: ["Carrinho Inteligente", "Gateway de Pagamento", "Dashboard Admin", "Mobile First"],
      color: "accent"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & BI",
      description: "Dashboards interativos e relatórios personalizados para tomada de decisão.",
      features: ["Dashboards Customizados", "Relatórios Automáticos", "KPIs em Tempo Real", "Data Visualization"],
      color: "primary"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança Digital",
      description: "Implementação de medidas de segurança robustas para proteger seus dados.",
      features: ["SSL/HTTPS", "Backup Automático", "Firewall Avançado", "Monitoramento 24/7"],
      color: "secondary"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Otimização",
      description: "Melhoria de performance e velocidade para máxima eficiência.",
      features: ["Speed Optimization", "Core Web Vitals", "Cache Inteligente", "CDN Global"],
      color: "accent"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 fade-in-up">
          <h2 className="text-section-title text-foreground">
            Nossos <span className="text-secondary">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas para transformar sua presença digital. 
            Cada serviço é personalizado para atender às necessidades específicas 
            do seu negócio e garantir resultados excepcionais.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-gradient group hover:scale-105 transition-all duration-300 fade-in-up"
            >
              {/* Service Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center
                  ${service.color === 'primary' ? 'bg-primary/10 text-primary' : ''}
                  ${service.color === 'secondary' ? 'bg-secondary/10 text-secondary' : ''}
                  ${service.color === 'accent' ? 'bg-accent/10 text-accent-foreground' : ''}
                  group-hover:scale-110 transition-transform duration-300
                `}>
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-card-title text-foreground font-poppins">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Service Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className={`w-4 h-4 flex-shrink-0
                      ${service.color === 'primary' ? 'text-primary' : ''}
                      ${service.color === 'secondary' ? 'text-secondary' : ''}
                      ${service.color === 'accent' ? 'text-accent-foreground' : ''}
                    `} />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 group
                ${service.color === 'primary' ? 'bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground' : ''}
                ${service.color === 'secondary' ? 'bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground' : ''}
                ${service.color === 'accent' ? 'bg-accent/10 text-accent-foreground hover:bg-accent hover:text-accent-foreground' : ''}
              `}>
                <span>Saiba Mais</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-poppins">
              Como Trabalhamos
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nosso processo é transparente, colaborativo e focado em resultados. 
              Trabalhamos lado a lado com você em cada etapa do projeto.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                1
              </div>
              <h4 className="font-semibold text-foreground mb-2">Descoberta</h4>
              <p className="text-sm text-muted-foreground">
                Entendemos seu negócio, objetivos e desafios específicos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-secondary-foreground font-bold text-xl">
                2
              </div>
              <h4 className="font-semibold text-foreground mb-2">Estratégia</h4>
              <p className="text-sm text-muted-foreground">
                Desenvolvemos um plano personalizado e definimos o roadmap.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-accent-foreground font-bold text-xl">
                3
              </div>
              <h4 className="font-semibold text-foreground mb-2">Execução</h4>
              <p className="text-sm text-muted-foreground">
                Implementamos a solução com acompanhamento constante.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                4
              </div>
              <h4 className="font-semibold text-foreground mb-2">Otimização</h4>
              <p className="text-sm text-muted-foreground">
                Monitoramos, analisamos e aprimoramos continuamente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;