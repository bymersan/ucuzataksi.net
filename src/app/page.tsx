import dynamic from "next/dynamic"
import Hero from "@/components/sections/Hero"
import { LoadingSkeleton } from "@/components/ui/loading-skeleton"

// Lazy load non-critical components for better performance
const About = dynamic(() => import("@/components/sections/About"), {
  loading: () => <LoadingSkeleton />
})
const Services = dynamic(() => import("@/components/sections/Services"), {
  loading: () => <LoadingSkeleton />
})
const Benefits = dynamic(() => import("@/components/sections/Benefits"), {
  loading: () => <LoadingSkeleton />
})
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), {
  loading: () => <LoadingSkeleton />
})
const ContactForm = dynamic(() => import("@/components/sections/ContactForm"), {
  loading: () => <LoadingSkeleton />
})
const FAQ = dynamic(() => import("@/components/sections/FAQ"), {
  loading: () => <LoadingSkeleton />
})

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Benefits />
      {/* <SocialVideos /> */}
      <Testimonials />
      <ContactForm />
      <FAQ />
    </main>
  )
}