import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Colegio Panamericano Guatemala | Educación en Línea y Presencial",
  description:
    "Colegio Panamericano en Guatemala: educación formal acreditada desde 1996. Primaria, básico, diversificado y educación para adultos en modalidad presencial y 100% en línea. Cobertura nacional.",
  keywords: [
    "colegio panamericano guatemala",
    "educación en línea guatemala",
    "colegio en línea guatemala",
    "estudiar desde casa guatemala",
    "primaria en línea guatemala",
    "básico en línea guatemala",
    "diversificado en línea guatemala",
    "educación para adultos guatemala",
    "título oficial guatemala",
    "colegio acreditado guatemala",
    "colegio a distancia guatemala",
    "educación formal guatemala",
    "colegio fin de semana guatemala",
    "diploma guatemala",
    "educación innovadora guatemala",
    "colegio panamericano",
    "panamericano educacion",
  ],
  authors: [{ name: "Colegio Panamericano" }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Colegio Panamericano Guatemala | Educación en Línea y Presencial",
    description:
      "Educación formal acreditada en Guatemala desde 1996. Primaria, básico, diversificado y adultos. Modalidad presencial y 100% en línea a nivel nacional.",
    locale: "es_GT",
    type: "website",
    siteName: "Colegio Panamericano",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 200,
        alt: "Colegio Panamericano Guatemala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colegio Panamericano Guatemala | Educación en Línea",
    description:
      "Educación formal acreditada en Guatemala. Primaria, básico, diversificado y adultos. Modalidad presencial y 100% en línea.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://www.panamericano.edu.gt",
  },
  other: {
    "geo.region": "GT",
    "geo.placename": "Guatemala",
    "geo.position": "14.6349;-90.5069",
    "ICBM": "14.6349, -90.5069",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Colegio Panamericano",
  alternateName: "Panamericano",
  url: "https://www.panamericano.edu.gt",
  logo: "https://www.panamericano.edu.gt/logo.png",
  description:
    "Institución educativa guatemalteca fundada en 1996, con modalidad presencial y 100% en línea. Ofrece educación desde primaria hasta diversificado, incluyendo programas para adultos.",
  foundingDate: "1996",
  areaServed: {
    "@type": "Country",
    name: "Guatemala",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "GT",
    addressLocality: "Guatemala",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+502-3017-5602",
    contactType: "admissions",
    availableLanguage: "Spanish",
  },
  sameAs: [
    "https://www.facebook.com/colpanamericano.gt",
    "https://www.instagram.com/panamericano_gt",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Primaria",
      credentialCategory: "degree",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Nivel Básico",
      credentialCategory: "degree",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Diversificado",
      credentialCategory: "degree",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={jakartaSans.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.history.scrollRestoration = "manual"; window.scrollTo(0, 0);`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
