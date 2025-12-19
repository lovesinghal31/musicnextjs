# 🎵 Music School - Next.js Website

A modern, interactive music school website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. This project showcases a beautiful, animated user interface for a music education platform featuring course listings, instructor profiles, testimonials, and more.

## ✨ Features

### 🏠 Home Page Components

- **Hero Section** - Eye-catching landing section with spotlight effects and animated gradients
- **Featured Courses** - Showcases highlighted music courses with background gradients
- **Why Choose Us** - Sticky scroll reveal section highlighting school benefits
- **Testimonials** - Infinite moving cards displaying student reviews
- **Upcoming Webinars** - Card hover effects for webinar listings
- **Instructors** - Animated tooltips showcasing expert instructors with wavy backgrounds
- **Footer** - Complete footer with links and information

### 📚 Courses Page

- Displays all available courses (10+ courses including Guitar, Piano, Vocals, Drums, Jazz, Music Production, etc.)
- 3D card effects with hover animations
- Course details including title, description, instructor, and pricing
- Responsive grid layout

### 📧 Contact Page

- Contact form with email and message fields
- Background beams animation effect
- Form validation and submission handling

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.5.2](https://nextjs.org/) with App Router
- **Language**: TypeScript 5
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/)
- **UI Components**: Custom components with advanced effects
- **Utilities**: clsx, tailwind-merge
- **Icons & Graphics**: simplex-noise, mini-svg-data-uri

## 🎨 UI Components

The project includes a rich collection of custom UI components:

- `3d-card.tsx` - Interactive 3D card effects
- `animated-tooltip.tsx` - Animated tooltip displays
- `background-beams.tsx` - Animated background beams
- `background-gradient.tsx` - Gradient background effects
- `card-hover-effect.tsx` - Card hover animations
- `infinite-moving-cards.tsx` - Infinitely scrolling testimonial cards
- `moving-border.tsx` - Animated border effects
- `navbar-menu.tsx` - Navigation menu component
- `spotlight-new.tsx` - Spotlight animation effects
- `sticky-scroll-reveal.tsx` - Sticky scroll reveal sections
- `wavy-background.tsx` - Wavy background animations

## 📂 Project Structure

```
musicnextjs/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home page
│   │   ├── layout.tsx            # Root layout
│   │   ├── globals.css           # Global styles
│   │   ├── contact/
│   │   │   └── page.tsx          # Contact page
│   │   └── courses/
│   │       └── page.tsx          # All courses page
│   ├── components/
│   │   ├── FeaturedCourses.tsx   # Featured courses section
│   │   ├── Footer.tsx            # Footer component
│   │   ├── HeroSection.tsx       # Hero/landing section
│   │   ├── Instructors.tsx       # Instructors showcase
│   │   ├── Navbar.tsx            # Navigation bar
│   │   ├── TestimonialCards.tsx  # Testimonials section
│   │   ├── UpcomingWebinars.tsx  # Webinars section
│   │   ├── WhyChooseUs.tsx       # Benefits section
│   │   └── ui/                   # Reusable UI components
│   ├── data/
│   │   └── music_courses.json    # Course data
│   └── lib/
│       └── utils.ts              # Utility functions
├── public/
│   └── courses/                  # Course images
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd musicnextjs
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Features Explained

### Course Management

The application uses a JSON-based course management system stored in [src/data/music_courses.json](src/data/music_courses.json). Each course includes:

- ID, title, slug, description
- Pricing information
- Instructor name
- Featured flag for homepage display
- Course image

### Animation System

Built with Framer Motion, the website features:

- Smooth page transitions
- Interactive hover effects
- Scroll-based animations
- 3D card transformations
- Gradient animations

### Responsive Design

Fully responsive layout using Tailwind CSS:

- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Flexible grid systems
- Adaptive typography

## 🎨 Customization

### Adding New Courses

Edit [src/data/music_courses.json](src/data/music_courses.json) and add your course object:

```json
{
  "id": 11,
  "title": "Your Course Title",
  "slug": "course-slug",
  "description": "Course description",
  "price": 99.99,
  "instructor": "Instructor Name",
  "isFeatured": true,
  "image": "/courses/your-image.jpg"
}
```

### Modifying Components

All components are located in [src/components/](src/components/). Each component is self-contained and can be customized independently.

### Styling

Global styles are in [src/app/globals.css](src/app/globals.css). Tailwind configuration can be modified in the Tailwind config file.

## 🌐 Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com):

1. Push your code to a Git repository
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Other Platforms

This Next.js application can also be deployed to:

- Netlify
- AWS Amplify
- Railway
- Render
- Any platform supporting Node.js

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Built with ❤️ using Next.js and modern web technologies.

---

**Note**: This is a demonstration/educational project showcasing modern web development practices with Next.js, TypeScript, and advanced UI animations.
