"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Monitor, LayoutDashboard, ArrowRight } from "lucide-react";

/* Editable: Access Cards (G4–G6) — title, description, href per card */
const accesos = [
  {
    icon: Mail,
    title: "Correo Institucional",
    description: "Accede a tu correo oficial del colegio",
    href: "https://login.microsoftonline.com/common/oauth2/authorize?client_id=00000002-0000-0ff1-ce00-000000000000&redirect_uri=https%3a%2f%2foutlook.office365.com%2fowa%2f&resource=00000002-0000-0ff1-ce00-000000000000&response_mode=form_post&response_type=code+id_token&scope=openid&msafed=1&msaredir=1&client-request-id=cba61882-f855-c3e6-572b-0e6db2110540&protectedtoken=true&claims=%7b%22id_token%22%3a%7b%22xms_cc%22%3a%7b%22values%22%3a%5b%22CP1%22%5d%7d%7d%7d&domain_hint=mi.panamericano.edu.gt&nonce=638226634765546630.514794e9-78ce-4679-8160-314fe22cba1b&state=DYtbDoQgDABBj-EZQB6lheNUrBs_1I3Zjde3HzOZn7HGmFEZFBtUhjDXlBAzEJYCGsGXCNRAmqPaxQFSczVicDnCJin1heNi9Z3m6-H52P2XTz7k3jufl5f17z-_Fw&sso_reload=true",
    color: "from-red-500 to-red-600",
    hoverColor: "hover:shadow-red-200",
    bgLight: "bg-red-50",
    textColor: "text-red-600",
  },
  {
    icon: Monitor,
    title: "Plataforma Virtual",
    description: "Clases, tareas y materiales educativos",
    href: "https://corporacion.educativo.gt/ui/",
    color: "from-primary-500 to-primary-700",
    hoverColor: "hover:shadow-blue-200",
    bgLight: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    icon: LayoutDashboard,
    title: "Sistema Administrativo",
    description: "Gestión académica y administrativa",
    href: "https://accounts.google.com/v3/signin/identifier?dsh=S-653376387%3A1687066741735440&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&hd=panamericano.edu.gt&osid=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession",
    color: "from-emerald-500 to-emerald-600",
    hoverColor: "hover:shadow-emerald-200",
    bgLight: "bg-emerald-50",
    textColor: "text-emerald-600",
  },
];

export default function Accesos() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    /* HOME-G-ACCESOS */
    <section id="accesos" data-block="HOME-G-ACCESOS" className="py-12 lg:py-24 bg-primary-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          {/* Editable: Badge (G1) */}
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-600 text-sm font-bold rounded-full mb-4 uppercase tracking-wider">
            Accesos Rápidos
          </span>
          {/* Editable: Headline (G2) */}
          <h2 className="section-title mb-4">
            Tus herramientas,{" "}
            <span className="text-gradient">siempre disponibles</span>
          </h2>
          {/* Editable: Text (G3) */}
          <p className="section-subtitle mx-auto text-center">
            Accede directamente a todas las plataformas educativas y
            administrativas del colegio.
          </p>
        </motion.div>

        {/* Access cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {accesos.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`group bg-white rounded-3xl p-6 shadow-md hover:shadow-xl ${item.hoverColor} transition-all duration-400 hover:-translate-y-2 border border-white flex flex-col`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={26} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="font-extrabold text-primary-700 text-lg mb-2 group-hover:text-primary-600">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {item.description}
                </p>

                {/* Arrow */}
                <div className={`flex items-center gap-2 mt-5 ${item.textColor} font-semibold text-sm`}>
                  Ingresar
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
