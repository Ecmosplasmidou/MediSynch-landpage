import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-10 lg:py-15 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(173,35%,43%,0.15)_0%,_transparent_60%)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-primary-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium">Commencez dès aujourd'hui</span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Prêt à transformer vos{" "}
            <span className="relative inline-block">
              plannings
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M2 6C50 2 150 2 198 6" stroke="hsl(173, 35%, 43%)" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
            {" "}?
          </h2>

          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Découvrez comment MediSync peut simplifier la gestion de vos équipes 
            et apporter sérénité à votre établissement de santé.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center" id="demo">
            <Button variant="hero" size="lg" className="group" asChild>
              <a href="https://medisync-scheduler-pro.vercel.app/" target="_blank" rel="noopener noreferrer">
                Tester l'application
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" id="feedback" asChild>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeuTzbgUBJB8y8WhDP9kMNFpFsUhymFF-29K6CM2T1LG-L8Sg/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2" size={20} />
                Donnez votre avis
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-primary-foreground/60">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Essai gratuit</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Sans engagement</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Support dédié</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
