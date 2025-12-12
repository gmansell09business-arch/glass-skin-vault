# Glass Skin Vault

A personalized K-Beauty skincare recommendation web application with Swiss/Apple minimalist design aesthetic.

![Glass Skin Vault Preview](./assets/preview.png)

## 🌟 Features

- **Personalized Quiz**: 3-step quiz to determine skin type, goals, and budget
- **Curated Routines**: AM, PM, and Weekly rituals with step-by-step instructions
- **Ingredient Library**: Science-backed K/J-Beauty ingredients with myth-busting facts
- **Product Recommendations**: Budget-matched product suggestions with Amazon affiliate links
- **Frosted Glass UI**: Modern glassmorphism design with smooth animations

## 📁 Project Structure

```
glass-skin-vault/
├── index.html          # Main HTML file
├── styles.css          # Complete stylesheet
├── app.js              # Application logic & data
├── assets/             # Image assets folder
│   ├── hero-duo.jpg
│   ├── ingredients-banner.jpg
│   ├── niacinamide.jpg
│   ├── ginseng.jpg
│   ├── hyaluronic.jpg
│   ├── salicylic.jpg
│   ├── rice.jpg
│   ├── centella.jpg
│   ├── retinol.jpg
│   ├── green-tea.jpg
│   ├── am-glow-kit.jpg
│   ├── pm-restore-kit.jpg
│   ├── cleanser.jpg
│   ├── toner.jpg
│   ├── serum.jpg
│   ├── moisturizer.jpg
│   ├── sunscreen.jpg
│   ├── mask.jpg
│   └── tool.jpg
└── README.md
```

## 🚀 Quick Start

1. Clone or download this repository
2. Add your images to the `assets/` folder (see Asset Requirements below)
3. Open `index.html` in a browser

**No build tools required** - this is a vanilla HTML/CSS/JS project.

## 🖼️ Asset Requirements

Place the following images in the `assets/` folder:

| Filename | Description | Recommended Size |
|----------|-------------|------------------|
| `hero-duo.jpg` | K/J-Beauty model(s) for hero section | 900×600px |
| `ingredients-banner.jpg` | Wide botanical/lab science shot | 1200×400px |
| `niacinamide.jpg` | Macro powder/crystals | 400×400px |
| `ginseng.jpg` | Ginseng root | 400×400px |
| `hyaluronic.jpg` | Gel/serum texture | 400×400px |
| `salicylic.jpg` | Scientific/lab aesthetic | 400×400px |
| `rice.jpg` | Rice grains/powder | 400×400px |
| `centella.jpg` | Centella leaves | 400×400px |
| `retinol.jpg` | Dropper/serum bottle | 400×400px |
| `green-tea.jpg` | Green tea leaves | 400×400px |
| `am-glow-kit.jpg` | Product flat-lay | 600×400px |
| `pm-restore-kit.jpg` | Product arrangement | 600×400px |
| `cleanser.jpg` | Cleanser product | 400×400px |
| `toner.jpg` | Toner bottle | 400×400px |
| `serum.jpg` | Serum dropper | 400×400px |
| `moisturizer.jpg` | Moisturizer jar | 400×400px |
| `sunscreen.jpg` | Sunscreen tube | 400×400px |
| `mask.jpg` | Sheet/clay mask | 400×400px |
| `tool.jpg` | Skincare tool | 400×400px |

**Note**: The app includes Unsplash fallback URLs, so it will work without local images.

## 🎨 Design System

### Colors
- **White**: `#FFFFFF`
- **Light Grey**: `#F9F9F9`
- **Pastel Green**: `#E8F5E9`
- **Accent Green**: `#2E7D32`
- **Text**: `#1A1A1A`
- **Muted**: `#666666`

### Typography
- **Headlines**: Playfair Display (serif), 800 weight
- **Body**: Inter (sans-serif), 400-700 weight
- **Hero Scale**: 6rem with -2px letter-spacing

### Effects
- **Frosted Glass**: `backdrop-filter: blur(24px) saturate(180%)`
- **Hover Lift**: `translateY(-8px)` with shadow transition

## 📱 Pages

1. **Gateway (LP1)**: Landing page with hero, quiz CTA, locked preview cards
2. **Vault (LP2)**: Personalized dashboard with rituals, actives, and bundles
3. **Routines**: Complete AM/PM/Weekly ritual archive
4. **Ingredients**: Searchable ingredient library with filters
5. **Shop**: Curated kits and product recommendations

## 🔧 Customization

### Adding New Routines
Edit the `ROUTINES_DATA` array in `app.js`:

```javascript
{
    id: "AM04",
    name: "New Routine",
    category: "am",
    budgetTag: "Mid-Range",
    kitPrice: 100,
    skinType: ["Oily"],
    goal: ["Glow"],
    description: "Description here",
    duration: "10-15 minutes",
    imageKey: "amGlowKit",
    steps: [...]
}
```

### Adding New Ingredients
Edit the `INGREDIENTS_DATA` array in `app.js`:

```javascript
{
    id: "ING09",
    name: "New Ingredient",
    scientificRole: "Scientific explanation...",
    mythBusted: "Common myth debunked...",
    description: "Short description",
    type: "Humectant",
    source: "Korean",
    concerns: ["Hydration"],
    goals: ["Glow"],
    howToUse: "Usage instructions",
    imageKey: "newIngredient",
    linkedProducts: [...]
}
```

## 🌐 Deployment

### GitHub Pages
1. Push to GitHub repository
2. Go to Settings → Pages
3. Select "Deploy from a branch" → `main` → `/ (root)`
4. Your site will be live at `https://username.github.io/glass-skin-vault/`

### Netlify
1. Connect your GitHub repository
2. Build command: (leave empty)
3. Publish directory: `/`
4. Deploy!

### Vercel
1. Import your GitHub repository
2. Framework Preset: Other
3. Deploy!

## 📄 License

MIT License - feel free to use for personal or commercial projects.

## 🙏 Credits

- Design inspiration: Swiss design principles, Apple aesthetic
- Fonts: Google Fonts (Playfair Display, Inter)
- Fallback images: Unsplash

---

Built with ❤️ for K-Beauty enthusiasts
