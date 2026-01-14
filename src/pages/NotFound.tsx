import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/seo/SEO";

const NotFound = () => {
  return (
    <>
      <SEO
        title="Página no encontrada"
        description="La página que buscas no existe. Vuelve a la página principal de Nyra."
        url="/404"
      />

      <section className="min-h-[70vh] flex items-center justify-center py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-md mx-auto"
          >
            <div className="text-8xl font-bold text-gradient mb-6">404</div>
            <h1 className="text-2xl font-bold mb-4">Página no encontrada</h1>
            <p className="text-muted-foreground mb-8">
              Parece que te has perdido. La página que buscas no existe o ha sido movida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link to="/" className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Ir al inicio
                </Link>
              </Button>
              <Button variant="outline" onClick={() => window.history.back()}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver atrás
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
