import { motion } from "framer-motion";
import { Download as DownloadIcon, Smartphone, Shield, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/seo/SEO";

const requirements = [
  "Android 12 o superior",
  "Aproximadamente 150 MB de espacio",
  "Conexión a internet",
];

const Download = () => {
  return (
    <>
      <SEO
        title="Descargar Nyra"
        description="Descarga Nyra APK gratis para Android. Instala la app de anime más rápida y simple. Compatible con Android 7.0+."
        keywords="descargar nyra, nyra apk, descargar app anime, nyra android, instalar nyra"
        url="/download"
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
              Descargar <span className="text-gradient">Nyra</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Obtén la última versión de Nyra y empieza a disfrutar del anime como nunca antes.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="nyra-card rounded-2xl p-8 md:p-10 border border-primary/30 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-glow opacity-20 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-nyra-purple-light flex items-center justify-center nyra-button-glow">
                  <img
                    src="./icon.png"
                    alt="Nyra icon"
                    className="w-10 h-10 object-contain"
                  />
                </div>

                  <div>
                    <h2 className="text-2xl font-bold">Nyra</h2>
                    <p className="text-muted-foreground">Versión 2.0.0</p>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full nyra-button-glow text-base mb-6"
                    onClick={async () => {
                      try {
                        const res = await fetch("/actual.json");
                        if (!res.ok) throw new Error("No se pudo cargar actual.json");

                        const data = await res.json();

                        const version = data.currentVersion;
                        if (!version) throw new Error("Versión no definida");

                        const apkPath = `./apks/Nyra_v${version}.apk`;

                        window.location.href = apkPath;
                      } catch (err) {
                        console.error(err);
                        alert("No se pudo iniciar la descarga");
                      }
                    }}
                >
                  <DownloadIcon className="w-5 h-5 mr-2" />
                  Descargar APK
                </Button>

                <div className="space-y-3">
                  <h3 className="font-medium flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-primary" />
                    Requisitos
                  </h3>
                  <ul className="space-y-2">
                    {requirements.map((req) => (
                      <li key={req} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              
              <div className="nyra-card rounded-2xl p-6 border border-yellow-500/30 bg-yellow-500/5">
                <div className="flex gap-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-500 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-yellow-500 mb-2">Instalación desde fuentes externas</h3>
                    <p className="text-sm text-muted-foreground">
                      Para instalar Nyra, necesitarás habilitar la instalación desde fuentes desconocidas en tu dispositivo. 
                      Ve a Configuración → Seguridad → Fuentes desconocidas.
                    </p>
                  </div>
                </div>
              </div>

              
              <div className="nyra-card rounded-2xl p-6 border border-border/50">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Cómo instalar
                </h3>
                <ol className="space-y-4">
                  {[
                    "Descarga el archivo APK desde el botón de 'descarga'",
                    "Abre el archivo descargado",
                    "Si se te solicita, permite la instalación desde esta fuente",
                    "Espera a que termine la instalación",
                    "¡Abre Nyra y disfruta!",
                  ].map((step, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm font-medium flex items-center justify-center shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Download;
