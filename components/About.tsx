"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Lightbulb, Heart, Users } from "lucide-react";
import Link from "next/link";


const values = [
  { icon: Lightbulb, label: "Innovación educativa", iconColor: "text-accent-500", iconBg: "bg-accent-50" },
  { icon: Heart, label: "Inclusión y diversidad", iconColor: "text-red-500", iconBg: "bg-red-50" },
  { icon: Users, label: "Comunidad y familia", iconColor: "text-blue-500", iconBg: "bg-blue-50" },
  { icon: CheckCircle2, label: "Excelencia académica", iconColor: "text-emerald-500", iconBg: "bg-emerald-50" },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const floatingVariants = {
  animate: { y: [0, -10, 0], transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    /* HOME-C-ABOUT */
    <section id="nosotros" data-block="HOME-C-ABOUT" className="relative w-full overflow-hidden bg-gradient-to-br from-blue-100/80 via-primary-100/50 to-blue-100/70 py-12 lg:py-24" ref={ref}>

      {/* Decorative background circles */}
      <motion.div className="absolute top-8 left-8 w-32 h-32 rounded-full bg-primary-100/20 pointer-events-none" variants={floatingVariants} animate="animate" />
      <motion.div className="absolute top-4 right-1/3 w-16 h-16 rounded-full bg-accent-100/25 pointer-events-none" variants={floatingVariants} animate="animate" style={{ animationDelay: "0.5s" }} />
      <motion.div className="absolute top-1/2 left-4 w-10 h-10 rounded-full bg-blue-100/30 pointer-events-none" variants={floatingVariants} animate="animate" />
      <motion.div className="absolute bottom-24 left-1/4 w-24 h-24 rounded-full bg-primary-100/15 pointer-events-none" variants={floatingVariants} animate="animate" />
      <motion.div className="absolute top-1/3 right-8 w-20 h-20 rounded-full bg-accent-100/20 pointer-events-none" variants={floatingVariants} animate="animate" />
      <motion.div className="absolute bottom-8 right-1/4 w-14 h-14 rounded-full bg-blue-100/25 pointer-events-none" variants={floatingVariants} animate="animate" />
      <motion.div className="absolute bottom-1/3 right-12 w-8 h-8 rounded-full bg-primary-200/20 pointer-events-none" variants={floatingVariants} animate="animate" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main grid: text left, collage right */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left: Text Content */}
          <motion.div
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Editable: Badge (C1) */}
            <motion.span
              variants={itemVariants}
              className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-bold rounded-full mb-4 uppercase tracking-wider"
            >
              Quiénes Somos
            </motion.span>

            {/* Editable: Headline (C2) */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-700 leading-tight tracking-tight mb-6"
            >
              Más de{" "}
              <span className="text-gradient">30 años</span>{" "}
              formando el futuro
            </motion.h2>

            {/* Editable: Text (C3) */}
            <motion.p variants={itemVariants} className="text-gray-600 text-base leading-relaxed mb-4 max-w-lg">
              Colegio Panamericano nació en{" "}
              <span className="font-bold text-primary-700 text-lg">1996</span>{" "}
              con una visión clara: ofrecer{" "}
              <span className="text-accent-500 font-semibold">educación de calidad</span>{" "}
              accesible para todos los guatemaltecos, sin importar su ubicación. Hoy somos{" "}
              <span className="relative inline-block">
                <span className="relative z-10 font-semibold text-primary-700">pioneros en educación en línea</span>
                <span className="absolute bottom-0 left-0 w-full h-[6px] bg-accent-100 -z-0 rounded" />
              </span>
              , manteniendo los más altos estándares académicos.
            </motion.p>

            {/* Editable: Text (C4) */}
            <motion.p variants={itemVariants} className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg">
              Nuestra propuesta combina{" "}
              <span className="text-gray-700 font-medium">experiencia institucional</span>{" "}
              con{" "}
              <span className="text-gray-700 font-medium">tecnología moderna</span>
              , creando un ambiente donde cada estudiante alcanza su{" "}
              <span className="text-accent-500 font-semibold">máximo potencial</span>{" "}
              — en aula o desde cualquier lugar del país.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
              {/* Editable: Button (C5) */}
              <Link href="#programas" className="btn-primary px-6 py-3 text-sm">
                Ver Programas
              </Link>
              {/* Editable: Button (C6) */}
              <Link href="#contacto" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-700 text-primary-700 font-semibold rounded-full transition-all duration-300 hover:bg-primary-700 hover:text-white text-sm">
                Contáctanos
              </Link>
            </motion.div>

            {/* Editable: Value Cards (C7–C10) — edit the `values` array above */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3 w-full max-w-lg">
              {values.map((val) => {
                const Icon = val.icon;
                return (
                  <div key={val.label} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm">
                    <div className={`w-9 h-9 rounded-lg ${val.iconBg} flex items-center justify-center flex-shrink-0`}>
                      <Icon size={18} className={val.iconColor} />
                    </div>
                    <span className="text-sm font-semibold text-gray-700 leading-tight">{val.label}</span>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right: Image Collage — 2 cards with slight overlap */}
          <motion.div
            className="relative h-[420px] sm:h-[500px] w-full"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Decorative shapes */}
            <motion.div
              className="absolute -top-3 right-8 h-12 w-12 rounded-full bg-primary-200/40"
              variants={floatingVariants}
              animate="animate"
            />
            <motion.div
              className="absolute bottom-16 left-4 h-8 w-8 rounded-lg bg-accent-200/50 rotate-12"
              variants={floatingVariants}
              animate="animate"
            />

            {/* Image C1: About image left */}
            <motion.div
              className="absolute left-0 top-0 w-[56%] h-[85%] rounded-3xl shadow-xl overflow-hidden z-0"
              variants={imageVariants}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700&auto=format&fit=crop&q=80"
                alt="Estudiante aprendiendo en línea"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Image C2: About image right */}
            <motion.div
              className="absolute right-0 top-14 w-[52%] h-[75%] rounded-3xl shadow-2xl overflow-hidden z-10"
              variants={imageVariants}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=700&auto=format&fit=crop&q=80"
                alt="Clase virtual en línea"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Editable: Floating Badge (C11) */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3 border border-gray-100 whitespace-nowrap"
            >
              <div className="w-9 h-9 rounded-xl bg-accent-50 flex items-center justify-center flex-shrink-0">
                <GraduationCap />
              </div>
              <div>
                <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">Graduados</p>
                <p className="text-sm font-bold text-primary-700">Miles de éxitos 🎓</p>
              </div>
            </motion.div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}

function GraduationCap() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7A3842" strokeWidth="2">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}
