"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

/* HOME-E-GALLERY (inactive — not rendered in page.tsx, reserved for future use) */
/* Editable: Gallery Items (I1–I6) — src, alt, category per image */
const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
    alt: "Aula de clases moderna",
    category: "Instalaciones",
    span: "col-span-2",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80",
    alt: "Estudiantes en clase",
    category: "Estudiantes",
    span: "",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&q=80",
    alt: "Biblioteca",
    category: "Instalaciones",
    span: "",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80",
    alt: "Clase en línea",
    category: "Online",
    span: "",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=400&q=80",
    alt: "Graduación",
    category: "Eventos",
    span: "",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80",
    alt: "Actividades escolares",
    category: "Actividades",
    span: "col-span-2",
  },
];

const categories = ["Todas", "Instalaciones", "Estudiantes", "Online", "Eventos", "Actividades"];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [lightboxItem, setLightboxItem] = useState<(typeof galleryItems)[0] | null>(null);

  const filtered =
    activeCategory === "Todas"
      ? galleryItems
      : galleryItems.filter((g) => g.category === activeCategory);

  return (
    /* HOME-E-GALLERY */
    <section id="galeria" data-block="HOME-E-GALLERY" className="py-24 bg-slate-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-bold rounded-full mb-4 uppercase tracking-wider">
            Galería
          </span>
          <h2 className="section-title mb-4">
            Nuestra{" "}
            <span className="text-gradient">comunidad</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Un vistazo a la vida escolar en Colegio Panamericano.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary-700 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-primary-300 hover:text-primary-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry-style grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`relative group rounded-2xl overflow-hidden cursor-pointer ${
                  item.span === "col-span-2" ? "col-span-2 row-span-2" : ""
                }`}
                onClick={() => setLightboxItem(item)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ZoomIn size={18} className="text-white" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-2.5 py-1 bg-black/40 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Note about real photos */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-xs text-gray-400 mt-8"
        >
          * Imágenes de muestra — serán reemplazadas con fotografías del colegio
        </motion.p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxItem(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={() => setLightboxItem(null)}
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxItem.src}
                alt={lightboxItem.alt}
                fill
                className="object-cover"
                sizes="90vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
