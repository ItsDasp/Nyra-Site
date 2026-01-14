import { Link } from "react-router-dom";
import { Github, Twitter, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-foreground">Nyra</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Anime, simple y sin distracciones. Tu compañero perfecto para descubrir y disfrutar anime en Android.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Qué es Nyra
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Proyecto</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/project" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nyra
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Hecho con <Heart className="w-4 h-4 text-primary fill-primary" /> por el equipo Nyra
          </p>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Nyra. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
