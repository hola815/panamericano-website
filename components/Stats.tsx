"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { GraduationCap, Globe, Monitor, Award } from "lucide-react";

function Counter({ to, suffix = "", prefix = "", duration = 2000 }: { to: number; suffix?: string; prefix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = to / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, to, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

/* Editable: Stat Cards (B1–B4) — value, prefix, suffix, label, description */
const stats = [
  {
    icon: Award,
    value: 30,
    prefix: "+",
    suffix: "",
    display: "text",
    label: "Años de Experiencia",
    description: "Desde 1996 transformando vidas",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: GraduationCap,
    value: 500,
    prefix: "+",
    suffix: "",
    display: "text",
    label: "Estudiantes Activos",
    description: "Aprendiendo y creciendo",
    color: "from-accent-500 to-accent-600",
  },
  {
    icon: Monitor,
    value: 100,
    prefix: "",
    suffix: "%",
    display: "text",
    label: "Online Disponible",
    description: "Educación sin fronteras físicas",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Globe,
    value: null,
    prefix: "",
    suffix: "",
    staticValue: "Nacional",
    label: "Cobertura",
    description: "En todo el país",
    color: "from-purple-500 to-purple-600",
  },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    /* HOME-B-STATS */
    <section id="home-b-stats" data-block="HOME-B-STATS" data-section="Startseite / Statistiken" className="relative py-10 lg:py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editable: Stat Cards (B1–B4) — edit the `stats` array above */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group relative bg-white rounded-2xl p-6 text-center shadow-md lg:hover:shadow-xl lg:hover:-translate-y-1 lg:transition-[transform,box-shadow] lg:duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Subtle hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 shadow-md`}
                >
                  <Icon size={22} className="text-white" />
                </div>

                <p className="text-3xl md:text-4xl font-extrabold text-primary-700 mb-1">
                  {stat.value !== null ? (
                    <Counter to={stat.value!} prefix={stat.prefix} suffix={stat.suffix} />
                  ) : (
                    stat.staticValue
                  )}
                </p>
                <p className="text-sm font-bold text-gray-800 mb-1">{stat.label}</p>
                <p className="text-xs text-gray-500 leading-snug">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
