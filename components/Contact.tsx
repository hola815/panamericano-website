"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CalendarCheck,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

/* Editable: Contact Info Cards (H4–H6) — label, value, href per card */
const contactInfo = [
  {
    icon: Phone,
    label: "Teléfono",
    value: "3017-5602",
    href: "tel:+50230175602",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Mail,
    label: "Correo",
    value: "info@panamericano.edu.gt",
    href: "mailto:info@panamericano.edu.gt",
    color: "text-accent-500",
    bg: "bg-accent-50",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Guatemala, a nivel nacional",
    href: "#",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  program: string;
  message: string;
  type: "info" | "cita";
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formType, setFormType] = useState<"info" | "cita">("info");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
    type: "info",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — replace with actual API call
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    /* HOME-H-CTA-CONTACT */
    <section id="contacto" data-block="HOME-H-CTA-CONTACT" className="py-12 lg:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          {/* Editable: Badge (H1) */}
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-bold rounded-full mb-4 uppercase tracking-wider">
            Contáctanos
          </span>
          {/* Editable: Headline (H2) */}
          <h2 className="section-title mb-4">
            Estamos para{" "}
            <span className="text-gradient">ayudarte</span>
          </h2>
          {/* Editable: Text (H3) */}
          <p className="section-subtitle mx-auto text-center">
            Escríbenos o reserva una cita. Te respondemos a la brevedad.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact cards */}
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div
                    className={`w-11 h-11 rounded-xl ${info.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={20} className={info.color} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium mb-0.5">
                      {info.label}
                    </p>
                    <p className="font-semibold text-gray-800 text-sm">
                      {info.value}
                    </p>
                  </div>
                </a>
              );
            })}

            {/* Social media */}
            <div className="p-5 rounded-2xl bg-primary-700 text-white">
              <p className="font-bold mb-4">Síguenos en redes</p>
              <div className="flex gap-3">
                {[
                  {
                    name: "Facebook", href: "https://www.facebook.com/colpanamericano.gt",
                    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>,
                  },
                  {
                    name: "Instagram", href: "https://www.instagram.com/panamericano_gt?igsh=bXpzNmJjeXBkcjA4",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" /></svg>,
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-16 bg-emerald-50 rounded-3xl border border-emerald-100"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} className="text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-primary-700 mb-2">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-gray-600 max-w-xs">
                  Gracias por contactarnos. Te responderemos pronto.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-primary-600 font-semibold hover:text-primary-800"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8">
                {/* Type toggle */}
                <div className="flex rounded-xl bg-gray-100 p-1 mb-8">
                  <button
                    onClick={() => setFormType("info")}
                    className={`flex-1 flex items-center justify-center gap-1 sm:gap-2 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${
                      formType === "info"
                        ? "bg-white text-primary-700 shadow-md"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <MessageSquare size={14} />
                    Solicitar Información
                  </button>
                  <button
                    onClick={() => setFormType("cita")}
                    className={`flex-1 flex items-center justify-center gap-1 sm:gap-2 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${
                      formType === "cita"
                        ? "bg-white text-primary-700 shadow-md"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <CalendarCheck size={14} />
                    Reservar Cita
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        placeholder="Tu nombre"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none text-sm transition-all duration-200 bg-gray-50 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        placeholder="Tu número de teléfono"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none text-sm transition-all duration-200 bg-gray-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="tu@correo.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none text-sm transition-all duration-200 bg-gray-50 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Programa de interés
                    </label>
                    <select
                      value={formData.program}
                      onChange={(e) => updateField("program", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none text-sm transition-all duration-200 bg-gray-50 focus:bg-white text-gray-700"
                    >
                      <option value="">Selecciona un programa</option>
                      <option>Primaria</option>
                      <option>Nivel Básico</option>
                      <option>Diversificado</option>
                      <option>Educación para Adultos</option>
                    </select>
                  </div>

                  {formType === "cita" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Fecha preferida para la cita
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none text-sm transition-all duration-200 bg-gray-50 focus:bg-white"
                      />
                    </motion.div>
                  )}

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Mensaje
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      placeholder="¿En qué podemos ayudarte?"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none text-sm transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-primary-700 hover:bg-primary-600 disabled:bg-gray-300 text-white font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 disabled:translate-y-0 disabled:shadow-none"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      <>
                        <Send size={17} />
                        {formType === "cita" ? "Reservar Cita" : "Enviar Mensaje"}
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
