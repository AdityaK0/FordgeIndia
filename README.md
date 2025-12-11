# FordgeIndia Landing Page

A modern, responsive, and premium landing page for FordgeIndia - a SaaS platform that empowers local vendors to create online portfolios, manage products, run festival campaigns, and grow their business.

## 🎯 Overview

This is the **public marketing website** for FordgeIndia (www.fordgeindia.com). It showcases the platform's features and value proposition to potential vendors.

**Framework:** React + Vite + TailwindCSS v3  
**No backend integration** - This is a static marketing site only.

## 📁 Project Structure

```
fordgeindia/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Sticky navigation with mobile menu
│   │   ├── Hero.jsx             # High-impact hero section with CTA
│   │   ├── HowItWorks.jsx       # 3-step process explanation
│   │   ├── Features.jsx         # 8 feature cards in responsive grid
│   │   ├── PortfolioPreview.jsx # Desktop & mobile portfolio mockups
│   │   ├── FestivalMarketing.jsx # Animated festival poster carousel
│   │   ├── Pricing.jsx          # 3-tier pricing with monthly/yearly toggle
│   │   ├── Testimonials.jsx     # Auto-rotating testimonial slider
│   │   ├── FAQ.jsx              # Collapsible FAQ accordion
│   │   ├── CTA.jsx              # Final call-to-action section
│   │   └── Footer.jsx           # Footer with links and social icons
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # React entry point
│   └── index.css                # TailwindCSS + custom styles
├── index.html                   # HTML with SEO meta tags
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
├── vite.config.js               # Vite configuration
└── package.json                 # Dependencies

```

## 🎨 Design Features

### Color Palette
- **Primary:** `#141414` (Dark)
- **Accent:** `#10B981` (Green)
- **Accent Blue:** `#3B82F6` (Blue)

### Animations
- Floating background elements
- Smooth scroll behavior
- Hover effects on cards and buttons
- Auto-rotating carousels (testimonials & festival posters)
- Slide-up and fade-in animations

### Typography
- **Font:** Inter (Google Fonts)
- Clean, modern, and highly readable

## 📄 Page Sections

### 1. **Hero Section**
- Compelling headline: "Empowering Local Businesses to Sell More"
- Animated background gradients
- Two CTA buttons: "Get Started" and "View Sample Portfolio"
- Feature icons showcase

### 2. **How It Works**
- 3-step process with visual cards
- Icons and descriptions for each step
- Connection line visualization (desktop)

### 3. **Features**
- 8 feature cards in responsive grid:
  - Portfolio Builder
  - Product Manager
  - Events & Festival Campaigns
  - SEO Optimized Pages
  - Smart WhatsApp Share
  - Vendor Dashboard
  - Real-Time Analytics
  - Secure Subscription System
- Stats showcase (500+ vendors, 10K+ products, etc.)

### 4. **Portfolio Preview**
- Desktop browser mockup with sample portfolio
- Mobile device mockup
- "View Live Demo" CTA

### 5. **Festival Marketing**
- Auto-rotating carousel showing festival posters
- 4-step workflow explanation
- Interactive festival icons (Diwali, Holi, Christmas, Eid, New Year)

### 6. **Pricing**
- 3 pricing tiers: Starter (₹199), Growth (₹399), Enterprise (₹799)
- Monthly/Yearly toggle with savings indicator
- Feature comparison lists
- 30-day money-back guarantee badge

### 7. **Testimonials**
- Auto-rotating slider with 5 testimonials
- Navigation arrows and dots
- Thumbnail grid for quick selection
- Trust badges

### 8. **FAQ**
- 8 collapsible FAQ items
- Smooth accordion animation
- Contact support CTA

### 9. **CTA Section**
- Dark gradient background with animated elements
- Final conversion push
- Trust indicators (14-day trial, no credit card, cancel anytime)
- Stats showcase

### 10. **Footer**
- Brand logo and description
- Navigation links (Product, Company, Support)
- Social media icons
- Copyright and legal links

## 🔧 Development

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server
The app runs on `http://localhost:5173` (or next available port)

## 🚀 SEO Optimization

### Meta Tags
- **Title:** FordgeIndia – Portfolio Websites & Festival Marketing Tools for Local Businesses
- **Description:** Create your own vendor portfolio website, manage products, generate festival posters, and grow your business online with FordgeIndia.
- **Keywords:** vendor portfolio, online store, festival marketing, poster generator, local business

### Open Graph Tags
- Optimized for Facebook, LinkedIn sharing
- Custom OG image support

### Twitter Cards
- Summary large image card
- Optimized for Twitter sharing

### Additional SEO
- Semantic HTML5 elements
- Proper heading hierarchy (single H1 per page)
- Unique IDs for interactive elements
- Mobile-responsive design
- Fast page load times

## 📱 Responsive Design

The landing page is fully responsive across:
- **Mobile:** 320px - 767px
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px+

All components use Tailwind's responsive utilities (`sm:`, `md:`, `lg:`) for breakpoint-specific styling.

## 🎯 Key Features

✅ **Modern Design** - Clean, professional, and visually stunning  
✅ **Fully Responsive** - Perfect on all devices  
✅ **SEO Optimized** - Meta tags, OG tags, semantic HTML  
✅ **Fast Performance** - Optimized with Vite  
✅ **Smooth Animations** - Tailwind animations + custom keyframes  
✅ **Accessible** - Proper ARIA labels and semantic markup  
✅ **No Backend Required** - Static site, easy to deploy  

## 🌐 Deployment

This is a static site and can be deployed to:
- **Vercel** (recommended for Vite projects)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**
- **Any static hosting service**

### Build Command
```bash
npm run build
```

Output will be in the `dist/` folder.

## 📝 Notes

- This is **only the public landing page** - no vendor dashboard or backend integration
- All CTAs currently link to anchor tags (`#pricing`, `#contact`, etc.)
- Update CTA links to actual signup/login pages when backend is ready
- Replace placeholder social media links with actual URLs
- Add actual OG image at `/og-image.jpg` for social sharing

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```js
colors: {
  primary: '#141414',
  accent: '#10B981',
  'accent-blue': '#3B82F6',
}
```

### Animations
Custom animations are defined in `tailwind.config.js` under `theme.extend.animation`

### Content
All text content is in the respective component files - easy to update without touching styles.

## 📞 Support

For questions or issues, contact the FordgeIndia development team.

---

**Built with ❤️ for FordgeIndia**
