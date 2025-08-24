'use client'

import { useEffect } from 'react'

export default function AnasayfaRedirect() {
  useEffect(() => {
    // Client-side redirect to avoid server-side redirect loops
    window.location.replace('/')
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-muted-foreground">Ana sayfaya yönlendiriliyor...</p>
      </div>
    </div>
  )
}