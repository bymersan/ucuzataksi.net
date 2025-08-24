"use client";

import React, { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MessageSquare } from "lucide-react";
import Image from "next/image";

export default function CustomerReviews() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);


  const totalItems = 4; // chat2, chat3, chat4, chat5
  
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemWidth = 320 + 24; // width + gap
      
      const newIndex = currentIndex <= 0 ? totalItems - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
      
      const scrollPosition = newIndex * itemWidth;
      container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemWidth = 320 + 24; // width + gap
      
      const newIndex = currentIndex >= totalItems - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      
      const scrollPosition = newIndex * itemWidth;
      container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  };

  const reviews = [
    {
      id: 2,
      image: "/assets/images/chat2.webp",
      alt: "Müşteri yorumu 2"
    },
    {
      id: 3,
      image: "/assets/images/chat3.webp",
      alt: "Müşteri yorumu 3"
    },
    {
      id: 4,
      image: "/assets/images/chat4.webp",
      alt: "Müşteri yorumu 4"
    },
    {
      id: 5,
      image: "/assets/images/chat5.webp",
      alt: "Müşteri yorumu 5"
    }
  ];

  return (
    <section id="customer-reviews" className="py-12 px-4 bg-background">
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
            <MessageSquare className="w-4 h-4 mr-2" />
            Müşteri Yorumları
          </Badge>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
            Müşteri <span className="text-primary">Yorumlarımız</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Müşterilerimizin doğrudan paylaştığı deneyimler ve gerçek yorumlar
          </p>
        </motion.div>

        {/* Reviews Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Navigation Buttons */}
          <div className="hidden md:flex items-center justify-between absolute inset-y-0 z-10 w-full pointer-events-none">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollLeft}
              className="pointer-events-auto -ml-6 bg-background/95 backdrop-blur-sm border shadow-lg hover:shadow-xl"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollRight}
              className="pointer-events-auto -mr-6 bg-background/95 backdrop-blur-sm border shadow-lg hover:shadow-xl"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Reviews Container */}
          <div className="relative">
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-80"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <div className="w-80 h-[580px] rounded-xl overflow-hidden border border-border/20">
                    <div className="relative w-full h-full">
                      <Image
                        src={review.image}
                        alt={review.alt}
                        fill
                        quality={85}
                        className="object-contain"
                        priority={review.id <= 3}
                      />
                    </div>
                  </div>  
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}