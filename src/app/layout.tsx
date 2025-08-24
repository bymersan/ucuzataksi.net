import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContactButtons from "@/components/ui/floating-contact-buttons";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { GTMProvider } from "@/components/providers/gtm-provider";
import { 
  localBusinessSchema, 
  websiteSchema, 
  organizationSchema, 
  serviceSchema,
  breadcrumbSchema,
  faqSchema,
  taxiServiceSchema 
} from "@/lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "İzmir Korsan Taksi | Korsan Taksi İzmir | Ucuza Taksi - 7/24 Hizmet",
  description: "İzmir korsan taksi hizmeti ile ucuza taksi çözümü! Korsan taksi İzmir'de 7/24 güvenli ulaşım, havaalanı transferi, şehir içi taksi. ☎️ 0534 088 14 10",
  keywords: "izmir korsan taksi, korsan taksi izmir, ucuza taksi, izmir ucuz taksi, korsan taksi fiyatları, izmir havaalanı korsan taksi, ucuz taksi izmir, korsan taksi numarası, izmir taksi, gece taksi izmir",
  authors: [{ name: "UcuzaTaksi.net - İzmir Korsan Taksi" }],
  creator: "UcuzaTaksi.net",
  publisher: "UcuzaTaksi.net - İzmir Korsan Taksi",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  metadataBase: new URL('https://ucuzataksi.net'),
  alternates: {
    canonical: 'https://ucuzataksi.net',
    languages: {
      'tr-TR': 'https://ucuzataksi.net',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://ucuzataksi.net',
    siteName: 'UcuzaTaksi.net - İzmir Korsan Taksi',
    title: 'İzmir Korsan Taksi | Korsan Taksi İzmir | Ucuza Taksi Hizmeti',
    description: "İzmir korsan taksi ve ucuza taksi hizmeti! Korsan taksi İzmir'de 7/24 güvenli ulaşım, havaalanı transferi, şehir içi taksi. WhatsApp: 0534 088 14 10",
    images: [
      {
        url: 'https://ucuzataksi.net/assets/logos/ucuzataksilogo.png',
        width: 1200,
        height: 630,
        alt: 'İzmir Korsan Taksi - Korsan Taksi İzmir - Ucuza Taksi',
        type: 'image/png',
      },
      {
        url: 'https://ucuzataksi.net/assets/logos/ucuzataksilogo.png',
        width: 800,
        height: 600,
        alt: 'Korsan Taksi İzmir - 7/24 Ucuza Taksi Hizmeti',
      },
    ],
    determiner: 'auto',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ucuzataksi',
    creator: '@ucuzataksi',
    title: 'İzmir Korsan Taksi | Korsan Taksi İzmir | Ucuza Taksi',
    description: "İzmir korsan taksi hizmeti! Korsan taksi İzmir'de ucuza taksi çözümünüz. 7/24 güvenli ulaşım, havaalanı transferi. WhatsApp: 0534 088 14 10",
    images: ['https://ucuzataksi.net/assets/logos/ucuzataksilogo.png'],
  },
  verification: {
    google: 'verification-code-here', // Replace with actual verification code
  },
  category: 'Transportation',
  classification: 'Taxi Service',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    telephone: true,
    date: false,
    address: true,
    email: true,
  },
  icons: {
    icon: [
      {
        url: '/favicon-source.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    apple: '/assets/logos/ucuzataksilogo.png',
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'geo.region': 'TR-35',
    'geo.placename': 'İzmir',
    'geo.position': '38.4192;27.1287',
    'ICBM': '38.4192, 27.1287',
    'theme-color': '#000000',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'İzmir Korsan Taksi',
    'application-name': 'UcuzaTaksi.net',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.instagram.com" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="keywords" content="izmir korsan taksi, korsan taksi izmir, ucuza taksi, izmir ucuz taksi, korsan taksi fiyatları, izmir havaalanı korsan taksi" />
        <meta name="author" content="UcuzaTaksi.net - İzmir Korsan Taksi" />
        <meta name="copyright" content="UcuzaTaksi.net" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        
        {/* Local Business Meta Tags */}
        <meta name="geo.region" content="TR-35" />
        <meta name="geo.placename" content="İzmir" />
        <meta name="geo.position" content="38.4192;27.1287" />
        <meta name="ICBM" content="38.4192, 27.1287" />
        
        {/* Mobile Meta Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="İzmir Korsan Taksi" />
        
        {/* Theme Colors */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Contact Information */}
        <meta name="contact" content="phone=+905340881410" />
        <meta name="contact" content="email=info@ucuzataksi.net" />
        
        {/* Alternative Language Tags */}
        <link rel="alternate" hrefLang="tr" href="https://ucuzataksi.net" />
        <link rel="alternate" hrefLang="x-default" href="https://ucuzataksi.net" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-PT5MRW88"
            height="0" 
            width="0" 
            style={{display:"none",visibility:"hidden"}}
          />
        </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GTMProvider>
            <Header />
            {children}
            <Footer />
            <FloatingContactButtons />
          </GTMProvider>
        </ThemeProvider>

        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PT5MRW88');`,
          }}
        />
        
        {/* Instagram Embed Script */}
        <Script
          src="https://www.instagram.com/embed.js"
          strategy="lazyOnload"
        />

        {/* Schema.org Structured Data */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
        <Script
          id="taxi-service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(taxiServiceSchema),
          }}
        />
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </body>
    </html>
  );
}