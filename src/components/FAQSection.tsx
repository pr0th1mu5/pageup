import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Quanto tempo leva para desenvolver um site completo?",
      answer: "O tempo de desenvolvimento varia de acordo com a complexidade do projeto. Um site institucional simples pode levar de 2-4 semanas, enquanto um e-commerce completo ou aplicação web complexa pode levar de 2-4 meses. Trabalhamos com cronogramas realistas e mantemos você informado sobre o progresso em todas as etapas."
    },
    {
      question: "Vocês oferecem suporte após a entrega do projeto?",
      answer: "Sim! Oferecemos suporte técnico completo após a entrega. Todos os projetos incluem 30 dias de suporte gratuito para correções e ajustes. Além disso, oferecemos planos de manutenção mensal que incluem atualizações, backups, monitoramento de segurança e suporte técnico contínuo."
    },
    {
      question: "Como funciona o processo de desenvolvimento?",
      answer: "Nosso processo é dividido em 4 etapas principais: 1) Descoberta - onde entendemos suas necessidades; 2) Estratégia - planejamos a solução ideal; 3) Execução - desenvolvemos o projeto com acompanhamento constante; 4) Otimização - refinamos e otimizamos baseado em dados reais de uso."
    },
    {
      question: "Posso acompanhar o desenvolvimento do meu projeto?",
      answer: "Absolutamente! Utilizamos ferramentas de gestão de projetos que permitem acompanhar o progresso em tempo real. Você receberá atualizações regulares, poderá ver o desenvolvimento em ambiente de teste e terá pontos de contato semanais com nossa equipe para feedback e aprovações."
    },
    {
      question: "Vocês trabalham com empresas de todos os portes?",
      answer: "Sim, atendemos desde startups e pequenas empresas até grandes corporações. Adaptamos nossa abordagem e soluções de acordo com o porte e necessidades específicas de cada cliente. Temos experiência em diversos setores e sabemos como personalizar nossas soluções para diferentes realidades empresariais."
    },
    {
      question: "Quais tecnologias vocês utilizam?",
      answer: "Trabalhamos com as tecnologias mais modernas e confiáveis do mercado: React, Next.js, Node.js, TypeScript, Python, PostgreSQL, MongoDB, AWS, entre outras. Escolhemos a stack tecnológica baseada nas necessidades específicas de cada projeto, sempre priorizando performance, segurança e escalabilidade."
    },
    {
      question: "Como são definidos os preços dos projetos?",
      answer: "Nossos preços são personalizados baseados no escopo, complexidade e cronograma do projeto. Após uma reunião de descoberta gratuita, elaboramos uma proposta detalhada com valores transparentes, sem custos ocultos. Oferecemos diferentes modelos de pagamento para facilitar o investimento no seu projeto."
    },
    {
      question: "Vocês fazem redesign de sites existentes?",
      answer: "Sim! Oferecemos serviços completos de redesign, desde uma atualização visual até uma reestruturação completa da arquitetura. Analisamos o site atual, identificamos oportunidades de melhoria e desenvolvemos uma nova versão otimizada para conversão, SEO e experiência do usuário."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 fade-in-up">
          <h2 className="text-section-title text-foreground">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Respondemos às dúvidas mais comuns sobre nossos serviços. 
            Não encontrou sua pergunta? Entre em contato conosco!
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="accordion-item fade-in-up"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="accordion-header w-full text-left"
              >
                <span className="font-medium text-foreground pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>
              
              <div className={`accordion-content ${openIndex === index ? 'open' : ''}`}>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 fade-in-up">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-poppins">
              Ainda tem dúvidas?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe está pronta para esclarecer todas as suas questões 
              e ajudar você a encontrar a melhor solução para seu projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Falar com Especialista
              </button>
              <button className="px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-background text-foreground hover:bg-muted">
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;