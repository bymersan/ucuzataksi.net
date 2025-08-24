/**
 * Google Tag Manager Events Library
 * 2025 Best Practices for Google Ads Conversion Tracking
 */

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
    gtag: (...args: unknown[]) => void;
  }
}

// Event Types
export type ConversionEvent = {
  event: 'conversion' | 'custom_conversion'
  conversion_id?: string
  conversion_label?: string
  transaction_id?: string
  value?: number
  currency?: string
  event_category: string
  event_action: string
  event_label?: string
  custom_parameters?: Record<string, unknown>
}

export type EnhancedConversionData = {
  email?: string
  phone_number?: string
  first_name?: string
  last_name?: string
  city?: string
  region?: string
  country?: string
  postal_code?: string
}

/**
 * Initialize GTM DataLayer if it doesn't exist
 */
export function initializeDataLayer() {
  if (typeof window !== 'undefined' && !window.dataLayer) {
    window.dataLayer = []
  }
}

/**
 * Push event to GTM DataLayer
 */
export function pushToDataLayer(eventData: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    // Add timestamp for debugging
    const eventWithTimestamp = {
      ...eventData,
      event_timestamp: new Date().toISOString(),
      page_url: window.location.href,
      page_title: document.title
    }
    
    console.log('GTM Event:', eventWithTimestamp)
    window.dataLayer.push(eventWithTimestamp)
  }
}

/**
 * Track Google Ads Conversion
 */
export function trackConversion(params: ConversionEvent) {
  const conversionData: ConversionEvent = {
    ...params,
    event: 'conversion',
    currency: 'TRY'
  }
  
  // Generate unique transaction ID if not provided
  if (!conversionData.transaction_id) {
    conversionData.transaction_id = `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }
  
  pushToDataLayer(conversionData)
}

/**
 * Track Enhanced Conversions (with user data)
 * Note: Data will be automatically hashed by GTM
 */
export function trackEnhancedConversion(
  conversionParams: ConversionEvent,
  userData: EnhancedConversionData
) {
  const enhancedData = {
    ...conversionParams,
    user_data: userData,
    enhanced_conversions: true
  }
  
  pushToDataLayer(enhancedData)
}

/**
 * WhatsApp Click Conversion
 */
export function trackWhatsAppClick(location: string, value?: number) {
  trackConversion({
    event: 'conversion',
    event_category: 'engagement',
    event_action: 'whatsapp_click',
    event_label: location,
    value: value || 1,
    currency: 'TRY',
    custom_parameters: {
      button_location: location,
      contact_method: 'whatsapp'
    }
  })
}

/**
 * Phone Call Click Conversion  
 */
export function trackPhoneClick(phoneNumber: string, location: string) {
  trackConversion({
    event: 'conversion',
    event_category: 'engagement', 
    event_action: 'phone_click',
    event_label: location,
    value: 2, // Phone calls are more valuable than WhatsApp
    currency: 'TRY',
    custom_parameters: {
      phone_number: phoneNumber,
      button_location: location,
      contact_method: 'phone'
    }
  })
}

/**
 * Direct Phone Call Conversion (for floating button)
 */
export function trackPhoneCall(phoneNumber: string, location: string) {
  // Track both the legacy phone_click and new click_call events
  trackConversion({
    event: 'conversion',
    event_category: 'engagement',
    event_action: 'click_call',
    event_label: location,
    value: 3, // Direct calls are highest value
    currency: 'TRY',
    custom_parameters: {
      phone_number: phoneNumber,
      button_location: location,
      contact_method: 'direct_call'
    }
  })

  // Also send the legacy event for backward compatibility
  trackPhoneClick(phoneNumber, location)
}

/**
 * Form Submission Conversion
 */
export function trackFormSubmission(
  formType: string, 
  formData?: Record<string, unknown>,
  value?: number
) {
  trackConversion({
    event: 'conversion',
    event_category: 'lead_generation',
    event_action: 'form_submission',
    event_label: formType,
    value: value || 5, // Form submissions are high value
    currency: 'TRY',
    custom_parameters: {
      form_type: formType,
      form_data: formData
    }
  })
}

/**
 * Page View Event (for specific high-value pages)
 */
export function trackPageView(pageName: string, pageValue?: number) {
  pushToDataLayer({
    event: 'custom_page_view',
    page_name: pageName,
    page_value: pageValue || 0,
    event_category: 'page_view',
    event_action: 'view',
    event_label: pageName
  })
}

/**
 * Price Calculator Interaction
 */
export function trackPriceCalculation(
  fromLocation: string,
  toLocation: string, 
  estimatedPrice: number
) {
  trackConversion({
    event: 'conversion',
    event_category: 'engagement',
    event_action: 'price_calculation',
    event_label: `${fromLocation} to ${toLocation}`,
    value: estimatedPrice,
    currency: 'TRY',
    custom_parameters: {
      from_location: fromLocation,
      to_location: toLocation,
      estimated_price: estimatedPrice,
      calculation_timestamp: new Date().toISOString()
    }
  })
}

/**
 * Scroll Depth Tracking
 */
export function trackScrollDepth(percentage: number) {
  if (percentage === 25 || percentage === 50 || percentage === 75 || percentage === 100) {
    pushToDataLayer({
      event: 'scroll_depth',
      scroll_percentage: percentage,
      event_category: 'engagement',
      event_action: 'scroll',
      event_label: `${percentage}%`
    })
  }
}

/**
 * Video Play Event (for social videos)
 */
export function trackVideoPlay(videoId: string, videoTitle: string) {
  pushToDataLayer({
    event: 'video_play',
    video_id: videoId,
    video_title: videoTitle,
    event_category: 'engagement',
    event_action: 'video_play',
    event_label: videoTitle
  })
}

/**
 * FAQ Interaction
 */
export function trackFAQInteraction(question: string, action: 'expand' | 'collapse') {
  pushToDataLayer({
    event: 'faq_interaction',
    faq_question: question,
    faq_action: action,
    event_category: 'engagement',
    event_action: 'faq_interaction',
    event_label: question
  })
}