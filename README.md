# Campus Creator Club Landing Page

A modern, responsive landing page for Campus Creator Club - a platform where college creators connect, grow, and earn through exclusive brand deals and content creation opportunities.

## 🚀 Features

- **Modern Design**: Clean, responsive UI built with Tailwind CSS
- **Testimonials Section**: Showcase creator success stories with animated testimonials
- **App Store Integration**: Direct links to download the Campus Creator Club app
- **Mobile-First**: Fully responsive design optimized for all devices
- **Performance Optimized**: Built with Next.js 15 for optimal performance

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.2.4](https://nextjs.org/)
- **React**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Fonts**: Custom fonts (Pilat Extended, Industry) + Google Fonts (Bricolage Grotesque, Inter, Poppins)

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/earlybird-labs/campuscreatorclub-landing.git
cd campuscreatorclub-landing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main landing page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   └── fonts/             # Custom font definitions
├── components/            # React components
│   ├── navbar.tsx        # Navigation component
│   ├── theme-provider.tsx # Theme context provider
│   └── ui/               # Reusable UI components
├── public/               # Static assets
│   ├── fonts/           # Custom font files
│   └── *.png, *.jpeg   # Images and assets
├── lib/                  # Utility functions
└── styles/               # Additional stylesheets
```

## 🚢 Deployment

This project is configured for deployment on Vercel. The build output is optimized for production.

## 📄 License

Private - Earlybird Labs

## 🔗 Links

- [App Store](https://apps.apple.com/us/app/campus-creator-club/id6746701396)
- [Privacy Policy](/privacy-policy)
