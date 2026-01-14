import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Zap, 
  Eye, 
  BookmarkCheck, 
  Smartphone, 
  ChevronRight,
  Sparkles,
  Target,
  Users,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/seo/SEO";

const problemCards = [
  { emoji: "🐌", text: "Apps lentas que tardan en cargar" },
  { emoji: "📢", text: "Anuncios molestos por todos lados" },
  { emoji: "🤯", text: "Interfaces confusas y sobrecargadas" },
  { emoji: "😤", text: "Distracciones constantes" },
];

const features = [
  {
    icon: Zap,
    title: "Eficiente",
    description: "Carga una vez. La siguiente es instantánea.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Eye,
    title: "Sin distracciones",
    description: "Solo contenido. Nada más.",
    color: "from-primary to-nyra-purple-light",
  },
  {
    icon: BookmarkCheck,
    title: "Tu progreso",
    description: "Seguimiento automático.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Smartphone,
    title: "Mobile-first",
    description: "Diseñada para tu móvil.",
    color: "from-blue-500 to-cyan-500",
  },
];

const audienceItems = [
  { icon: "🎌", text: "Fans del anime" },
  { icon: "📱", text: "Usuarios móviles" },
  { icon: "⚡", text: "Amantes de la eficiencia y comodidad" },
  { icon: "✨", text: "Diseño lovers" },
];

const About = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <>
      <SEO
        title="Qué es Nyra"
        description="Conoce Nyra, la app Android para ver anime de forma simple y rápida. Descubre qué problema resuelve y por qué es diferente a otras plataformas."
        keywords="qué es nyra, sobre nyra, app anime android, nyra anime, plataforma anime"
        url="/about"
      />

      
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-glow opacity-40 pointer-events-none" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">La app que el anime necesita</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Tu anime favorito,
              <br />
              <span className="text-gradient">sin complicaciones</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Nyra es una aplicación Android que te permite descubrir, ver y llevar seguimiento de anime 
              con una experiencia <span className="text-foreground font-medium">rápida, limpia y sin distracciones</span>.
            </p>
          </motion.div>
        </div>
      </section>

      
      <section className="py-16 md:py-24 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">El problema</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              ¿Cansado de las apps de anime actuales?
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {problemCards.map((card, index) => (
              <motion.div
                key={card.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                className="nyra-card rounded-2xl p-6 border border-red-500/20 bg-red-500/5 text-center cursor-default"
              >
                <span className="text-4xl mb-3 block">{card.emoji}</span>
                <p className="text-sm text-muted-foreground">{card.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-2xl md:text-3xl font-bold">
              Nyra es la <span className="text-gradient">solución</span>
            </p>
          </motion.div>
        </div>
      </section>

      
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            
            <div className="space-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveFeature(index)}
                  className={`nyra-card rounded-xl p-5 border cursor-pointer transition-all duration-300 ${
                    activeFeature === index 
                      ? "border-primary/50 bg-primary/10" 
                      : "border-border/50 hover:border-primary/30"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shrink-0`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform ${activeFeature === index ? "text-primary rotate-90" : "text-muted-foreground"}`} />
                  </div>
                </motion.div>
              ))}
            </div>

            
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="nyra-card rounded-3xl p-10 border border-primary/30 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-glow opacity-30 pointer-events-none" />
                  <div className="relative z-10 text-center">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${features[activeFeature].color} flex items-center justify-center mx-auto mb-6 nyra-glow`}>
                      {(() => {
                        const Icon = features[activeFeature].icon;
                        return <Icon className="w-10 h-10 text-white" />;
                      })()}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{features[activeFeature].title}</h3>
                    <p className="text-muted-foreground text-lg">{features[activeFeature].description}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Para ti</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              ¿Nyra es para ti?
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {audienceItems.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="nyra-card rounded-full px-6 py-3 border border-border/50 flex items-center gap-3 cursor-default"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center text-muted-foreground mt-8 text-lg"
          >
            Si te identificas con alguno, Nyra es <span className="text-primary font-medium">definitivamente</span> para ti.
          </motion.p>
        </div>
      </section>

      
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="nyra-card rounded-3xl p-10 md:p-16 text-center relative overflow-hidden max-w-4xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-glow opacity-40 pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Listo para probarlo?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-lg">
                Descarga Nyra gratis y experimenta el anime como debería ser.
              </p>
              <Button asChild size="lg" className="nyra-button-glow text-base">
                <Link to="/download" className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Descargar Nyra
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
