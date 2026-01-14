import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Download, Sparkles, Zap, Eye, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/seo/SEO";
import heroImage from "@/assets/hero-phone-mockup.jpg";

const features = [
  {
    icon: Zap,
    title: "Rápido y fluido",
    description: "Navegación instantánea sin tiempos de carga innecesarios.",
  },
  {
    icon: Eye,
    title: "Sin distracciones",
    description: "Interfaz limpia enfocada únicamente en el contenido.",
  },
  {
    icon: Sparkles,
    title: "Seguimiento fácil",
    description: "Marca tus animes y lleva control de lo que ves.",
  },
];

const Index = () => {
  return (
    <>
      <SEO
        title="Nyra - Anime, simple y sin distracciones"
        description="Nyra es una app Android para ver anime de forma simple, rápida y sin distracciones. Descubre, organiza y disfruta tu contenido favorito."
        keywords="nyra, anime app, ver anime android, app anime español, streaming anime, anime sin anuncios"
        url="/"
      />
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow opacity-60 pointer-events-none" />
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Actualmente solo en Android</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Anime, <span className="text-gradient">simple</span> y sin distracciones
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
                Descubre, organiza y disfruta tu anime favorito con una experiencia fluida y enfocada en lo que realmente importa: el contenido.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="nyra-button-glow text-base">
                  <Link to="/download" className="flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Descargar APK
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <Link to="/about" className="flex items-center gap-2">
                    Conocer más
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-radial from-primary/30 via-transparent to-transparent blur-3xl" />
                <img
                src={heroImage}
                alt="Nyra App - Interfaz de la aplicación de anime"
                className="relative z-10 w-full max-w-md"
              />

              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Por qué elegir <span className="text-gradient">Nyra</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Diseñada desde cero pensando en ti. Sin anuncios molestos, sin interfaces confusas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="nyra-card p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button asChild variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10">
              <Link to="/about" className="flex items-center gap-2">
                Conoce más sobre Nyra
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      
      <section className="py-20 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="nyra-card rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-glow opacity-40 pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Empieza a ver anime <span className="text-gradient">ahora</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Descarga Nyra gratis y transforma tu experiencia de ver anime en Android.
              </p>
              <Button asChild size="lg" className="nyra-button-glow text-base">
                <Link to="/download" className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Descargar APK gratis
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
