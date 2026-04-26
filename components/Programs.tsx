"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { BookOpen, Users, Monitor, Star, ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

/* Editable: Program Cards (D4–D7) — level, grades, description, highlights per card */
const programs = [
  {
    id: "primaria",
    icon: BookOpen,
    level: "Primaria",
    grades: "1° a 6° Primaria",
    description:
      "Construimos las bases del conocimiento con metodologías activas y lúdicas que desarrollan el pensamiento crítico desde temprana edad.",
    highlights: [
      "Matemáticas y lectura reforzadas",
      "Inglés desde primer grado",
      "Artes y deportes integrados",
      "Tecnología educativa",
    ],
    color: "from-blue-500 to-blue-600",
    bgLight: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-200",
  },
  {
    id: "basico",
    icon: Users,
    level: "Nivel Básico",
    grades: "1° a 3° Grado",
    description:
      "Potenciamos habilidades analíticas y sociales preparando a nuestros estudiantes para los desafíos del diversificado y la vida adulta.",
    highlights: [
      "Ciencias y matemáticas avanzadas",
      "Formación ciudadana",
      "Habilidades de comunicación",
      "Orientación vocacional",
    ],
    color: "from-emerald-500 to-emerald-600",
    bgLight: "bg-emerald-50",
    textColor: "text-emerald-600",
    borderColor: "border-emerald-200",
  },
  {
    id: "diversificado",
    icon: Star,
    level: "Diversificado",
    grades: "4° y 5° Bachillerato",
    gradesExtra: "4° y 5° y 6° Peritos",
    description:
      "Formación técnica y humanística para ingresar a la universidad y al mercado laboral con las competencias del siglo XXI.",
    highlights: [
      "Bachillerato en Ciencias con Especialidad",
      "Tecnología de vanguardia",
      "Bachillerato en Computación",
      "Preparación universitaria",
    ],
    color: "from-accent-500 to-accent-600",
    bgLight: "bg-accent-50",
    textColor: "text-accent-600",
    borderColor: "border-orange-200",
  },
  {
    id: "adultos",
    icon: Monitor,
    level: "Adultos",
    grades: "Programa de Fines de Semana",
    description:
      "Diseñado para personas que trabajan. Completa tu educación formal sin sacrificar tu vida profesional o familiar.",
    highlights: [
      "Clases sábados y domingos",
      "También 100% en línea",
      "Ritmo flexible y adaptado",
      "Orientación laboral incluida",
    ],
    color: "from-purple-500 to-purple-600",
    bgLight: "bg-purple-50",
    textColor: "text-purple-600",
    borderColor: "border-purple-200",
  },
];

export default function Programs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    /* HOME-D-SERVICES */
    <section id="programas" data-block="HOME-D-SERVICES" className="py-12 lg:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          {/* Editable: Badge (D1) */}
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-bold rounded-full mb-4 uppercase tracking-wider">
            Oferta Educativa
          </span>
          {/* Editable: Headline (D2) */}
          <h2 className="section-title mb-4">
            Programas para{" "}
            <span className="text-gradient">cada etapa</span>
          </h2>
          {/* Editable: Text (D3) */}
          <p className="section-subtitle mx-auto text-center">
            Desde primaria hasta diversificado, y programas especiales para
            adultos. Educación de calidad en cada nivel.
          </p>
        </motion.div>

        {/* Mobile: girl image card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:hidden mb-8 rounded-3xl bg-gradient-to-br from-primary-50 via-blue-50 to-accent-50 overflow-hidden flex flex-col items-center pt-5 pb-0"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-2.5 shadow-md text-center mb-4">
            <p className="text-[10px] font-bold text-primary-600 uppercase tracking-wider">Niveles educativos</p>
            <p className="text-base font-extrabold text-primary-800">Primaria → Diversificado</p>
          </div>
          <Image
            src="/student3.png"
            alt="Estudiante"
            width={240}
            height={300}
            sizes="55vw"
            className="w-auto object-contain object-bottom drop-shadow-2xl"
            style={{ height: "220px" }}
          />
        </motion.div>

        {/* Main layout: image panel left + cards right */}
        <div className="grid lg:grid-cols-[42%_58%] gap-8 items-stretch">

          {/* Left: Student image panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hidden lg:flex relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary-50 via-blue-50 to-accent-50 items-end justify-center min-h-[620px]"
          >
            {/* Decorative blobs */}
            <div className="absolute top-6 left-6 w-32 h-32 bg-primary-200 rounded-full opacity-40 blur-2xl" />
            <div className="absolute bottom-12 right-4 w-24 h-24 bg-accent-200 rounded-full opacity-50 blur-xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-blue-100 rounded-full opacity-30 blur-3xl" />

            {/* Badge top */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-md text-center">
              <p className="text-xs font-bold text-primary-600 uppercase tracking-wider">Niveles educativos</p>
              <p className="text-2xl font-extrabold text-primary-800">Primaria → Diversificado</p>
            </div>

            {/* Image D1: Programs student image (student3.png) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="absolute bottom-0 inset-x-0 z-10 flex justify-center"
            >
              <Image
                src="/student3.png"
                alt="Estudiante"
                width={480}
                height={710}
                sizes="(max-width: 1024px) 0px, 420px"
                className="h-[420px] w-auto drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Right: 2×2 card grid */}
          <div className="grid sm:grid-cols-2 gap-5 content-start items-start">
            {programs.map((prog, i) => {
              const Icon = prog.icon;
              const isExpanded = expanded === prog.id;
              return (
                <div
                  key={prog.id}
                  className={`relative group rounded-3xl border-2 ${prog.borderColor} bg-white shadow-md hover:shadow-xl transition-[box-shadow] duration-300 overflow-hidden cursor-pointer`}
                  onClick={() => setExpanded(isExpanded ? null : prog.id)}
                >
                  {/* Top gradient bar */}
                  <div className={`h-1.5 bg-gradient-to-r ${prog.color} w-full`} />

                  <div className="p-5 flex flex-col min-h-[240px]">
                    {/* Icon */}
                    <div
                      className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${prog.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}
                    >
                      <Icon size={20} className="text-white" />
                    </div>

                    {/* Level & grades */}
                    <h3 className="font-extrabold text-lg text-primary-700 mb-0.5">
                      {prog.level}
                    </h3>
                    <p className={`text-xs font-bold uppercase tracking-wider ${prog.textColor} mb-0.5`}>
                      {prog.grades}
                    </p>
                    {"gradesExtra" in prog && (
                      <p className={`text-xs font-bold uppercase tracking-wider ${prog.textColor} mb-3`}>
                        {(prog as typeof prog & { gradesExtra: string }).gradesExtra}
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-4">
                      {prog.description}
                    </p>

                    {/* Expand toggle */}
                    <button
                      className={`flex items-center gap-1 text-xs font-bold ${prog.textColor} hover:opacity-80 transition-opacity mt-auto`}
                    >
                      {isExpanded ? "Ver menos" : "Ver más"}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Expandable highlights */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-4 space-y-2">
                            {prog.highlights.map((h) => (
                              <li
                                key={h}
                                className="flex items-center gap-2 text-sm text-gray-600"
                              >
                                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${prog.color} flex-shrink-0`} />
                                {h}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          {/* Editable: Button (D8) */}
          <a
            href="#contacto"
            className="btn-primary-dark group text-base"
          >
            Solicitar Información
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
