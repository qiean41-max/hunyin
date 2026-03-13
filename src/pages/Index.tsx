import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-cover.png";
import ceremonyImage from "@/assets/ceremony-portrait.jpg";
import receptionImage from "@/assets/reception-portrait.png";
import ctaImage from "@/assets/gallery-2.png";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header transparent />

        {/* 主视觉 */}
        <section className="relative h-screen flex items-start justify-center pt-[18vh] overflow-hidden">
          <motion.img
            src={heroImage}
            alt="日落时分，Tina和Jackson在山顶相拥"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 text-center text-white px-4">
            <motion.p
              className="font-sans text-sm md:text-base tracking-widest uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              我们要结婚啦！
            </motion.p>
            <motion.h1
              className="font-serif text-6xl md:text-8xl lg:text-9xl font-light mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Tina & Jackson
            </motion.h1>
            <motion.p
              className="font-sans text-lg md:text-xl tracking-[0.3em]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              2026 . 03 . 13
            </motion.p>
          </div>
        </section>

        {/* 婚礼详情 */}
        <section className="bg-[#f0efed] py-32 md:py-44 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {/* 仪式 */}
            <ScrollReveal direction="left">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2 overflow-hidden">
                  <img src={ceremonyImage} alt="新人在户外自然环境中的正装照" className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="text-center flex-1">
                  <h2 className="font-serif text-6xl md:text-7xl font-light mb-5">婚礼仪式</h2>
                  <p className="font-serif text-2xl md:text-3xl mb-5">下午 4:00</p>
                  <div className="font-sans text-sm text-muted-foreground space-y-1.5 mb-5">
                    <p>基督教江苏路堂</p>
                    <p>南京</p>
                  </div>
                  <a
                    href="https://ditu.amap.com/search?query=基督教江苏路堂"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm underline underline-offset-4 text-foreground hover:text-muted-foreground transition-colors"
                  >
                    查看地图
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* 晚宴 */}
            <ScrollReveal direction="right" delay={0.15}>
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2 overflow-hidden md:order-last">
                  <img src={receptionImage} alt="新娘在户外自然环境中的飘逸长裙照" className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="text-center flex-1">
                  <h2 className="font-serif text-6xl md:text-7xl font-light mb-5">婚宴晚会</h2>
                  <p className="font-serif text-2xl md:text-3xl mb-5">下午 4:30 - 10:00</p>
                  <div className="font-sans text-sm text-muted-foreground space-y-1.5 mb-5">
                    <p>南京世茂滨江希尔顿酒店</p>
                    <p>南京</p>
                  </div>
                  <a
                    href="https://ditu.amap.com/search?query=南京世茂滨江希尔顿酒店"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm underline underline-offset-4 text-foreground hover:text-muted-foreground transition-colors"
                  >
                    查看地图
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 我们的故事入口 */}
        <ScrollReveal>
          <section className="py-20 md:py-28 text-center px-6">
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-8">了解我们的故事</h2>
            <Link
              to="/story"
              className="inline-block bg-foreground text-background px-10 py-3 text-sm font-sans tracking-widest uppercase hover:bg-foreground/80 hover:scale-105 transition-all duration-300"
            >
              我们的故事
            </Link>
          </section>
        </ScrollReveal>

        {/* 全宽图片 */}
        <ScrollReveal direction="none" duration={0.8}>
          <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
            <motion.img
              src={ctaImage}
              alt="新人在山间户外的合影"
              className="absolute inset-0 w-full h-full object-cover"
              whileInView={{ scale: 1 }}
              initial={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-black/20" />
          </section>
        </ScrollReveal>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
