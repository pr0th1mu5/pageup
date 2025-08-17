import { Linkedin, Mail, Code, Palette, BarChart, Rocket } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Ana Silva",
      role: "CEO & Fundadora",
      description: "Especialista em estratégia digital com 8 anos de experiência em transformação de negócios.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c669a2b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      icon: <Rocket className="w-6 h-6" />,
      color: "primary"
    },
    {
      name: "Carlos Mendes",
      role: "CTO",
      description: "Desenvolvedor full-stack apaixonado por tecnologias inovadoras e arquiteturas escaláveis.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      icon: <Code className="w-6 h-6" />,
      color: "secondary"
    },
    {
      name: "Maria Santos",
      role: "Head of Design",
      description: "Designer UX/UI com expertise em criar experiências digitais memoráveis e centradas no usuário.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      icon: <Palette className="w-6 h-6" />,
      color: "accent"
    },
    {
      name: "João Costa",
      role: "Data Analyst",
      description: "Especialista em análise de dados com foco em insights que impulsionam o crescimento dos negócios.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      icon: <BarChart className="w-6 h-6" />,
      color: "primary"
    }
  ];

  return (
    <section id="time" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 fade-in-up">
          <h2 className="text-section-title text-foreground">
            Nosso <span className="text-primary">Time</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conheça os profissionais apaixonados que fazem a magia acontecer. 
            Nossa equipe combina criatividade, tecnologia e estratégia para 
            entregar resultados excepcionais.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="card-gradient text-center group fade-in-up"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Role Icon */}
                <div className={`absolute -bottom-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg
                  ${member.color === 'primary' ? 'bg-primary text-primary-foreground' : ''}
                  ${member.color === 'secondary' ? 'bg-secondary text-secondary-foreground' : ''}
                  ${member.color === 'accent' ? 'bg-accent text-accent-foreground' : ''}
                  group-hover:rotate-12 transition-transform duration-300
                `}>
                  {member.icon}
                </div>
              </div>

              {/* Member Info */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-card-title text-foreground font-poppins">
                    {member.name}
                  </h3>
                  <p className={`text-sm font-medium
                    ${member.color === 'primary' ? 'text-primary' : ''}
                    ${member.color === 'secondary' ? 'text-secondary' : ''}
                    ${member.color === 'accent' ? 'text-accent-foreground' : ''}
                  `}>
                    {member.role}
                  </p>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>

                {/* Social Links */}
                <div className="flex items-center justify-center space-x-3 pt-4">
                  <button className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bounce-hover">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bounce-hover">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-up">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-poppins">
              Quer fazer parte do nosso time?
            </h3>
            <p className="text-muted-foreground mb-6">
              Estamos sempre em busca de talentos excepcionais para se juntar à nossa jornada 
              de transformação digital.
            </p>
            <button className="btn-primary">
              Ver Vagas Abertas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;