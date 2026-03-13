import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Video, Upload, X, Image as ImageIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-cover.png";

interface MediaItem {
  id: string;
  type: "image" | "video";
  url: string;
  name: string;
}

const Memories = () => {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const [lightbox, setLightbox] = useState<MediaItem | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = useCallback((files: FileList | null) => {
    if (!files) return;
    const newItems: MediaItem[] = [];
    Array.from(files).forEach((file) => {
      if (file.type.startsWith("image/") || file.type.startsWith("video/")) {
        newItems.push({
          id: crypto.randomUUID(),
          type: file.type.startsWith("image/") ? "image" : "video",
          url: URL.createObjectURL(file),
          name: file.name,
        });
      }
    });
    setItems((prev) => [...prev, ...newItems]);
  }, []);

  const removeItem = (id: string) => {
    setItems((prev) => {
      const item = prev.find((i) => i.id === id);
      if (item) URL.revokeObjectURL(item.url);
      return prev.filter((i) => i.id !== id);
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    handleFiles(e.dataTransfer.files);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header transparent />

        {/* 主视觉 */}
        <section className="relative h-[60vh] md:h-[70vh] flex items-start justify-center pt-[18vh] overflow-hidden">
          <motion.img
            src={heroImage}
            alt="留住美好"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-black/35" />
          <motion.h1
            className="relative z-10 font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            留住美好
          </motion.h1>
        </section>

        {/* 说明 */}
        <ScrollReveal>
          <section className="py-16 md:py-24 px-6 text-center">
            <div className="max-w-2xl mx-auto">
              <p className="font-serif text-2xl md:text-3xl italic text-foreground mb-4">
                分享你镜头下的美好瞬间
              </p>
              <p className="font-sans text-sm text-muted-foreground">
                上传照片或视频，和我们一起留住这些珍贵的回忆
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* 上传区域 */}
        <section className="px-6 pb-20 md:pb-28">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div
                className={`relative border-2 border-dashed transition-colors duration-300 p-12 md:p-16 text-center cursor-pointer ${
                  dragOver
                    ? "border-gold bg-gold/5"
                    : "border-border hover:border-muted-foreground"
                }`}
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOver(true);
                }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*,video/*"
                  className="hidden"
                  onChange={(e) => handleFiles(e.target.files)}
                />
                <div className="flex items-center justify-center gap-3 mb-4 text-muted-foreground">
                  <Camera size={28} />
                  <Video size={28} />
                  <Upload size={28} />
                </div>
                <p className="font-serif text-xl md:text-2xl text-foreground mb-2">
                  点击或拖拽上传
                </p>
                <p className="font-sans text-sm text-muted-foreground">
                  支持 JPG、PNG、GIF、MP4 等格式
                </p>
              </div>
            </ScrollReveal>

            {/* 照片墙 */}
            {items.length > 0 && (
              <div className="mt-12">
                <h2 className="font-serif text-3xl md:text-4xl font-light text-center mb-8">
                  已上传 {items.length} 个文件
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                  <AnimatePresence>
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        className="relative group aspect-square overflow-hidden bg-muted cursor-pointer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setLightbox(item)}
                      >
                        {item.type === "image" ? (
                          <img
                            src={item.url}
                            alt={item.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="relative w-full h-full">
                            <video
                              src={item.url}
                              className="w-full h-full object-cover"
                              muted
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                              <Video className="text-white" size={32} />
                            </div>
                          </div>
                        )}
                        <button
                          className="absolute top-2 right-2 w-7 h-7 bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeItem(item.id);
                          }}
                          aria-label="删除"
                        >
                          <X size={14} />
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            )}

            {/* 空状态 */}
            {items.length === 0 && (
              <ScrollReveal delay={0.2}>
                <div className="mt-16 text-center text-muted-foreground">
                  <ImageIcon size={48} className="mx-auto mb-4 opacity-30" />
                  <p className="font-sans text-sm">还没有上传任何文件，快来分享美好瞬间吧</p>
                </div>
              </ScrollReveal>
            )}
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightbox(null)}
            >
              <button
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                onClick={() => setLightbox(null)}
                aria-label="关闭"
              >
                <X size={28} />
              </button>
              <motion.div
                className="max-w-4xl max-h-[85vh] w-full"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {lightbox.type === "image" ? (
                  <img
                    src={lightbox.url}
                    alt={lightbox.name}
                    className="w-full h-full max-h-[85vh] object-contain"
                  />
                ) : (
                  <video
                    src={lightbox.url}
                    controls
                    autoPlay
                    className="w-full max-h-[85vh]"
                  />
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Memories;
