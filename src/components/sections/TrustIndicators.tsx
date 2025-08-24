"use client";

import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function TrustIndicators() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="w-full">
        {/* Header */}
        <motion.div 
          className="text-center space-y-6 mb-8 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="text-sm px-4 py-2">
            Kurumsal İş Ortaklarımız
          </Badge>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
            Güvenilen <span className="text-primary">Markalar</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            İzmir&apos;in köklü kurumları ve önde gelen markaları ulaşım ihtiyaçlarında bizi tercih ediyor
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="h-[200px] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden w-full">
            <InfiniteMovingLogos
              items={brandLogos}
              direction="left"
              speed="slow"
              className="w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const InfiniteMovingLogos = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    logo: string;
    website?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = React.useState(false);
  
  const getDirection = React.useCallback(() => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  }, [direction]);
  
  const getSpeed = React.useCallback(() => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  }, [speed]);

  const addAnimation = React.useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  React.useEffect(() => {
    addAnimation();
  }, [addAnimation]);
  
  return (
    <div
      ref={containerRef}
      className={`scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,transparent_2%,white_8%,white_92%,transparent_98%,transparent_100%)] ${className}`}
    >
      <ul
        ref={scrollerRef}
        className={`flex w-max min-w-full shrink-0 flex-nowrap gap-8 py-4 ${
          start && "animate-scroll"
        } ${pauseOnHover && "hover:[animation-play-state:paused]"}`}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[200px] sm:w-[250px] md:w-[200px] lg:w-[220px] xl:w-[250px] h-[120px] shrink-0 rounded-xl border border-border/20 bg-background/50 backdrop-blur-sm p-6 flex items-center justify-center group hover:border-border/40 transition-all duration-300"
            key={`${item.name}-${idx}`}
          >
            <div className="flex items-center justify-center w-full h-full">
              <Image 
                src={item.logo} 
                alt={`${item.name} Logo`}
                width={180}
                height={80}
                className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100 dark:invert dark:group-hover:invert-0"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const brandLogos = [
  {
    name: "Egemen Group",
    logo: "/assets/brands/egemen.svg"
  },
  {
    name: "Hifree",
    logo: "/assets/brands/hifree.svg"
  },
  {
    name: "Hussa",
    logo: "/assets/brands/hussa.svg"
  },
  {
    name: "IdeaSoft",
    logo: "/assets/brands/ideasoft.svg"
  },
  {
    name: "İzmir Büyükşehir Belediyesi",
    logo: "/assets/brands/izmir-buyuksehir-belediyesi.svg"
  },
  {
    name: "Kaspersky",
    logo: "/assets/brands/kaspersky.svg"
  },
  {
    name: "Torku",
    logo: "/assets/brands/torku.svg"
  },
  {
    name: "Wask",
    logo: "/assets/brands/wask.svg"
  },
  {
    name: "Yaşar Üniversitesi",
    logo: "/assets/brands/yasar-universitesi.svg"
  },
];