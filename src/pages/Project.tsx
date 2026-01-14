import { motion } from "framer-motion";
import { Heart, Rocket, Code, Star } from "lucide-react";
import { SEO } from "@/components/seo/SEO";

const values = [
  {
    icon: Heart,
    title: "Pasión por el anime",
    description: "Nyra nace del amor por el anime y la frustración con las plataformas existentes. Queremos ofrecer algo mejor.",
  },
  {
    icon: Code,
    title: "Simplicidad ante todo",
    description: "Cada línea de código está pensada para hacer la app más rápida y fácil de usar. Menos es más.",
  },
  {
    icon: Star,
    title: "Experiencia de usuario",
    description: "El usuario es el centro de todo. Cada decisión de diseño busca mejorar tu experiencia viendo anime.",
  },
];

const roadmap = [
  {
    status: "completed",
    title: "Lanzamiento inicial",
    description: "Primera versión con catálogo, búsqueda y seguimiento de animes.",
  },
  {
    status: "in-progress",
    title: "Sincronización en la nube",
    description: "Guarda tu progreso y accede desde cualquier dispositivo.",
  },
  {
    status: "planned",
    title: "Listas personalizadas",
    description: "Crea y comparte tus propias listas de animes.",
  },
  {
    status: "planned",
    title: "Notificaciones de nuevos episodios",
    description: "Recibe alertas cuando salgan nuevos capítulos de tus series.",
  },
];

const Project = () => {
  return (
    <>
      <SEO
        title="Sobre el proyecto"
        description="Conoce la filosofía detrás de Nyra, nuestros valores y el roadmap de desarrollo. Un proyecto creado por fans del anime, para fans del anime."
        keywords="proyecto nyra, sobre nyra, desarrollo nyra, roadmap nyra, filosofía nyra"
        url="/project"
      />

      <section className="py-20 md:py-32 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-glow opacity-30 pointer-events-none" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              El proyecto <span className="text-gradient">Nyra</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Más que una app, Nyra es una visión de cómo debería ser el consumo de anime en móvil. 
              Simple, rápido y sin fricciones.
            </p>
          </motion.div>

          
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="nyra-card rounded-2xl p-8 border border-border/50 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>

          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                <Rocket className="w-8 h-8 text-primary" />
                Roadmap
              </h2>
              <p className="text-muted-foreground">
                Lo que hemos logrado y hacia dónde vamos.
              </p>
            </div>

            <div className="space-y-4">
              {roadmap.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`nyra-card rounded-xl p-6 border ${
                    item.status === "completed"
                      ? "border-green-500/30 bg-green-500/5"
                      : item.status === "in-progress"
                      ? "border-primary/30 bg-primary/5"
                      : "border-border/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-3 h-3 rounded-full mt-1.5 ${
                        item.status === "completed"
                          ? "bg-green-500"
                          : item.status === "in-progress"
                          ? "bg-primary animate-pulse"
                          : "bg-muted-foreground/30"
                      }`}
                    />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{item.title}</h3>
                        {item.status === "completed" && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-500">
                            Completado
                          </span>
                        )}
                        {item.status === "in-progress" && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                            En progreso
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Project;
