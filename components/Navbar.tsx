"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

/* Editable: Nav Links (N2) — label, href, and optional children dropdown items */
const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  {
    label: "Programas",
    href: "#programas",
    children: [
      { label: "Primaria", href: "#programas" },
      { label: "Nivel Básico", href: "#programas" },
      { label: "Diversificado", href: "#programas" },
      { label: "Educación para Adultos", href: "#programas" },
    ],
  },
  { label: "En Línea", href: "#online" },
  { label: "Noticias", href: "#noticias" },
  { label: "Accesos", href: "#accesos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  const { scrollY } = useScroll();
  const rawLogoHeight = useTransform(scrollY, [0, 120], [72, 40]);
  const logoHeight = useSpring(rawLogoHeight, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* GLOBAL-NAV */}
      <motion.header
        id="global-nav"
        data-block="GLOBAL-NAV"
        data-component="Header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Editable: Image (N1) — logo src="/logo.png" */}
            <Link href="#inicio" onClick={() => { setMobileOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
              <motion.img
                src="/logo.png"
                alt="Colegio Panamericano"
                width={220}
                height={62}
                style={isDesktop ? { height: logoHeight, width: "auto" } : undefined}
                className={`object-contain transition-all duration-300 ${
                  isDesktop ? "" : "h-12 w-auto"
                } ${scrolled ? "" : "brightness-0 invert"}`}
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" data-component="Navigation">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`nav-link flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                        scrolled
                          ? "text-gray-700 hover:text-primary-700 hover:bg-primary-50"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-52 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block px-5 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 font-medium transition-colors duration-150 first:rounded-t-2xl last:rounded-b-2xl"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`nav-link px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                      scrolled
                        ? "text-gray-700 hover:text-primary-700 hover:bg-primary-50"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              {/* Editable: Button (N3) */}
              <Link
                href="#contacto"
                className="hidden sm:inline-flex items-center px-5 py-2.5 bg-accent-500 hover:bg-accent-600 text-white text-sm font-bold rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Inscríbete
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
                  scrolled
                    ? "text-primary-700 hover:bg-primary-50"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label="Menú"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[55] bg-primary-700 lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-6 pt-6 pb-4">
              <Image
                src="/logo.png"
                alt="Colegio Panamericano"
                width={180}
                height={50}
                className="object-contain h-10 w-auto brightness-0 invert"
              />
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-white/80 hover:text-white rounded-lg hover:bg-white/10"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1 px-6 py-6 space-y-1 overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-4 text-white font-semibold text-lg rounded-xl hover:bg-white/10 transition-colors duration-150 border-b border-white/10"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-2.5 text-white/70 font-medium text-base rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                        >
                          → {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>

            <div className="px-6 pb-10">
              <Link
                href="#contacto"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold text-lg rounded-2xl transition-colors"
              >
                Inscríbete Ahora
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
