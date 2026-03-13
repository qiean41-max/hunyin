import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import storyHero from "@/assets/hero-cover.png";
import storyPortrait from "@/assets/reception-portrait.png";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.png";

const OurStory = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header transparent />

        {/* 主视觉 */}
        <section className="relative h-[70vh] md:h-[80vh] flex items-start justify-center pt-[18vh] overflow-hidden">
          <motion.img
            src={storyHero}
            alt="新人在森林中相拥"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-black/30" />
          <motion.h1
            className="relative z-10 font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            一切的开始
          </motion.h1>
        </section>

        {/* 引言 1 */}
        <ScrollReveal>
          <section className="py-20 md:py-28 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="font-serif text-2xl md:text-4xl italic leading-relaxed text-foreground">
                <span className="text-gold text-4xl md:text-5xl">"</span>
                我在屋檐下看到了她，目光就再也移不开，直到我鼓起勇气走过去跟她共享一把伞。
              </p>
              <p className="font-serif text-lg mt-6 text-muted-foreground">— Jackson</p>
            </div>
          </section>
        </ScrollReveal>

        {/* 引言 2 */}
        <ScrollReveal>
          <section className="py-20 md:py-28 px-6 bg-cream">
            <div className="max-w-4xl mx-auto text-center">
              <p className="font-serif text-2xl md:text-4xl italic leading-relaxed text-foreground">
                <span className="text-gold text-4xl md:text-5xl">"</span>
                我们四目相对的那一刻，我被他那迷人的笑容深深吸引了。
              </p>
              <p className="font-serif text-lg mt-6 text-muted-foreground">— Tina</p>
            </div>
          </section>
        </ScrollReveal>

        {/* 故事叙述 */}
        <section className="py-20 md:py-28 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="overflow-hidden">
                <img src={storyPortrait} alt="温暖金色光线下的女性肖像" className="w-full aspect-[3/4] object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.15}>
              <div className="max-w-xl">
                <h2 className="font-serif text-5xl md:text-6xl font-light mb-4">Tina & Jackson</h2>
                <div className="w-12 h-px bg-gold mx-0 mb-6" />
                <p className="font-sans text-base leading-relaxed text-muted-foreground">
                  Tina和Jackson在暴雨天的屋檐下相遇，当时他们各自匆忙赶路。在伞下四目相对之后，那次愉快的交谈让他们发现彼此有多少共同点，随后便开始了恋爱。两年后，我们成为了最好的朋友、真挚的爱人和生活中无可替代的伙伴。我们终于准备好让这一切变成永恒！
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 结语 */}
        <ScrollReveal>
          <section className="py-20 md:py-28 px-6 bg-cream text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">后来的故事</h2>
              <p className="font-sans text-base leading-relaxed text-muted-foreground">
                从那个暴雨天开始，到一起徒步亚利桑那州最美的山径、探索新的城市、共同打造梦想中的生活，每一刻都是一场冒险。我们迫不及待地想和最爱的人们一起开启人生的下一个篇章。
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* 相册 */}
        <section className="py-20 md:py-28 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal direction="left">
              <div className="overflow-hidden">
                <img src={gallery1} alt="新人户外徒步合影" className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.15}>
              <div className="overflow-hidden">
                <img src={gallery2} alt="温暖光线下的新人亲密时刻" className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default OurStory;
