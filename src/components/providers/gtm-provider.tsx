"use client"

interface GTMProviderProps {
  children: React.ReactNode
}

export function GTMProvider({ children }: GTMProviderProps) {
  return <>{children}</>
}
