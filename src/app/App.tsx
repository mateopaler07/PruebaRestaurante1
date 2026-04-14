import { motion } from "motion/react";
import {
  Phone,
  MapPin,
  Instagram,
  Clock,
  Star,
  UtensilsCrossed,
} from "lucide-react";

export default function App() {
  const menuItems = [
    {
      category: "Carnes",
      description: "Cortes premium y preparaciones gourmet",
      items: [
        {
          name: "Milanesa Napolitana",
          description:
            "Con jamón, tomate y mozzarella gratinada",
          price: "$4.500",
        },
        {
          name: "Bife de Chorizo",
          description:
            "Con chimichurri de la casa y papas rústicas",
          price: "$5.200",
        },
        {
          name: "Suprema Maryland",
          description:
            "Rellena con queso, jamón y champignones",
          price: "$4.800",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1747641356811-a85911427dab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      category: "Pastas",
      description: "Pastas frescas artesanales",
      items: [
        {
          name: "Ravioles Caseros",
          description:
            "Rellenos de ricota y espinaca con salsa a elección",
          price: "$3.800",
        },
        {
          name: "Ñoquis de Papa",
          description: "Con salsa bolognesa o cuatro quesos",
          price: "$3.500",
        },
        {
          name: "Fetuccini Alfredo",
          description: "Con crema, queso parmesano y pollo",
          price: "$4.200",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1764586119076-61711e8ed25a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      category: "Menú Infantil",
      description: "Opciones pensadas para los más pequeños",
      items: [
        {
          name: "Milanesa con Papas",
          description: "Porción reducida, crujiente y tierna",
          price: "$2.500",
        },
        {
          name: "Fideos con Manteca",
          description: "O salsa de tomate casera",
          price: "$2.200",
        },
        {
          name: "Hamburguesa Mini",
          description: "Con papas fritas y jugo",
          price: "$2.800",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      category: "Tragos",
      description: "Coctelería clásica y de autor",
      items: [
        {
          name: "Old Fashioned",
          description: "Whisky, bitter, azúcar y naranja",
          price: "$3.200",
        },
        {
          name: "Negroni",
          description: "Gin, Campari, Vermut rojo",
          price: "$3.000",
        },
        {
          name: "Mojito de la Casa",
          description: "Ron, menta fresca, lima y azúcar",
          price: "$2.800",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1768508948990-f5866f800fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
  ];

  const reviews = [
    {
      name: "María González",
      stars: 5,
      comment:
        "Excelente comida y atención. Las milanesas son espectaculares, muy recomendable!",
    },
    {
      name: "Carlos Rodríguez",
      stars: 5,
      comment:
        "Ambiente cálido y acogedor. Los ravioles caseros son los mejores que he probado.",
    },
    {
      name: "Ana Martínez",
      stars: 5,
      comment:
        "Perfecto para ir en familia. El menú infantil es variado y de calidad.",
    },
    {
      name: "Juan López",
      stars: 5,
      comment:
        "Los tragos están muy bien preparados y el servicio es impecable.",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--warm-cream)]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1772479020020-9bd8d2f577d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Don Quijote Gourmet"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[var(--warm-cream)]"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6"
          >
            <UtensilsCrossed
              className="w-16 h-16 mx-auto text-[var(--golden-wheat)] mb-4"
              strokeWidth={1.5}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Don Quijote Gourmet
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Una experiencia gastronómica donde la tradición se
            encuentra con el sabor gourmet
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="tel:+5491123456789"
              className="group relative px-10 py-4 bg-[var(--rust-brown)] text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-auto"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2 font-medium text-lg">
                <Phone className="w-5 h-5" />
                Reservar Ahora
              </span>
              <div className="absolute inset-0 bg-[var(--golden-wheat)] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>

            <a
              href="https://www.pedidosya.com.ar/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-4 bg-white text-[var(--rust-brown)] rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-white w-full sm:w-auto"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2 font-medium text-lg">
                Pedir por PedidosYa
              </span>
              <div className="absolute inset-0 bg-[var(--golden-wheat)] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-white/60 text-sm"
          >
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1.5 h-1.5 bg-white/60 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      

      {/* Menu Section */}
      <section className="py-24 px-6 bg-[var(--warm-cream)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="text-5xl md:text-6xl mb-6 text-[var(--rust-brown)]"
              style={{
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Nuestro Menú
            </h2>
            <div className="w-20 h-1 bg-[var(--golden-wheat)] mx-auto mb-6"></div>
            <p className="text-xl text-[var(--charcoal)]/70 max-w-2xl mx-auto">
              Descubre nuestras especialidades, preparadas con
              dedicación y los mejores ingredientes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuItems.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: sectionIndex * 0.1,
                  duration: 0.8,
                }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={section.image}
                    alt={section.category}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3
                      className="text-3xl font-bold text-white mb-2"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                      }}
                    >
                      {section.category}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {section.description}
                    </p>
                  </div>
                </div>

                <div className="p-8">
                  <div className="space-y-6">
                    {section.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="border-b border-[var(--rust-brown)]/10 pb-4 last:border-0 last:pb-0"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-[var(--rust-brown)] text-lg">
                            {item.name}
                          </h4>
                          <span className="font-bold text-[var(--golden-wheat)] text-lg">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-[var(--charcoal)]/60 text-sm">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="text-5xl md:text-6xl mb-6 text-[var(--rust-brown)]"
              style={{
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Lo Que Dicen Nuestros Clientes
            </h2>
            <div className="w-20 h-1 bg-[var(--golden-wheat)] mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                }}
                className="bg-[var(--warm-cream)] p-8 rounded-2xl border border-[var(--rust-brown)]/10 hover:border-[var(--golden-wheat)] transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[var(--golden-wheat)] text-[var(--golden-wheat)]"
                    />
                  ))}
                </div>
                <p className="text-[var(--charcoal)]/80 mb-4 italic leading-relaxed">
                  "{review.comment}"
                </p>
                <p className="font-semibold text-[var(--rust-brown)]">
                  — {review.name}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <a
              href="https://maps.app.goo.gl/AAeE23sRKWvf5xcw7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--rust-brown)] text-white rounded-full hover:bg-[var(--golden-wheat)] transition-colors duration-300"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Ver Más Reseñas en Google
              <Star className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="py-24 px-6 bg-[var(--warm-cream)]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="text-5xl md:text-6xl mb-6 text-[var(--rust-brown)]"
              style={{
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Visitanos
            </h2>
            <div className="w-20 h-1 bg-[var(--golden-wheat)] mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <h3
                  className="text-2xl font-bold mb-6 text-[var(--rust-brown)]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  Información de Contacto
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[var(--rust-brown)] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[var(--rust-brown)] mb-1">
                        Dirección
                      </h4>
                      <p className="text-[var(--charcoal)]/70">
                        Arquitecto Walter Gonzalez 41, Atlántida
                        Canelones
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[var(--rust-brown)] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[var(--rust-brown)] mb-1">
                        Teléfono
                      </h4>
                      <p className="text-[var(--charcoal)]/70">
                        +598 XXXXXXXX
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-[var(--rust-brown)] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[var(--rust-brown)] mb-1">
                        Horarios
                      </h4>
                      <p className="text-[var(--charcoal)]/70">
                        Lunes a Domingo
                      </p>
                      <p className="text-[var(--charcoal)]/70">
                        12:00 - 15:30 | 20:00 - 00:00
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Instagram className="w-6 h-6 text-[var(--rust-brown)] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[var(--rust-brown)] mb-1">
                        Instagram
                      </h4>
                      <a
                        href="https://instagram.com/donquijotegourmet"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--golden-wheat)] hover:underline"
                      >
                        @donquijotegourmet
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-[var(--rust-brown)]/10">
                  <a
                    href="https://wa.me/5491123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    <Phone className="w-5 h-5" />
                    Contactar por WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg h-full min-h-[500px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.284540090332!2d-55.7627345!3d-34.7736115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959ff52620f7f965%3A0x9428f081fe4b7d5f!2sDon%20Quijote%20gourmet!5e0!3m2!1sen!2suy!4v1776184126362!5m2!1sen!2suy"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Don Quijote Gourmet"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-[var(--rust-brown)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, var(--golden-wheat) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2
            className="text-5xl md:text-6xl mb-6 text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            ¿Listo Para Vivir la Experiencia?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Reserva tu mesa o haz tu pedido ahora mismo
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="tel:+5491123456789"
              className="group relative px-12 py-5 bg-white text-[var(--rust-brown)] rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-auto"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2 font-semibold text-lg">
                <Phone className="w-6 h-6" />
                Reservar Mesa
              </span>
              <div className="absolute inset-0 bg-[var(--golden-wheat)] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>

            <a
              href="https://www.pedidosya.com.ar/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-12 py-5 bg-transparent text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 border-2 border-white w-full sm:w-auto"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2 font-semibold text-lg">
                Pedir por PedidosYa
              </span>
              <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="absolute inset-0 flex items-center justify-center gap-2 font-semibold text-lg text-[var(--rust-brown)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                Pedir por PedidosYa
              </span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[var(--charcoal)] text-white/70 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <h3
              className="text-2xl font-bold text-white mb-2"
              style={{
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Don Quijote Gourmet
            </h3>
            <p className="text-sm">
              Una aventura gastronómica en cada plato
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--golden-wheat)] transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="tel:+5491123456789"
              className="hover:text-[var(--golden-wheat)] transition-colors"
            >
              <Phone className="w-6 h-6" />
            </a>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--golden-wheat)] transition-colors"
            >
              <MapPin className="w-6 h-6" />
            </a>
          </div>

          <div className="text-sm">
            <p>
              &copy; 2026 Don Quijote Gourmet. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}