"use client";

import React, { useRef, useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Video } from "lucide-react";

export default function SocialVideos() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth >= 640 ? -300 : -280;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth >= 640 ? 300 : 280;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };


  const videos = [
    {
      id: 2,
      embedUrl: "https://www.instagram.com/reel/DIHSDZ_C6rl/embed"
    },
    {
      id: 3,
      embedUrl: "https://www.instagram.com/reel/DHK3oVYCKwX/embed"
    },
    {
      id: 4,
      embedUrl: "https://www.instagram.com/reel/DGmwvwOCGHc/embed"
    },
    {
      id: 5,
      embedUrl: "https://www.instagram.com/reel/DGGMQ3TCM17/embed"
    },
    {
      id: 6,
      embedUrl: "https://www.instagram.com/reel/DGqYaOzifWX/embed"
    },
  ];

  return (
    <section id="social-videos" className="py-12 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div 
          className="text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="text-sm px-4 py-2">
            <Video className="w-4 h-4 mr-2" />
            Sosyal Medya İçerikleri
          </Badge>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
            Sosyal Medyadaki <span style={{color: '#ffb900'}}>İçeriklerimiz</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Teknoloji, yapay zeka ve tasarım konularında hazırladığım güncel içerikler
          </p>
        </motion.div>

        {/* Videos Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Navigation Buttons */}
          <div className="hidden md:flex items-center justify-between absolute inset-y-0 z-10 w-full pointer-events-none">
            <Button
              variant="outline"
              onClick={scrollLeft}
              className="pointer-events-auto -ml-4 bg-background/95 backdrop-blur-sm border shadow-lg hover:shadow-xl h-10 w-10"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              onClick={scrollRight}
              className="pointer-events-auto -mr-4 bg-background/95 backdrop-blur-sm border shadow-lg hover:shadow-xl h-10 w-10"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Videos Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide pb-4 px-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-64 sm:w-72"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="w-64 sm:w-72 aspect-[9/16] rounded-xl overflow-hidden border border-border/20 bg-black">
                  {isClient && (
                    <iframe 
                      src={video.embedUrl}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      allowTransparency={true}
                      className="w-full h-full"
                      loading="lazy"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" asChild>
            <a 
              href="https://instagram.com/burakozerweb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Video className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Daha Fazla İçerik İçin Takip Et
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}