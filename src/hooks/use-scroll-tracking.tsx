"use client"

import { useEffect } from 'react'
import { trackScrollDepth } from '@/lib/gtm-events'

export function useScrollTracking() {
  useEffect(() => {
    const trackedPercentages = new Set<number>()
    
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      
      const scrollPercentage = Math.round((scrollTop / (documentHeight - windowHeight)) * 100)
      
      // Track at 25%, 50%, 75%, and 100%
      const milestones = [25, 50, 75, 100]
      
      for (const milestone of milestones) {
        if (scrollPercentage >= milestone && !trackedPercentages.has(milestone)) {
          trackedPercentages.add(milestone)
          trackScrollDepth(milestone)
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}