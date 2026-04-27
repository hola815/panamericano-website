"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, Tag } from "lucide-react";

/* Editable: News Posts (F3–F5) — title, excerpt, image URL, date, category, slug per post */
const posts = [
  {
    id: 1,
    slug: "nueva-plataforma-educativa",
    title: "Colegio Panamericano lanza nueva plataforma educativa virtual",
    excerpt:
      "Incorporamos herramientas de última generación para mejorar la experiencia de aprendizaje en línea de todos nuestros estudiantes.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    date: "15 de marzo, 2026",
    category: "Tecnología",
    categoryColor: "bg-blue-100 text-blue-700",
    readTime: "3 min",
  },
  {
    id: 2,
    slug: "ceremonia-graduacion-2025",
    title: "Ceremonia de graduación 2025: Celebrando el futuro de Guatemala",
    excerpt:
      "Más de 80 estudiantes recibieron sus diplomas en una emotiva ceremonia que celebra años de dedicación y esfuerzo.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
    date: "12 de enero, 2026",
    category: "Eventos",
    categoryColor: "bg-accent-100 text-accent-700",
    readTime: "4 min",
  },
  {
    id: 3,
    slug: "educacion-para-adultos",
    title: "Educación para adultos: Nunca es tarde para aprender",
    excerpt:
      "Conoce cómo nuestro programa de fin de semana está transformando las vidas de personas que trabajan en todo el país.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
    date: "5 de diciembre, 2025",
    category: "Adultos",
    categoryColor: "bg-purple-100 text-purple-700",
    readTime: "5 min",
  },
];

export default function News() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    /* HOME-F-NEWS */
    <section id="noticias" data-block="HOME-F-NEWS" data-section="Startseite / Neuigkeiten" className="py-12 lg:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            {/* Editable: Badge (F1) */}
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-bold rounded-full mb-4 uppercase tracking-wider">
              Blog y Noticias
            </span>
            {/* Editable: Headline (F2) */}
            <h2 data-editable="headline" className="section-title">
              Lo último del{" "}
              <span className="text-gradient">Panamericano</span>
            </h2>
          </div>
          <Link
            href="#noticias"
            className="flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-800 transition-colors whitespace-nowrap group"
          >
            Ver todas
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* Posts grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article
              key={post.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-[transform,box-shadow] duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden flex-shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${post.categoryColor}`}
                  >
                    <Tag size={10} />
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span>·</span>
                  <span>{post.readTime} lectura</span>
                </div>

                <h3 className="font-bold text-primary-700 text-lg leading-snug mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                <div className="mt-5 pt-4 border-t border-gray-100">
                  <Link
                    href={`/noticias/${post.slug}`}
                    className="flex items-center gap-2 text-accent-600 font-semibold text-sm hover:text-accent-700 transition-colors group/link"
                  >
                    Leer artículo
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
