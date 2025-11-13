# Google Tag Manager Setup Guide - UcuzaTaksi.net

## 🎯 2025 Google Ads Conversion Tracking Implementation

### Current GTM Container ID: `GTM-PT5MRW88`

## 📋 Required GTM Tags Setup

### 1. **Conversion Linker Tag** (CRITICAL - Must be first)
```
Tag Type: Conversion Linker
Trigger: All Pages
Priority: 100 (Highest)
```

### 2. **Google Ads Conversion Tags**

#### WhatsApp Click Conversion (Regular)
```
Tag Type: Google Ads Conversion Tracking
Conversion ID: [Your AW-XXXXXXXX ID]
Conversion Label: [Your WhatsApp conversion label]
Trigger: Custom Event = conversion
Additional Conditions: event_action equals whatsapp_click AND button_location does not equal price_calculator_hero
Value: {{DLV - value}}
Currency: TRY
```

#### WhatsApp Click Conversion (Price Calculator - HIGH VALUE)
```
Tag Type: Google Ads Conversion Tracking
Conversion ID: [Your AW-XXXXXXXX ID]
Conversion Label: [Your Price Calculator WhatsApp label]
Trigger: Custom Event = conversion  
Additional Conditions: event_action equals whatsapp_click AND button_location equals price_calculator_hero
Value: {{DLV - value}} (Dynamic: 35-150 TRY based on route)
Currency: TRY
```

#### Price Calculation Event Tracking
```
Tag Type: Google Ads Conversion Tracking
Conversion ID: [Your AW-XXXXXXXX ID]
Conversion Label: [Your Price Calculation label]
Trigger: Custom Event = conversion
Additional Conditions: event_action equals price_calculation  
Value: {{DLV - value}}
Currency: TRY
```

#### Phone Click Conversion (Links)
```
Tag Type: Google Ads Conversion Tracking  
Conversion ID: [Your AW-XXXXXXXX ID]
Conversion Label: [Your Phone Link conversion label]
Trigger: Custom Event = conversion
Additional Conditions: event_action equals phone_click
Value: {{DLV - value}}
Currency: TRY
```

#### Direct Phone Call Conversion (Floating Button - HIGH VALUE)
```
Tag Type: Google Ads Conversion Tracking
Conversion ID: [Your AW-XXXXXXXX ID]
Conversion Label: [Your Phone Call conversion label]
Trigger: Custom Event = conversion
Additional Conditions: event_action equals click_call
Value: {{DLV - value}} (Fixed: 3 TRY - Highest phone value)
Currency: TRY
```

#### Contact Form Conversion
```
Tag Type: Google Ads Conversion Tracking
Conversion ID: [Your AW-XXXXXXXX ID] 
Conversion Label: [Your Form conversion label]
Trigger: Custom Event = conversion
Additional Conditions: event_action equals form_submission
Value: {{DLV - value}}
Currency: TRY
```

#### Enhanced Conversions Setup
```
Tag Type: Google Ads User-Provided Data Event
Conversion Tracking ID: [Your AW-XXXXXXXX ID]
Trigger: Custom Event = conversion
Additional Conditions: enhanced_conversions equals true
User-Provided Data: {{DLV - user_data}}
```

### 3. **Data Layer Variables**

Create these variables in GTM Variables section:

```
Variable Name: DLV - event_action
Type: Data Layer Variable
Data Layer Variable Name: event_action

Variable Name: DLV - value  
Type: Data Layer Variable
Data Layer Variable Name: value

Variable Name: DLV - user_data
Type: Data Layer Variable
Data Layer Variable Name: user_data

Variable Name: DLV - conversion_id
Type: Data Layer Variable  
Data Layer Variable Name: conversion_id

Variable Name: DLV - conversion_label
Type: Data Layer Variable
Data Layer Variable Name: conversion_label
```

### 4. **Custom Event Triggers**

```
Trigger Name: Conversion Event
Type: Custom Event
Event Name: conversion

Trigger Name: WhatsApp Click (Regular)
Type: Custom Event  
Event Name: conversion
Additional Conditions: 
  - event_action equals whatsapp_click
  - button_location does not equal price_calculator_hero

Trigger Name: WhatsApp Click (Price Calculator)
Type: Custom Event
Event Name: conversion  
Additional Conditions:
  - event_action equals whatsapp_click
  - button_location equals price_calculator_hero

Trigger Name: Price Calculation
Type: Custom Event
Event Name: conversion
Additional Conditions: event_action equals price_calculation

Trigger Name: Phone Click (Links)
Type: Custom Event
Event Name: conversion
Additional Conditions: event_action equals phone_click

Trigger Name: Direct Phone Call (Floating Button)
Type: Custom Event
Event Name: conversion
Additional Conditions: event_action equals click_call

Trigger Name: Form Submission
Type: Custom Event
Event Name: conversion  
Additional Conditions: event_action equals form_submission
```

## 🚀 Events Currently Implemented

### Automatic Events
- ✅ **WhatsApp Clicks (Regular)** - All WhatsApp buttons tracked (Value: 1 TRY)
- ✅ **WhatsApp Clicks (Price Calculator)** - Hero section price calculator (Value: 35-150 TRY)
- ✅ **Price Calculations** - Route calculations tracked (Value: Estimated price)
- ✅ **Phone Clicks (Links)** - Phone number links tracked (Value: 2 TRY)
- ✅ **Direct Phone Calls (Floating Button)** - click_call events (Mobile + Desktop) (Value: 3 TRY)
- ✅ **Page Views** - Homepage and key pages
- ✅ **Scroll Depth** - 25%, 50%, 75%, 100% tracking
- ✅ **Enhanced Conversions Ready** - User data hashing prepared

### Manual Implementation Needed
- ⏳ **Contact Form Submissions** (requires frontend integration)
- ⏳ **FAQ Interactions** (if needed)
- ⏳ **Video Play Events** (if social videos added)

## 📊 DataLayer Events Structure

### WhatsApp Click Event (Regular)
```javascript
{
  event: 'conversion',
  conversion_id: 'AW-XXXXXXXX',
  conversion_label: 'whatsapp_label',
  event_category: 'engagement',
  event_action: 'whatsapp_click',
  event_label: 'header_button',
  value: 1,
  currency: 'TRY',
  button_location: 'header_button',
  contact_method: 'whatsapp'
}
```

### WhatsApp Click Event (Price Calculator - HIGH VALUE)
```javascript
{
  event: 'conversion',
  conversion_id: 'AW-XXXXXXXX', 
  conversion_label: 'price_calculator_label',
  event_category: 'engagement',
  event_action: 'whatsapp_click',
  event_label: 'price_calculator_hero',
  value: 60-150, // Dynamic based on estimated price
  currency: 'TRY',
  button_location: 'price_calculator_hero',
  contact_method: 'whatsapp',
  custom_parameters: {
    from_location: 'Konak',
    to_location: 'Bornova', 
    estimated_price: 60
  }
}
```

### Price Calculation Event
```javascript
{
  event: 'conversion',
  conversion_id: 'AW-XXXXXXXX',
  conversion_label: 'price_calculation_label', 
  event_category: 'engagement',
  event_action: 'price_calculation',
  event_label: 'Konak to Bornova',
  value: 60, // Estimated price
  currency: 'TRY',
  custom_parameters: {
    from_location: 'Konak',
    to_location: 'Bornova',
    estimated_price: 60,
    calculation_timestamp: '2025-01-XX'
  }
}
```

### Phone Click Event (Links)
```javascript
{
  event: 'conversion',
  conversion_id: 'AW-XXXXXXXX',
  conversion_label: 'phone_link_label',
  event_category: 'engagement', 
  event_action: 'phone_click',
  event_label: 'contact_form_phone',
  value: 2,
  currency: 'TRY',
  custom_parameters: {
    phone_number: '+905XXXXXXXXX',
    button_location: 'contact_form_phone',
    contact_method: 'phone'
  }
}
```

### Direct Phone Call Event (Floating Button - HIGH VALUE)
```javascript
{
  event: 'conversion',
  conversion_id: 'AW-XXXXXXXX',
  conversion_label: 'phone_call_label',
  event_category: 'engagement',
  event_action: 'click_call',
  event_label: 'floating_button',
  value: 3, // Highest phone value
  currency: 'TRY',
  custom_parameters: {
    phone_number: '+905325197535',
    button_location: 'floating_button',
    contact_method: 'direct_call'
  }
}
```

### Enhanced Conversion Event
```javascript
{
  event: 'conversion',
  conversion_id: 'AW-XXXXXXXX',
  conversion_label: 'form_label',
  event_category: 'lead_generation',
  event_action: 'form_submission',  
  event_label: 'main_contact_form',
  value: 10,
  currency: 'TRY',
  enhanced_conversions: true,
  user_data: {
    email: 'user@example.com',
    phone_number: '+905XXXXXXXXX',
    first_name: 'John',
    last_name: 'Doe'
  }
}
```

## 🔍 Testing & Debugging

### GTM Preview Mode Testing
1. Enable Preview Mode in GTM
2. Navigate to website
3. Perform actions (click WhatsApp, phone, etc.)
4. Verify events fire in Preview Mode
5. Check DataLayer variables populate correctly

### Google Ads Conversion Testing
1. Use Google Ads Conversion tracking status
2. Check "Recent conversions" in Google Ads
3. Use browser dev tools to monitor dataLayer
4. Test with different browsers/devices

### Debug Commands (Browser Console)
```javascript
// Check if dataLayer exists
console.log(window.dataLayer)

// View all events in dataLayer  
window.dataLayer.forEach((item, index) => {
  console.log(`Event ${index}:`, item)
})

// Manual test event
window.dataLayer.push({
  event: 'conversion',
  event_action: 'test_conversion',
  value: 1,
  currency: 'TRY'
})
```

## ⚠️ Critical Implementation Notes

### 2025 Updates
- ✅ **User-Provided Data Event** replaces old Enhanced Conversions setup
- ✅ **Conversion Linker** now essential for iOS 14.5+ tracking
- ✅ **First-party cookies** prioritized over third-party
- ✅ **Server-side tracking** recommended for future (not implemented yet)

### Privacy Compliance  
- ✅ Email/phone data automatically hashed by GTM
- ✅ No PII stored in plain text in dataLayer
- ✅ GDPR/KVKK compliant data handling
- ✅ User consent management ready

### Performance Optimization
- ✅ Events only fire on user interaction
- ✅ DataLayer initialized on page load
- ✅ No blocking scripts or heavy operations
- ✅ Lazy loading for non-critical tracking

## 📈 Expected Conversion Values

| Event Type | Value (TRY) | Priority | Notes |
|------------|-------------|----------|-------|
| WhatsApp Click (Regular) | 1 | Medium | Header, footer buttons |
| WhatsApp Click (Price Calculator) | 35-150 | HIGHEST | Hero section - Dynamic pricing |
| Price Calculation | 35-150 | High | Route calculation event |
| Phone Click (Links) | 2 | Medium-High | Phone number links |
| Direct Phone Call (Floating Button) | 3 | HIGH | click_call event - Mobile & Desktop |
| Contact Form | 10 | High | Lead generation |
| Quote Request | 15+ | Highest | Future implementation |
| Newsletter Signup | 3 | Low-Medium | Future implementation |

## 🛠️ Implementation Status

- ✅ GTM Container Setup (GTM-PT5MRW88)
- ✅ DataLayer Infrastructure  
- ✅ Event Tracking Library
- ✅ WhatsApp Conversion Tracking (Regular)
- ✅ **WhatsApp Conversion Tracking (Price Calculator) - HIGH VALUE**
- ✅ **Price Calculation Event Tracking**
- ✅ Phone Click Tracking (Links)
- ✅ **Direct Phone Call Tracking (Floating Button) - click_call**
- ✅ Scroll Depth Tracking
- ✅ Enhanced Conversions Structure
- ✅ **Dynamic Pricing System (35-150 TRY)**
- ⏳ GTM Tags Configuration (Manual)
- ⏳ Google Ads Conversion Actions (Manual)
- ⏳ Form Submission Integration (Manual)

## 📞 Next Steps

1. **Configure GTM Tags** using the specifications above
2. **Create Google Ads Conversion Actions** for each event type  
3. **Test all conversions** in Preview Mode
4. **Verify tracking** in Google Ads interface
5. **Monitor performance** and adjust values as needed

---

*This setup follows 2025 best practices for Google Ads conversion tracking with GTM.*