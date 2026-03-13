import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import registryHero from "@/assets/hero-cover.png";

const Registry = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header transparent />

        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <motion.img
            src={registryHero}
            alt="新人在水边相视微笑"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <ScrollReveal className="relative z-10 max-w-2xl mx-auto text-center px-6">
            <div className="bg-background/80 backdrop-blur-sm p-10 md:p-14">
              <p className="font-sans text-base md:text-lg leading-relaxed text-foreground mb-8">
                你们中许多人从世界各地远道而来到南京与我们共庆，你们的到来就是我们最珍贵的礼物。如果您仍想为我们的礼物清单或蜜月基金献上心意，请点击下方链接。
              </p>
              <a
                href="#"
                className="inline-block bg-foreground text-background px-10 py-4 text-sm font-sans tracking-widest uppercase hover:bg-foreground/80 hover:scale-105 transition-all duration-300"
              >
                T&J 礼物清单
              </a>
            </div>
          </ScrollReveal>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Registry;
