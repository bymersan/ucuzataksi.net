"use client"

import { trackConversion } from "@/lib/gtm-events"

export function useFormTracking() {
  const trackContactFormSubmission = () => {
    trackConversion()
  }

  return {
    trackContactFormSubmission
  }
}
