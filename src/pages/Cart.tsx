import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";

const Cart = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background flex flex-col">
        <Header />

        <main className="flex-1 flex items-center justify-center px-6 py-20">
          <ScrollReveal>
            <div className="bg-card rounded-xl p-8 md:p-12 shadow-md text-center max-w-lg w-full">
              <ShoppingBag className="mx-auto mb-6 text-muted-foreground" size={48} strokeWidth={1} />
              <h1 className="font-serif text-2xl md:text-3xl font-light mb-4">您的购物车是空的</h1>
              <p className="font-sans text-sm text-muted-foreground mb-8">
                去看看Tina和Jackson的礼物清单吧！
              </p>
              <Link
                to="/registry"
                className="inline-block bg-sage text-primary-foreground px-8 py-3 text-sm font-sans tracking-widest uppercase hover:bg-sage-dark hover:scale-105 transition-all duration-300"
              >
                查看礼物清单
              </Link>
            </div>
          </ScrollReveal>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Cart;
