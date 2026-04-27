import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { notFound } from "next/navigation";

const articles = [
  {
    slug: "nueva-plataforma-educativa",
    title: "Colegio Panamericano lanza nueva plataforma educativa virtual",
    date: "15 de marzo, 2026",
    category: "Tecnología",
    categoryColor: "bg-blue-100 text-blue-700",
    readTime: "3 min",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    author: "Equipo Panamericano",
    content: [
      {
        type: "lead",
        text: "Colegio Panamericano da un paso decisivo hacia el futuro de la educación en Guatemala con el lanzamiento oficial de su nueva plataforma educativa virtual, diseñada para brindar una experiencia de aprendizaje moderna, accesible y efectiva para todos sus estudiantes.",
      },
      {
        type: "heading",
        text: "Una plataforma pensada para el estudiante guatemalteco",
      },
      {
        type: "paragraph",
        text: "La nueva plataforma incorpora herramientas de última generación que permiten a los estudiantes acceder a sus clases, materiales didácticos, tareas y evaluaciones desde cualquier dispositivo con conexión a internet. Esto representa una evolución significativa respecto al sistema anterior, que limitaba el acceso a ciertos formatos y dispositivos.",
      },
      {
        type: "paragraph",
        text: "El sistema fue desarrollado con especial atención a las necesidades del contexto guatemalteco, incluyendo compatibilidad con conexiones de baja velocidad, interfaz en español con terminología local, y soporte técnico disponible en horario extendido.",
      },
      {
        type: "heading",
        text: "Funcionalidades destacadas",
      },
      {
        type: "list",
        items: [
          "Clases en vivo y grabadas con calidad HD",
          "Sistema de entrega y corrección de tareas en línea",
          "Chat directo con docentes y compañeros de clase",
          "Seguimiento de progreso académico en tiempo real",
          "Biblioteca digital con más de 500 recursos educativos",
          "Compatibilidad con Android, iOS y navegadores web",
        ],
      },
      {
        type: "paragraph",
        text: "\"Queríamos crear una herramienta que no solo sea funcional, sino que inspire a nuestros estudiantes a aprender con entusiasmo desde donde estén\", comentó la Directora Académica del colegio. \"Este lanzamiento es el resultado de meses de trabajo conjunto entre docentes, estudiantes y especialistas en tecnología educativa.\"",
      },
      {
        type: "heading",
        text: "Capacitación docente y soporte continuo",
      },
      {
        type: "paragraph",
        text: "Para garantizar el éxito de la implementación, todos los docentes del Colegio Panamericano participaron en un programa intensivo de capacitación durante las últimas semanas. El equipo pedagógico aprendió a crear contenidos interactivos, gestionar aulas virtuales y brindar retroalimentación efectiva a través de la nueva plataforma.",
      },
      {
        type: "paragraph",
        text: "Los estudiantes que ya han tenido acceso a la plataforma en fase de prueba han expresado su satisfacción con la nueva experiencia. La facilidad de navegación y la posibilidad de estudiar a su propio ritmo son los aspectos más valorados hasta el momento.",
      },
      {
        type: "quote",
        text: "Por fin puedo estudiar desde mi casa con la misma calidad que en el colegio. La plataforma es muy fácil de usar y mis maestros responden rápido.",
        author: "María José, estudiante de Diversificado",
      },
      {
        type: "paragraph",
        text: "El acceso a la plataforma está disponible para todos los estudiantes matriculados a partir de este mes. Para más información sobre cómo ingresar, puedes consultar la sección de Accesos Rápidos en nuestra página web o comunicarte directamente con la administración del colegio.",
      },
    ],
  },
  {
    slug: "ceremonia-graduacion-2025",
    title: "Ceremonia de graduación 2025: Celebrando el futuro de Guatemala",
    date: "12 de enero, 2026",
    category: "Eventos",
    categoryColor: "bg-accent-100 text-accent-700",
    readTime: "4 min",
    image: "/Bild8.png",
    author: "Equipo Panamericano",
    content: [
      {
        type: "lead",
        text: "Con orgullo y emoción, el Colegio Panamericano celebró su ceremonia de graduación 2025, en la que más de 80 estudiantes recibieron sus diplomas y dieron un paso fundamental hacia su futuro profesional y personal.",
      },
      {
        type: "heading",
        text: "Un momento histórico para las familias guatemaltecas",
      },
      {
        type: "paragraph",
        text: "La ceremonia se llevó a cabo en un ambiente cargado de alegría y gratitud, con la presencia de familiares, docentes y autoridades del colegio. Cada graduado representó años de esfuerzo, dedicación y superación, muchos de ellos compaginando sus estudios con responsabilidades laborales y familiares.",
      },
      {
        type: "paragraph",
        text: "Entre los graduados de esta promoción se encuentran estudiantes de diversificado, del programa de adultos y del nivel básico, provenientes de distintos departamentos de Guatemala. Esto refleja el alcance nacional del Colegio Panamericano y su compromiso con la educación inclusiva.",
      },
      {
        type: "heading",
        text: "Palabras que inspiraron",
      },
      {
        type: "quote",
        text: "Hoy ustedes demuestran que la educación no tiene barreras. Llevan con ustedes más que un diploma: llevan la capacidad de transformar sus comunidades.",
        author: "Director General, Colegio Panamericano",
      },
      {
        type: "paragraph",
        text: "El discurso de los graduados estuvo a cargo de Josué Ramírez, representante de la promoción, quien compartió su historia personal de haber trabajado de madrugada para poder estudiar por las tardes. Su historia emocionó a todos los presentes y se convirtió en el símbolo de esta generación de graduados.",
      },
      {
        type: "heading",
        text: "Estadísticas de la promoción 2025",
      },
      {
        type: "list",
        items: [
          "83 graduados en total",
          "47 mujeres y 36 hombres",
          "Procedentes de 12 departamentos de Guatemala",
          "32 graduados del programa de adultos",
          "15 graduados con honores académicos",
          "Edad promedio: 24 años",
        ],
      },
      {
        type: "paragraph",
        text: "Felicitamos a todos los graduados y sus familias por este logro extraordinario. El Colegio Panamericano seguirá siendo su casa, y las puertas siempre estarán abiertas para quienes quieran continuar su formación o buscar nuevas oportunidades.",
      },
    ],
  },
  {
    slug: "educacion-para-adultos",
    title: "Educación para adultos: Nunca es tarde para aprender",
    date: "5 de diciembre, 2025",
    category: "Adultos",
    categoryColor: "bg-purple-100 text-purple-700",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80",
    author: "Equipo Panamericano",
    content: [
      {
        type: "lead",
        text: "El programa de educación para adultos del Colegio Panamericano continúa transformando vidas en toda Guatemala. Cada fin de semana, cientos de personas que trabajan durante la semana se dan la oportunidad que siempre quisieron: completar su educación formal.",
      },
      {
        type: "heading",
        text: "¿Por qué estudiar de adulto?",
      },
      {
        type: "paragraph",
        text: "Para muchos guatemaltecos, las circunstancias de vida no permitieron terminar la escuela en el tiempo convencional. Responsabilidades familiares, necesidades económicas o simplemente la falta de oportunidades cercanas fueron barreras que hoy el Colegio Panamericano ayuda a derribar.",
      },
      {
        type: "paragraph",
        text: "Nuestro programa de educación para adultos está diseñado para adaptarse a la realidad de personas que trabajan. Las clases se imparten los sábados y domingos, con horarios que permiten descansar entre semana y dedicar el fin de semana al aprendizaje sin sacrificar el empleo ni la familia.",
      },
      {
        type: "heading",
        text: "Historias reales de transformación",
      },
      {
        type: "quote",
        text: "Tengo 38 años y siempre pensé que era demasiado tarde. Hoy tengo mi diploma de diversificado y mis hijos se sienten orgullosos de mí. Eso no tiene precio.",
        author: "Carlos Ajú, graduado del programa de adultos",
      },
      {
        type: "paragraph",
        text: "Historias como la de Carlos se repiten cada semestre. Madres de familia, trabajadores del campo, empleados de comercios y profesionales que buscan formalizar sus conocimientos encuentran en el programa de adultos del Colegio Panamericano una segunda oportunidad.",
      },
      {
        type: "heading",
        text: "¿Qué ofrece el programa?",
      },
      {
        type: "list",
        items: [
          "Clases presenciales sábados y domingos",
          "Modalidad 100% en línea disponible",
          "Docentes especializados en educación para adultos",
          "Materiales didácticos incluidos",
          "Flexibilidad para retomar en caso de ausencia",
          "Acompañamiento psicopedagógico personalizado",
          "Certificados y diplomas con validez oficial",
        ],
      },
      {
        type: "paragraph",
        text: "El Colegio Panamericano ofrece los niveles de primaria, básico y diversificado dentro del programa de adultos, cubriendo así todas las etapas de la educación formal. Independientemente del punto de partida de cada estudiante, existe un camino adaptado para llegar al diploma.",
      },
      {
        type: "heading",
        text: "Inscripciones abiertas",
      },
      {
        type: "paragraph",
        text: "Las inscripciones para el próximo ciclo escolar están abiertas. Si conoces a alguien que quiera retomar sus estudios, comparte esta información. Un diploma puede cambiar una vida, y en el Colegio Panamericano estamos listos para acompañar ese cambio.",
      },
    ],
  },
];

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <div className="bg-primary-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium">
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>
          <Link href="/#noticias" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
            Blog y Noticias
          </Link>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative h-[40vh] md:h-[55vh] overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto max-w-3xl">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-4 ${article.categoryColor}`}>
              <Tag size={10} />
              {article.category}
            </span>
            <h1 className="text-2xl md:text-4xl font-extrabold text-white leading-tight">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Article content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-3xl">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-10 pb-8 border-b border-gray-100">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} />
            {article.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            {article.readTime} de lectura
          </span>
          <span className="text-gray-500 font-medium">{article.author}</span>
        </div>

        {/* Body */}
        <div className="space-y-6">
          {article.content.map((block, i) => {
            if (block.type === "lead") {
              return (
                <p key={i} className="text-xl text-gray-700 leading-relaxed font-medium">
                  {block.text}
                </p>
              );
            }
            if (block.type === "heading") {
              return (
                <h2 key={i} className="text-2xl font-bold text-primary-700 mt-10 mb-2">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "paragraph") {
              return (
                <p key={i} className="text-gray-600 leading-relaxed text-lg">
                  {block.text}
                </p>
              );
            }
            if (block.type === "list" && block.items) {
              return (
                <ul key={i} className="space-y-2 pl-2">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-600 text-lg">
                      <span className="mt-2 w-2 h-2 rounded-full bg-accent-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            if (block.type === "quote") {
              return (
                <blockquote key={i} className="border-l-4 border-accent-500 pl-6 py-2 my-8">
                  <p className="text-xl text-gray-700 italic leading-relaxed mb-3">
                    &ldquo;{block.text}&rdquo;
                  </p>
                  {block.author && (
                    <cite className="text-sm text-gray-400 font-medium not-italic">
                      — {block.author}
                    </cite>
                  )}
                </blockquote>
              );
            }
            return null;
          })}
        </div>

        {/* Back button */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <Link
            href="/#noticias"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-700 hover:bg-primary-600 text-white font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <ArrowLeft size={16} />
            Volver a noticias
          </Link>
        </div>
      </div>
    </div>
  );
}
