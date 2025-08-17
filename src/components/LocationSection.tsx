import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const LocationSection = () => {
  return (
    <section id="localizacao" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 fade-in-up">
          <h2 className="text-section-title text-foreground">
            Onde <span className="text-secondary">Estamos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Venha nos visitar ou entre em contato. Estamos sempre prontos para 
            conversar sobre seu próximo projeto digital.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8 fade-in-up">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Address */}
              <div className="card-gradient">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-card-title text-foreground font-poppins">
                    Endereço
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Av. Paulista, 1000<br />
                  Bela Vista, São Paulo - SP<br />
                  CEP: 01310-100
                </p>
              </div>

              {/* Phone */}
              <div className="card-gradient">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-card-title text-foreground font-poppins">
                    Telefone
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  +55 (11) 99999-9999<br />
                  +55 (11) 3333-4444
                </p>
              </div>

              {/* Email */}
              <div className="card-gradient">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-card-title text-foreground font-poppins">
                    E-mail
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  contato@pageup.com.br<br />
                  comercial@pageup.com.br
                </p>
              </div>

              {/* Hours */}
              <div className="card-gradient">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-card-title text-foreground font-poppins">
                    Horário
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Segunda à Sexta<br />
                  09:00 às 18:00
                </p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 font-poppins">
                Atendimento Personalizado
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Preferimos agendar uma reunião para entender melhor suas necessidades 
                e apresentar as melhores soluções para seu projeto. Entre em contato 
                e vamos marcar um horário!
              </p>
              <button className="btn-primary">
                Agendar Reunião
              </button>
            </div>
          </div>

          {/* Map */}
          <div className="fade-in-up">
            <div className="relative">
              <div className="aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1948834529947!2d-46.65729968502086!3d-23.561414284688447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt!2sbr!4v1635180000000!5m2!1spt!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="PageUp! - Localização no Google Maps"
                ></iframe>
              </div>
              
              {/* Map Overlay */}
              <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">PageUp!</p>
                    <p className="text-xs text-muted-foreground">São Paulo, SP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transportation Info */}
        <div className="mt-16 fade-in-up">
          <div className="bg-muted/50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center font-poppins">
              Como Chegar
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold">🚇</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Metrô</h4>
                <p className="text-sm text-muted-foreground">
                  Estação Trianon-MASP<br />
                  Linha 2 - Verde
                </p>
              </div>
              
              <div>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-secondary font-bold">🚌</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Ônibus</h4>
                <p className="text-sm text-muted-foreground">
                  Diversas linhas param<br />
                  na Av. Paulista
                </p>
              </div>
              
              <div>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-accent-foreground font-bold">🚗</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Carro</h4>
                <p className="text-sm text-muted-foreground">
                  Estacionamento<br />
                  no local
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;