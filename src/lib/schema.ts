export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TaxiService"],
  "@id": "https://ucuzataksi.net/#business",
  "name": "UcuzaTaksi.net - İzmir Korsan Taksi",
  "alternateName": ["İzmir Korsan Taksi", "Korsan Taksi İzmir", "Ucuza Taksi"],
  "description": "İzmir korsan taksi ve ucuza taksi hizmeti. 7/24 güvenli korsan taksi İzmir'de en uygun fiyatlarla. Havaalanı transferi, şehir içi ulaşım.",
  "slogan": "İzmir'de Ucuza Taksi Çözümünüz",
  "url": "https://ucuzataksi.net",
  "telephone": "+90 534 088 14 10",
  "email": "info@ucuzataksi.net",
  "logo": {
    "@type": "ImageObject",
    "url": "https://ucuzataksi.net/assets/logos/ucuzataksilogo.png",
    "width": 512,
    "height": 512
  },
  "image": [
    {
      "@type": "ImageObject",
      "url": "https://ucuzataksi.net/assets/logos/ucuzataksilogo.png",
      "width": 1200,
      "height": 630,
      "name": "İzmir Korsan Taksi Logo"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "İzmir Merkez",
    "addressLocality": "İzmir",
    "addressRegion": "İzmir",
    "postalCode": "35000",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 38.4192,
    "longitude": 27.1287
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "İzmir",
      "sameAs": "https://en.wikipedia.org/wiki/Izmir"
    },
    {
      "@type": "Place",
      "name": "Konak"
    },
    {
      "@type": "Place",
      "name": "Bornova"
    },
    {
      "@type": "Place",
      "name": "Karşıyaka"
    },
    {
      "@type": "Place",
      "name": "Buca"
    },
    {
      "@type": "Place",
      "name": "Alsancak"
    }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 38.4192,
      "longitude": 27.1287
    },
    "geoRadius": "50000"
  },
  "openingHours": "Mo-Su 00:00-23:59",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "priceRange": "₺₺",
  "currenciesAccepted": "TRY",
  "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "İzmir Korsan Taksi Hizmetleri",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "İzmir Şehir İçi Korsan Taksi",
          "description": "İzmir şehir içi ucuza taksi ve korsan taksi hizmeti",
          "provider": {
            "@id": "https://ucuzataksi.net/#business"
          }
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "İzmir Havaalanı Korsan Taksi",
          "description": "İzmir Adnan Menderes Havaalanı korsan taksi ve ucuza transfer hizmeti",
          "provider": {
            "@id": "https://ucuzataksi.net/#business"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "7/24 Korsan Taksi İzmir",
          "description": "Gece gündüz kesintisiz İzmir korsan taksi ve ucuza taksi hizmeti",
          "provider": {
            "@id": "https://ucuzataksi.net/#business"
          }
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "250",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Ahmet K."
      },
      "reviewBody": "İzmir'de en güvenilir korsan taksi hizmeti. Ucuza taksi arıyorsanız doğru adres.",
      "datePublished": "2024-01-15"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Ayşe Y."
      },
      "reviewBody": "Korsan taksi İzmir'de çok memnun kaldığım bir hizmet. Fiyatlar gerçekten ucuz.",
      "datePublished": "2024-01-20"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/ucuzataksi",
    "https://wa.me/905340881410"
  ],
  "knowsAbout": ["İzmir korsan taksi", "korsan taksi izmir", "ucuza taksi", "izmir taksi", "havaalanı transfer"],
  "keywords": "izmir korsan taksi, korsan taksi izmir, ucuza taksi, izmir taksi, korsan taksi fiyatları"
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://ucuzataksi.net/#website",
  "url": "https://ucuzataksi.net",
  "name": "İzmir Korsan Taksi - UcuzaTaksi.net",
  "alternateName": ["Korsan Taksi İzmir", "Ucuza Taksi"],
  "description": "İzmir korsan taksi ve ucuza taksi hizmeti. Korsan taksi İzmir'de 7/24 en uygun fiyatlarla hizmetinizdeyiz.",
  "headline": "İzmir Korsan Taksi - 7/24 Ucuza Taksi Hizmeti",
  "keywords": "izmir korsan taksi, korsan taksi izmir, ucuza taksi, izmir ucuz taksi, korsan taksi fiyatları",
  "publisher": {
    "@id": "https://ucuzataksi.net/#business"
  },
  "potentialAction": [
    {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://ucuzataksi.net/?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  ],
  "inLanguage": "tr-TR",
  "about": {
    "@type": "Thing",
    "name": "İzmir Korsan Taksi Hizmetleri"
  }
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://ucuzataksi.net/#organization",
  "name": "UcuzaTaksi.net - İzmir Korsan Taksi",
  "alternateName": ["İzmir Korsan Taksi", "Korsan Taksi İzmir", "Ucuza Taksi", "Ucuz Taksi İzmir"],
  "url": "https://ucuzataksi.net",
  "logo": {
    "@type": "ImageObject",
    "url": "https://ucuzataksi.net/assets/logos/ucuzataksilogo.png",
    "width": 512,
    "height": 512
  },
  "description": "İzmir korsan taksi hizmeti veren güvenilir firma. Korsan taksi İzmir'de 7/24 ucuza taksi hizmeti sunuyoruz.",
  "slogan": "İzmir'de Ucuza Taksi Çözümünüz",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+90-534-088-14-10",
      "contactType": "customer service",
      "contactOption": ["TollFree", "HearingImpairedSupported"],
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 38.4192,
          "longitude": 27.1287
        },
        "geoRadius": "50000"
      },
      "availableLanguage": ["Turkish"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "İzmir",
    "addressRegion": "İzmir", 
    "addressCountry": "TR"
  },
  "sameAs": [
    "https://www.instagram.com/ucuzataksi",
    "https://wa.me/905340881410"
  ],
  "knowsAbout": ["İzmir korsan taksi", "korsan taksi izmir", "ucuza taksi", "izmir taksi hizmetleri"]
}

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://ucuzataksi.net/#service",
  "name": "İzmir Korsan Taksi - Ucuza Taksi Hizmeti",
  "alternateName": ["İzmir Korsan Taksi", "Korsan Taksi İzmir", "Ucuza Taksi", "İzmir Ucuz Taksi"],
  "description": "İzmir korsan taksi hizmeti ile ucuza taksi çözümü. Korsan taksi İzmir'de 7/24 havaalanı transferi, şehir içi ulaşım.",
  "provider": {
    "@id": "https://ucuzataksi.net/#business"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "İzmir",
      "sameAs": "https://en.wikipedia.org/wiki/Izmir"
    },
    {
      "@type": "Place",
      "name": "İzmir Adnan Menderes Havaalanı"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "İzmir Korsan Taksi Hizmet Paketleri",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "İzmir Havaalanı Korsan Taksi Transfer",
        "description": "İzmir Adnan Menderes Havaalanı korsan taksi ile ucuza transfer hizmeti",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "TRY",
          "minPrice": "120",
          "maxPrice": "200",
          "price": "120-200"
        },
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer", 
        "name": "İzmir Şehir İçi Korsan Taksi",
        "description": "İzmir şehir merkezi ve ilçeler arası ucuza taksi ve korsan taksi hizmeti",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "TRY",
          "minPrice": "35",
          "maxPrice": "150", 
          "price": "35-150"
        },
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "7/24 Korsan Taksi İzmir Gece Hizmeti",
        "description": "24 saat kesintisiz İzmir korsan taksi ve ucuza taksi hizmeti",
        "availability": "https://schema.org/InStock",
        "availableDeliveryMethod": "https://schema.org/OnSiteService"
      }
    ]
  },
  "serviceType": ["Taxi Service", "Transportation Service", "Transfer Service"],
  "category": "Korsan Taksi",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "TRY",
    "lowPrice": "35",
    "highPrice": "200",
    "offerCount": "3",
    "availability": "https://schema.org/InStock"
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "İzmir'de ulaşım arayan herkes",
    "geographicArea": {
      "@type": "City",
      "name": "İzmir"
    }
  },
  "serviceOutput": "Güvenli ve ekonomik taksi ulaşımı",
  "termsOfService": "https://ucuzataksi.net/terms"
}

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Ana Sayfa - İzmir Korsan Taksi",
      "item": "https://ucuzataksi.net"
    },
    {
      "@type": "ListItem", 
      "position": 2,
      "name": "Korsan Taksi İzmir Hizmetleri",
      "item": "https://ucuzataksi.net/#services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Ucuza Taksi Fiyatları",
      "item": "https://ucuzataksi.net/#pricing"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "İletişim",
      "item": "https://ucuzataksi.net/#contact"
    }
  ]
}

export const taxiServiceSchema = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "@id": "https://ucuzataksi.net/#taxiservice",
  "name": "İzmir Korsan Taksi - Ucuza Taksi",
  "alternateName": ["Korsan Taksi İzmir", "İzmir Ucuz Taksi", "Ucuza Taksi İzmir"],
  "description": "İzmir korsan taksi profesyonel hizmeti. Korsan taksi İzmir'de 7/24 ucuza taksi çözümünüz.",
  "url": "https://ucuzataksi.net",
  "telephone": "+90 534 088 14 10",
  "email": "info@ucuzataksi.net",
  "priceRange": "₺₺",
  "paymentAccepted": ["Nakit", "Kredi Kartı", "Banka Kartı"],
  "currenciesAccepted": "TRY",
  "openingHours": "Mo-Su 00:00-23:59",
  "areaServed": [
    {
      "@type": "City",
      "name": "İzmir"
    },
    {
      "@type": "Airport",
      "name": "İzmir Adnan Menderes Havaalanı",
      "iataCode": "ADB"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "250",
    "bestRating": "5"
  },
  "availableLanguage": {
    "@type": "Language",
    "name": "Turkish",
    "alternateName": "tr"
  },
  "knowsAbout": ["İzmir korsan taksi", "korsan taksi izmir", "ucuza taksi", "havaalanı transfer", "şehir içi ulaşım"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "İzmir Korsan Taksi Ucuza Taksi Hizmetleri",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "İzmir Korsan Taksi Kısa Mesafe",
        "description": "5-10 km arası ucuza taksi hizmeti",
        "price": "35-70 TRY"
      },
      {
        "@type": "Offer",
        "name": "İzmir Korsan Taksi Orta Mesafe",
        "description": "10-25 km arası korsan taksi İzmir hizmeti",
        "price": "70-120 TRY"
      },
      {
        "@type": "Offer",
        "name": "İzmir Korsan Taksi Uzun Mesafe",
        "description": "25+ km ucuza taksi ve havaalanı transferi",
        "price": "120-200 TRY"
      }
    ]
  }
}

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "İzmir korsan taksi fiyatları ne kadar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "İzmir korsan taksi fiyatları 35₺'den başlayarak güzergaha göre değişmektedir. Korsan taksi İzmir'de havaalanı transferi 120-200₺, şehir içi ucuza taksi hizmeti 35-150₺ arasındadır. Kesin fiyat için WhatsApp'tan iletişime geçebilirsiniz."
      }
    },
    {
      "@type": "Question",
      "name": "Korsan taksi İzmir'de güvenli mi?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "Evet, korsan taksi İzmir'de tamamen güvenli hizmet veriyoruz. İzmir korsan taksi hizmetimizde deneyimli şoförler, temiz araçlar ve 7/24 ucuza taksi anlayışıyla güvenli ulaşım sağlıyoruz."
      }
    },
    {
      "@type": "Question",
      "name": "Ucuza taksi nasıl çağırırım?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ucuza taksi çağırmak için WhatsApp hattımız +90 534 088 14 10 numarasından 7/24 iletişime geçebilirsiniz. İzmir korsan taksi hizmetimiz için web sitemizdeki fiyat hesaplama aracını da kullanabilirsiniz."
      }
    },
    {
      "@type": "Question",
      "name": "İzmir havaalanına korsan taksi var mı?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evet, İzmir Adnan Menderes Havaalanı'na korsan taksi İzmir hizmetimiz bulunmaktadır. Ucuza taksi ile havaalanı transferi için 24 saat önceden rezervasyon yapabilirsiniz."
      }
    },
    {
      "@type": "Question",
      "name": "İzmir'de hangi bölgelere korsan taksi hizmeti veriyorsunuz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "İzmir korsan taksi hizmetimiz Konak, Bornova, Karşıyaka, Buca, Alsancak, Bayraklı, Çiğli, Gaziemir ve tüm İzmir ilçelerinde mevcuttur. Korsan taksi İzmir genelinde ucuza taksi hizmeti sunuyoruz."
      }
    },
    {
      "@type": "Question",
      "name": "Korsan taksi rezervasyonu nasıl yapılır?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Korsan taksi İzmir rezervasyonu için WhatsApp üzerinden 7/24 ulaşabilirsiniz. Ucuza taksi rezervasyonunuz için gidiş-dönüş saatinizi, kişi sayısını ve güzergahı belirtmeniz yeterlidir."
      }
    },
    {
      "@type": "Question",
      "name": "İzmir korsan taksi ile normal taksi arasındaki fark nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "İzmir korsan taksi hizmeti, normal taksiye göre daha uygun fiyatlı ulaşım sağlar. Ucuza taksi olarak bilinen korsan taksi İzmir'de sabit fiyat garantisi ve 7/24 hizmet avantajı sunar."
      }
    }
  ]
}