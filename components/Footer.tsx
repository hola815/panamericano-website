import Link from "next/link";
import Image from "next/image";
import React from "react";

/* Editable: Footer Link Groups (FT2) — add/remove links per category */
const footerLinks = {
  Institución: [
    { label: "Quiénes Somos", href: "#nosotros" },
    { label: "Historia", href: "#nosotros" },
    { label: "Valores", href: "#nosotros" },
    { label: "Noticias", href: "#noticias" },
  ],
  Programas: [
    { label: "Primaria", href: "#programas" },
    { label: "Nivel Básico", href: "#programas" },
    { label: "Diversificado", href: "#programas" },
    { label: "Educación para Adultos", href: "#programas" },
    { label: "Modalidad en Línea", href: "#online" },
  ],
  Accesos: [
    { label: "Correo Institucional", href: "https://login.microsoftonline.com/common/oauth2/authorize?client_id=00000002-0000-0ff1-ce00-000000000000&redirect_uri=https%3a%2f%2foutlook.office365.com%2fowa%2f&resource=00000002-0000-0ff1-ce00-000000000000&response_mode=form_post&response_type=code+id_token&scope=openid&msafed=1&msaredir=1&client-request-id=cba61882-f855-c3e6-572b-0e6db2110540&protectedtoken=true&claims=%7b%22id_token%22%3a%7b%22xms_cc%22%3a%7b%22values%22%3a%5b%22CP1%22%5d%7d%7d%7d&domain_hint=mi.panamericano.edu.gt&nonce=638226634765546630.514794e9-78ce-4679-8160-314fe22cba1b&state=DYtbDoQgDABBj-EZQB6lheNUrBs_1I3Zjde3HzOZn7HGmFEZFBtUhjDXlBAzEJYCGsGXCNRAmqPaxQFSczVicDnCJin1heNi9Z3m6-H52P2XTz7k3jufl5f17z-_Fw&sso_reload=true" },
    { label: "Plataforma Virtual", href: "https://corporacion.educativo.gt/ui/" },
    { label: "Sistema Administrativo", href: "https://accounts.google.com/v3/signin/identifier?dsh=S-653376387%3A1687066741735440&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&hd=panamericano.edu.gt&osid=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession" },
  ],
  Contacto: [
    { label: "Formulario de Contacto", href: "#contacto" },
    { label: "Reservar Cita", href: "#contacto" },
    { label: "WhatsApp", href: "https://wa.me/50230175602" },
    { label: "3017-5602", href: "tel:+50230175602" },
  ],
};

/* Editable: Social Links (FT3) — name, href per platform */
const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/colpanamericano.gt",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/panamericano_gt?igsh=bXpzNmJjeXBkcjA4",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    /* GLOBAL-FOOTER */
    <footer id="global-footer" data-block="GLOBAL-FOOTER" className="bg-primary-900 text-white">

      {/* Main footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="mb-6">
              {/* Editable: Image (FT1) — logo src="/logo.png" */}
              <Image
                src="/logo.png"
                alt="Colegio Panamericano"
                width={180}
                height={50}
                className="object-contain h-12 w-auto brightness-0 invert"
              />
            </div>
            {/* Editable: Text (FT1) — footer brand tagline */}
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Educación sin fronteras: innovación, inclusión y futuro. Formando
              líderes guatemaltecos desde 1996.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-6">
                {title}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 text-sm hover:text-white hover:text-accent-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Editable: Text (FT4) — copyright line */}
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {year} Educación Global, S.A. — Colegio Panamericano. Todos los
            derechos reservados.
          </p>

          {/* Social icons */}
          <div className="flex gap-2">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-accent-500 flex items-center justify-center transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.icon as React.ReactNode}
              </a>
            ))}
          </div>

          <div className="flex gap-4 text-xs text-white/40">
            <Link href="#" className="hover:text-white/70 transition-colors">
              Política de Privacidad
            </Link>
            <Link href="#" className="hover:text-white/70 transition-colors">
              Términos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
