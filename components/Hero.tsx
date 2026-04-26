"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, ChevronDown } from "lucide-react";

const floatingShapes = [
  { size: 300, top: "-10%", left: "-5%", delay: 0, duration: 8 },
  { size: 200, top: "60%", right: "-5%", delay: 2, duration: 6 },
  { size: 150, top: "30%", left: "60%", delay: 1, duration: 7 },
  { size: 80, top: "70%", left: "20%", delay: 3, duration: 5 },
  { size: 120, top: "10%", left: "75%", delay: 1.5, duration: 9 },
];

export default function Hero() {
  return (
    /* HOME-A-HERO */
    <section
      id="inicio"
      data-block="HOME-A-HERO"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-dark" />

      {/* Animated mesh gradient overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% -20%, #0057B8 0%, transparent 60%), radial-gradient(ellipse 60% 60% at 80% 80%, #F97316 0%, transparent 50%)",
        }}
      />

      {/* Floating decorative circles */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-white/10 bg-white/5"
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: "left" in shape ? shape.left : undefined,
            right: "right" in shape ? shape.right : undefined,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 sm:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Editable: Badge (A1) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse-soft" />
            Educación innovadora desde 1996
          </motion.div>

          {/* Editable: Headline (A2) */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6"
          >
            Educación{" "}
            <br className="sm:hidden" />
            <span className="text-gradient">sin fronteras</span>
          </motion.h1>

          {/* Editable: Subheading (A3) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-white/75 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Innovación, inclusión y futuro. Formamos líderes desde primaria hasta
            diversificado, con modalidades presencial y{" "}
            <span className="text-white font-semibold">100% en línea</span> a
            nivel nacional.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Editable: Button (A4) */}
            <Link
              href="#programas"
              className="btn-primary text-base px-8 py-4 group"
            >
              Ver Programas
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            {/* Editable: Button (A5) */}
            <Link
              href="#nosotros"
              className="btn-outline text-base px-8 py-4 group"
            >
              <Play size={16} className="fill-white" />
              Conócenos
            </Link>
          </motion.div>

          {/* Editable: Quick Stats (A6, A7, A8) — value + label pairs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-14 flex flex-wrap justify-center gap-8 sm:gap-12"
          >
            {[
              { value: "+28", label: "Años de Experiencia" },
              { value: "100%", label: "Online Disponible" },
              { value: "Nacional", label: "Cobertura" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl sm:text-3xl font-extrabold text-white">
                  {stat.value}
                </p>
                <p className="text-sm text-white/60 font-medium mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="hidden sm:flex flex-col items-center gap-1 text-white/40 text-xs font-medium"
        >
          <span>Descubre más</span>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
