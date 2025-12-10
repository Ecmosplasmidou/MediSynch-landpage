import { Users, Settings, Calendar, BarChart3, Bell, Shield } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Gestion des Personas",
    description: "Créez et gérez les profils de chaque salarié avec leurs contraintes horaires, temps partiels et forfaits spécifiques."
  },
  {
    icon: Settings,
    title: "Paramétrage Établissement",
    description: "Configurez les règles de votre établissement : horaires d'ouverture, capacité, règles internes et contraintes légales."
  },
  {
    icon: Calendar,
    title: "Génération Automatique",
    description: "Générez des plannings cohérents et conformes en un seul clic, respectant toutes les contraintes définies."
  },
  {
    icon: BarChart3,
    title: "Tableaux de Bord",
    description: "Visualisez en temps réel l'état de vos plannings, les heures travaillées et les indicateurs clés."
  },
  {
    icon: Bell,
    title: "Alertes Intelligentes",
    description: "Recevez des notifications en cas de conflit potentiel ou de non-conformité détectée."
  },
  {
    icon: Shield,
    title: "Conformité Garantie",
    description: "Assurez le respect des réglementations de travail et des accords collectifs automatiquement."
  }
];

const FeaturesSection = () => {
  return (
    <section id="fonctionnalites" className="py-10 lg:py-15 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            Fonctionnalités
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tout ce dont vous avez{" "}
            <span className="text-gradient">besoin</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Une suite complète d'outils pour transformer la gestion de vos plannings 
            et libérer du temps pour ce qui compte vraiment : le soin.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-xl p-6 border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-soft"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-secondary group-hover:text-secondary-foreground">
                <feature.icon size={24} />
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
