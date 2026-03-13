import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import travelHero from "@/assets/hero-cover.png";

const lodgingCards = [
  {
    type: "民宿",
    content: (
      <>
        <p className="font-sans text-sm text-muted-foreground mb-6">
          如果您需要住宿，以下是活动附近的详情
        </p>
        <a
          href="https://ditu.amap.com/search?query=南京世茂滨江希尔顿酒店"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-foreground text-background px-8 py-3 text-xs tracking-widest uppercase font-sans hover:bg-foreground/80 hover:scale-105 transition-all duration-300 w-full"
        >
          查看房源
        </a>
      </>
    ),
  },
];

const Travel = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header transparent />

        {/* 主视觉 */}
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
          <motion.img
            src={travelHero}
            alt="新人户外相拥的黑白照片"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white">
            <motion.h1
              className="font-serif text-5xl md:text-7xl font-light mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              交通住宿
            </motion.h1>
            <motion.p
              className="font-sans text-lg md:text-xl font-light tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              大部分活动将在南京世茂滨江希尔顿酒店附近举行
            </motion.p>
          </div>
        </section>

        {/* 住宿推荐 */}
        <section className="py-20 md:py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-center mb-16">住宿推荐</h2>
            </ScrollReveal>

            <div className="flex justify-center">
              {lodgingCards.map((card, i) => (
                <ScrollReveal key={card.type} delay={i * 0.12}>
                  <div className="bg-transparent border border-border p-6 text-center hover:-translate-y-1 transition-all duration-300 w-full max-w-md">
                    <p className="text-sm uppercase tracking-wider text-sage-dark font-semibold mb-4">{card.type}</p>
                    {card.content}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Travel;
