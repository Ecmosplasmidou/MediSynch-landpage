import { Shield, Zap, Heart } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Fiabilité et Précision",
    description: "Des plannings rigoureux et sans conflit, où chaque contrainte est respectée.",
    features: [
      "Conformité aux réglementations de travail",
      "Réduction du risque d'erreurs humaines",
      "Plannings sans conflits garantis"
    ],
    color: "primary"
  },
  {
    icon: Zap,
    title: "Efficacité et Innovation",
    description: "Transformez des heures de travail manuel en un clic.",
    features: [
      "Automatisation intelligente",
      "Interface intuitive et puissante",
      "Gain de temps considérable"
    ],
    color: "secondary"
  },
  {
    icon: Heart,
    title: "Équilibre et Sérénité",
    description: "L'humain au cœur du planning, avec respect des rythmes de chacun.",
    features: [
      "Respect des contraintes de vie",
      "Transparence totale sur les affectations",
      "Réduction du stress des équipes"
    ],
    color: "secondary"
  }
];

const ValuesSection = () => {
  return (
    <section id="valeurs" className="py-10 lg:py-15 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            Nos Valeurs
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Les piliers de notre{" "}
            <span className="text-gradient">engagement</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Trois valeurs fondamentales guident notre mission : offrir une solution de planification 
            qui allie précision technique et humanité.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-secondary/50 transition-all duration-500 hover:shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                value.color === "primary" 
                  ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground" 
                  : "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground"
              }`}>
                <value.icon size={28} />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {value.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {value.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className={`w-1.5 h-1.5 rounded-full mt-2 ${
                      value.color === "primary" ? "bg-primary" : "bg-secondary"
                    }`} />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
