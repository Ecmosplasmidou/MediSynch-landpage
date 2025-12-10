import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/images/MEDISYNC.webp"
              alt="Logo MediSynch"
              className="h-24 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("valeurs")}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Nos Valeurs
            </button>
            <button
              onClick={() => scrollToSection("qui-sommes-nous")}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Qui sommes-nous
            </button>
            <button
              onClick={() => scrollToSection("fonctionnalites")}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Fonctionnalités
            </button>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <a href="https://docs.google.com/forms/d/1FyN-hLRR-HpBi9Yf7kUqTLk1cv94bJMT2k-g5EidRTE/edit" target="_blank" rel="noopener noreferrer">Donnez votre avis</a>
            </Button>
            <Button variant="accent" size="sm" asChild>
              <a href="https://medisync-scheduler-pro.vercel.app/" target="_blank" rel="noopener noreferrer">Tester l'application</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("valeurs")}
                className="text-left text-muted-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Nos Valeurs
              </button>
              <button
                onClick={() => scrollToSection("qui-sommes-nous")}
                className="text-left text-muted-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Qui sommes-nous
              </button>
              <button
                onClick={() => scrollToSection("fonctionnalites")}
                className="text-left text-muted-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Fonctionnalités
              </button>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="outline" asChild>
                  <a href="https://docs.google.com/forms/d/1FyN-hLRR-HpBi9Yf7kUqTLk1cv94bJMT2k-g5EidRTE/edit" target="_blank" rel="noopener noreferrer">Donnez votre avis</a>
                </Button>
                <Button variant="accent" asChild>
                  <a href="https://medisync-scheduler-pro.vercel.app/" target="_blank" rel="noopener noreferrer">Tester l'application</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
