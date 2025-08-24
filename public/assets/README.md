# Assets Klasörü

Bu klasör, BurakWeb projesi için tüm statik varlıkları içerir.

## Klasör Yapısı

```
public/assets/
├── logos/
│   ├── logo.svg           # Ana logo (otomatik renk)
│   ├── logo-white.svg     # Beyaz logo
│   └── favicon.svg        # Favicon
├── images/
│   └── digital-strategy.svg  # Dijital strateji görseli
├── mockups/
│   └── hero-mockup.svg    # Hero bölümü mockup
└── icons/
    ├── brand-icon.svg     # Marka ikonu
    └── service-icons.svg  # Hizmet ikonları
```

## Kullanım

### Logolar
- `logo.svg` - Ana logo, `currentColor` kullanır (tema rengini alır)
- `logo-white.svg` - Koyu arka planlar için beyaz logo
- `favicon.svg` - Browser tab ikonu

### Görseller
- `digital-strategy.svg` - Hero ve diğer bölümlerde kullanılabilecek strateji görseli
- `hero-mockup.svg` - Ana sayfa hero bölümü için mockup

### İkonlar
- `brand-icon.svg` - Basit marka ikonu
- `service-icons.svg` - Hizmet kartları için ikon seti

## SVG Avantajları
- Responsive (her boyutta keskin)
- Küçük dosya boyutu
- CSS ile renklendirilebilir (`currentColor`)
- Retina ekranlarda net görünüm

## Yeni Asset Ekleme
Yeni görseller eklerken:
1. SVG formatını tercih edin
2. `currentColor` kullanarak tema uyumlu yapın
3. Dosya adlarında kebab-case kullanın
4. Alt text için açıklayıcı isimler verin