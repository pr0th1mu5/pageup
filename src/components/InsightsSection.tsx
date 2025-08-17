import { BarChart3, TrendingUp, PieChart, Users } from 'lucide-react';

const InsightsSection = () => {
  const insights = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Análise de Performance",
      description: "Monitoramento em tempo real do desempenho do seu site e aplicações",
      color: "primary"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Crescimento de Vendas",
      description: "Insights sobre padrões de comportamento que impulsionam as conversões",
      color: "secondary"
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: "Segmentação de Usuários",
      description: "Compreenda melhor seu público através de análises demográficas detalhadas",
      color: "accent"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Engajamento do Cliente",
      description: "Métricas que revelam como os usuários interagem com sua marca digital",
      color: "primary"
    }
  ];

  return (
    <section id="insights" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 fade-in-up">
          <h2 className="text-section-title text-foreground">
            Insights que <span className="text-secondary">Transformam</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nossos insights vão além dos números. Transformamos dados complexos em estratégias 
            acionáveis que geram valor real para o seu negócio. Cada análise é personalizada 
            para suas necessidades específicas, fornecendo uma visão clara do caminho para o crescimento.
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {insights.map((insight, index) => (
            <div 
              key={index}
              className="card-gradient text-center group hover:scale-105 transition-all duration-300 fade-in-up"
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center
                ${insight.color === 'primary' ? 'bg-primary/10 text-primary' : ''}
                ${insight.color === 'secondary' ? 'bg-secondary/10 text-secondary' : ''}
                ${insight.color === 'accent' ? 'bg-accent/10 text-accent-foreground' : ''}
                group-hover:scale-110 transition-transform duration-300
              `}>
                {insight.icon}
              </div>
              
              <h3 className="text-card-title text-foreground mb-3">
                {insight.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {insight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 fade-in-up">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground font-poppins">
                Por que nossos insights fazem a diferença?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Dados em tempo real:</strong> Monitoramento 
                    contínuo para decisões rápidas e precisas.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-secondary-foreground rounded-full"></div>
                  </div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Análise personalizada:</strong> Cada insight 
                    é adaptado ao seu modelo de negócio específico.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                  </div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">ROI mensurável:</strong> Toda estratégia 
                    vem com métricas claras de retorno sobre investimento.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background rounded-xl p-4 text-center shadow-lg">
                  <div className="text-2xl font-bold text-primary font-poppins">+150%</div>
                  <div className="text-sm text-muted-foreground">Aumento médio em conversões</div>
                </div>
                <div className="bg-background rounded-xl p-4 text-center shadow-lg">
                  <div className="text-2xl font-bold text-secondary font-poppins">+200%</div>
                  <div className="text-sm text-muted-foreground">Melhoria no engajamento</div>
                </div>
                <div className="bg-background rounded-xl p-4 text-center shadow-lg">
                  <div className="text-2xl font-bold text-primary font-poppins">-40%</div>
                  <div className="text-sm text-muted-foreground">Redução em custos</div>
                </div>
                <div className="bg-background rounded-xl p-4 text-center shadow-lg">
                  <div className="text-2xl font-bold text-secondary font-poppins">95%</div>
                  <div className="text-sm text-muted-foreground">Taxa de satisfação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;