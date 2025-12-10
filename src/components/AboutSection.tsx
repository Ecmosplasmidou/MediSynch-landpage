import { CheckCircle } from "lucide-react";

const benefits = [
  "Modéliser précisément les profils de chaque salarié (persona) et les exigences de l'établissement",
  "Générer un planning 100% cohérent et conforme en un seul clic",
  "Respecter les contraintes horaires, temps partiels et forfaits",
  "Garantir la conformité aux réglementations de travail"
];

const AboutSection = () => {
  return (
    <section id="qui-sommes-nous" className="py-10 lg:py-15 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
              Qui sommes-nous
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              <span className="text-gradient">Medisync</span> : La planification intelligente pour la santé
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Chez <strong className="text-foreground">Medisync</strong>, notre mission est de rétablir l'équilibre au cœur de votre organisation. 
              Nous avons conçu une solution de planification intelligente, automatique et hautement paramétrable 
              pour démanteler la complexité du scheduling.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="relative pl-6 border-l-4 border-secondary">
              <p className="text-lg font-medium text-foreground italic">
                "Libérer les Ressources Humaines du fardeau logistique. Un planning bien fait est le premier pas vers des soins bien donnés."
              </p>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Visual Card */}
            <div className="relative bg-gradient-hero rounded-2xl p-8 lg:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(173,35%,43%,0.2)_0%,_transparent_70%)] rounded-2xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground font-display">M</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-primary-foreground">MediSync</h3>
                    <p className="text-primary-foreground/70">La simplicité au service de la vie</p>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-3xl font-bold text-primary-foreground mb-1">CHU</p>
                    <p className="text-sm text-primary-foreground/70">Hôpitaux</p>
                  </div>
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-3xl font-bold text-primary-foreground mb-1">Cliniques</p>
                    <p className="text-sm text-primary-foreground/70">Humaines & Vétérinaires</p>
                  </div>
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-3xl font-bold text-primary-foreground mb-1">100%</p>
                    <p className="text-sm text-primary-foreground/70">Automatisé</p>
                  </div>
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-3xl font-bold text-primary-foreground mb-1">0</p>
                    <p className="text-sm text-primary-foreground/70">Conflits</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-card p-4 border border-border">
              <p className="text-sm text-muted-foreground mb-1">Résultat</p>
              <p className="font-display font-bold text-secondary text-lg">Sérénité des équipes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
