/**
 * Google Ads Conversion Tracking
 * Single conversion function for all site interactions
 */

declare global {
  interface Window {
    gtag_report_conversion: (url?: string) => boolean;
  }
}

/**
 * Track Google Ads Conversion
 * Call this function for WhatsApp clicks, phone calls, and form submissions
 */
export function trackConversion() {
  if (typeof window !== 'undefined' && window.gtag_report_conversion) {
    window.gtag_report_conversion();
  }
}
