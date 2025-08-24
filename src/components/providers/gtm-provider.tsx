"use client"

import { useEffect } from 'react'
import { initializeDataLayer, trackPageView } from '@/lib/gtm-events'
import { useScrollTracking } from '@/hooks/use-scroll-tracking'

interface GTMProviderProps {
  children: React.ReactNode
}

export function GTMProvider({ children }: GTMProviderProps) {
  // Initialize scroll tracking
  useScrollTracking()
  
  useEffect(() => {
    // Initialize DataLayer
    initializeDataLayer()
    
    // Track initial page view
    trackPageView('homepage', 1)
    
    // Track page visibility changes (when user returns to tab)
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        trackPageView('page_return', 0.5)
      }
    }
    
    document.addEventListener('visibilitychange', handleVisibilityChange)
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return <>{children}</>
}