import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(173,35%,43%,0.15)_0%,_transparent_50%)]" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-secondary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 mb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left mt-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-primary-foreground mb-6 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-medium">Solution de planification intelligente</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Vos plannings,{" "}
              <span className="relative">
                <span className="text-gradient bg-gradient-to-r from-teal-light to-mint">simplifiés</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6C50 2 150 2 198 6" stroke="hsl(173, 35%, 43%)" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
              {" "}en un clic
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              MediSync transforme la complexité de la planification des équipes de santé en une tâche simple et automatisée. 
              Respectez les contraintes, gagnez du temps, apaisez vos équipes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="https://medisync-scheduler-pro.vercel.app/" target="_blank" rel="noopener noreferrer">
                  Tester l'application
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeuTzbgUBJB8y8WhDP9kMNFpFsUhymFF-29K6CM2T1LG-L8Sg/viewform?usp=header" target="_blank" rel="noopener noreferrer">Donnez votre avis</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-primary-foreground">100%</p>
                <p className="text-sm text-primary-foreground/60">Conformité</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-primary-foreground">1 clic</p>
                <p className="text-sm text-primary-foreground/60">Génération</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-primary-foreground">24/7</p>
                <p className="text-sm text-primary-foreground/60">Disponible</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <div className="relative">
              {/* Main Card */}
              <div className="bg-card/95 backdrop-blur-xl rounded-2xl shadow-card p-6 border border-border">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display font-semibold text-lg text-foreground">Planning Équipe Soins</h3>
                  <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium">Optimisé</span>
                </div>
                
                {/* Calendar Grid Preview */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {["L", "M", "M", "J", "V", "S", "D"].map((day, i) => (
                    <div key={i} className="text-center text-xs font-medium text-muted-foreground py-1">
                      {day}
                    </div>
                  ))}
                  {Array.from({ length: 14 }).map((_, i) => (
                    <div
                      key={i}
                      className={`aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-colors ${
                        i === 3 || i === 7 || i === 10
                          ? "bg-secondary text-secondary-foreground"
                          : i === 5 || i === 12
                          ? "bg-muted text-muted-foreground"
                          : "bg-background text-foreground hover:bg-muted"
                      }`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>

                {/* Team Members */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Users size={16} className="text-secondary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Dr. Martin</p>
                      <p className="text-xs text-muted-foreground">08:00 - 16:00</p>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users size={16} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Inf. Dubois</p>
                      <p className="text-xs text-muted-foreground">14:00 - 22:00</p>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-card rounded-xl shadow-soft p-4 border border-border animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <Clock size={20} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Temps économisé</p>
                    <p className="font-semibold text-foreground">4h / semaine</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-soft p-4 border border-border animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <Calendar size={20} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Conflits</p>
                    <p className="font-semibold text-secondary">0 détecté</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
