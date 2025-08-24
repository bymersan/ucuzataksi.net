"use client"

import { trackFormSubmission, trackEnhancedConversion } from "@/lib/gtm-events"

export function useFormTracking() {
  
  const trackContactFormSubmission = (formData: {
    name: string
    email: string
    phone: string
    message: string
  }) => {
    // Track basic form submission
    trackFormSubmission('contact_form', {
      form_name: 'contact_form',
      form_location: 'main_contact',
      fields_filled: Object.keys(formData).length
    }, 10) // High value for form submissions

    // Track enhanced conversion with user data
    trackEnhancedConversion(
      {
        event: 'conversion',
        event_category: 'lead_generation',
        event_action: 'contact_form_submit',
        event_label: 'main_contact_form',
        value: 10,
        currency: 'TRY'
      },
      {
        email: formData.email,
        phone_number: formData.phone,
        first_name: formData.name.split(' ')[0],
        last_name: formData.name.split(' ').slice(1).join(' ')
      }
    )
  }

  const trackNewsletterSignup = (email: string) => {
    trackFormSubmission('newsletter', {
      form_name: 'newsletter_signup',
      form_location: 'footer'
    }, 3)

    trackEnhancedConversion(
      {
        event: 'conversion', 
        event_category: 'lead_generation',
        event_action: 'newsletter_signup',
        event_label: 'footer_newsletter',
        value: 3,
        currency: 'TRY'
      },
      {
        email: email
      }
    )
  }

  const trackQuoteRequest = (formData: {
    name?: string
    email?: string
    phone?: string
    pickupLocation?: string
    destinationLocation?: string
    estimatedPrice?: number
  }) => {
    trackFormSubmission('quote_request', {
      form_name: 'quote_request',
      pickup_location: formData.pickupLocation,
      destination_location: formData.destinationLocation,
      estimated_price: formData.estimatedPrice
    }, formData.estimatedPrice || 15) // Use estimated price or default high value

    if (formData.email || formData.phone) {
      trackEnhancedConversion(
        {
          event: 'conversion',
          event_category: 'lead_generation', 
          event_action: 'quote_request',
          event_label: 'price_calculator',
          value: formData.estimatedPrice || 15,
          currency: 'TRY'
        },
        {
          email: formData.email,
          phone_number: formData.phone,
          first_name: formData.name?.split(' ')[0],
          last_name: formData.name?.split(' ').slice(1).join(' ')
        }
      )
    }
  }

  return {
    trackContactFormSubmission,
    trackNewsletterSignup,
    trackQuoteRequest
  }
}