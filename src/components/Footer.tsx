const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-3">
              <span className="font-display font-bold text-xl text-primary-foreground">
                Medi<span className="text-secondary">Sync</span>
              </span>
            </div>
            <p className="text-primary-foreground/60 text-sm italic">
              La simplicité au service de la vie
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-primary-foreground/80 text-sm">
            <a href="#valeurs" className="hover:text-secondary transition-colors">Nos Valeurs</a>
            <a href="#qui-sommes-nous" className="hover:text-secondary transition-colors">Qui sommes-nous</a>
            <a href="#fonctionnalites" className="hover:text-secondary transition-colors">Fonctionnalités</a>
          </div>

          {/* Copyright */}
          <div className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} MediSync. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
