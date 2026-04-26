"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Wifi, Clock, MapPin, Shield, ArrowRight, Monitor } from "lucide-react";

/* Editable: Feature Cards (E4–E7) — title, description per card */
const features = [
  {
    icon: Wifi,
    title: "Sin límites geográficos",
    description:
      "Estudia desde cualquier lugar de Guatemala. Solo necesitas internet y ganas de aprender.",
  },
  {
    icon: Clock,
    title: "Horarios flexibles",
    description:
      "Adapta tu educación a tu vida. Clases y materiales disponibles según tu disponibilidad.",
  },
  {
    icon: Shield,
    title: "Calidad garantizada",
    description:
      "El mismo nivel académico que nuestra modalidad presencial, con los mismos títulos oficiales.",
  },
  {
    icon: MapPin,
    title: "Cobertura nacional",
    description:
      "Llega a estudiantes en todos los departamentos de Guatemala, en zonas urbanas y rurales.",
  },
];

export default function OnlineEducation() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    /* HOME-E-ONLINE */
    <section id="online" data-block="HOME-E-ONLINE" className="py-12 lg:py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 gradient-dark" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 90% 50%, #F97316 0%, transparent 60%)",
        }}
      />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Editable: Badge (E1) */}
            <span className="inline-block px-4 py-1.5 bg-accent-500/20 text-accent-400 text-sm font-bold rounded-full mb-6 uppercase tracking-wider border border-accent-500/30">
              Educación en Línea
            </span>
            {/* Editable: Headline (E2) */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Estudia desde{" "}
              <span className="text-gradient">donde estés</span>
            </h2>
            {/* Editable: Text (E3) */}
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Somos pioneros en educación en línea en Guatemala. Nuestra
              plataforma virtual permite a estudiantes de todo el país acceder
              a educación formal de calidad sin importar su ubicación.
            </p>

            {/* Editable: Feature Cards (E4–E7) — edit the `features` array above */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-xl bg-accent-500/20 flex items-center justify-center mb-3">
                      <Icon size={18} className="text-accent-400" />
                    </div>
                    <h4 className="font-bold text-white text-sm mb-1.5">
                      {feature.title}
                    </h4>
                    <p className="text-white/60 text-xs leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Editable: Button (E8) */}
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-accent-500/25 hover:-translate-y-0.5 group"
            >
              Empieza Hoy
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* Right: Visual mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Browser mockup */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-3 shadow-2xl">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-3 py-2.5 border-b border-white/10 mb-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                </div>
                <div className="flex-1 bg-white/10 rounded-lg px-3 py-1 text-xs text-white/40">
                  plataforma.panamericano.edu.gt
                </div>
              </div>

              {/* Mock content */}
              <div className="p-4 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-500/30 flex items-center justify-center">
                    <Monitor size={18} className="text-accent-400" />
                  </div>
                  <div>
                    <div className="h-2.5 w-32 bg-white/20 rounded-full mb-1.5" />
                    <div className="h-2 w-20 bg-white/10 rounded-full" />
                  </div>
                </div>

                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="bg-white/5 rounded-2xl p-4 flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-500/30 flex-shrink-0" />
                    <div className="flex-1 space-y-2">
                      <div className="h-2.5 bg-white/20 rounded-full w-3/4" />
                      <div className="h-2 bg-white/10 rounded-full w-1/2" />
                    </div>
                    <div className="w-16 h-7 rounded-full bg-accent-500/40 flex items-center justify-center">
                      <div className="h-2 w-8 bg-accent-400/60 rounded-full" />
                    </div>
                  </div>
                ))}

                {/* Progress bar */}
                <div className="bg-white/5 rounded-2xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="h-2 w-24 bg-white/20 rounded-full" />
                    <span className="text-accent-400 text-xs font-bold">72%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[72%] bg-gradient-to-r from-accent-500 to-accent-400 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating notification */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -left-8 bg-white rounded-2xl shadow-2xl px-4 py-3 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                <span className="text-lg">✓</span>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">¡Clase completada!</p>
                <p className="text-xs text-gray-500">Matemáticas • Nivel Básico</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
