# Portfolio Dev

![Astro](https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GitHub repo size](https://img.shields.io/github/repo-size/shertas/porfolio-dev?style=for-the-badge)

A modern, fast, and responsive portfolio website built with Astro, designed to showcase professional experience, skills, and projects in an elegant CV-style format.

## 📖 Description

This portfolio serves as a comprehensive digital CV, presenting professional information in a clean, accessible format. Built with Astro's modern web architecture, it delivers exceptional performance while maintaining a sophisticated design aesthetic.

## ✨ Key Features

- **⚡ Lightning Fast**: Built with Astro for optimal performance and minimal JavaScript
- **📱 Fully Responsive**: Seamless experience across desktop, tablet, and mobile devices
- **🎨 Modern Design**: Clean, professional layout with attention to typography and spacing
- **♿ Accessible**: WCAG compliant with semantic HTML and proper ARIA attributes
- **🔍 SEO Optimized**: Meta tags, structured data, and optimized content structure
- **📄 PDF Export**: Generate and download CV in PDF format
- **🌙 Dark Mode**: Toggle between light and dark themes
- **📧 Contact Integration**: Built-in contact form with email functionality
- **🚀 Zero-JS by default**: Client-side JavaScript only when necessary

## 🛠️ Installation

### Prerequisites

- Node.js (version 16.12.0 or higher)
- npm, yarn, or pnpm package manager

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/shertas/porfolio-dev.git
   cd porfolio-dev
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install
   
   # Using yarn
   yarn install
   
   # Using pnpm
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view your portfolio

## 🚀 Usage

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for issues
npm run astro check

# Format code
npm run format
```

### Project Structure

```
porfolio-dev/
├── public/
│   ├── favicon.svg
│   └── images/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ContactForm.astro
│   │   └── ProjectCard.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   └── projects.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── package.json
```

### Customization

1. **Update Personal Information**
   
   Edit the configuration file to customize your portfolio:
   ```typescript
   // src/config.ts
   export const SITE_CONFIG = {
     name: "Your Name",
     title: "Your Professional Title",
     description: "Brief description about yourself",
     email: "your.email@example.com",
     social: {
       github: "https://github.com/yourusername",
       linkedin: "https://linkedin.com/in/yourusername",
       twitter: "https://twitter.com/yourusername"
     }
   };
   ```

2. **Add Your Projects**
   ```typescript
   // src/data/projects.ts
   export const projects = [
     {
       title: "Project Name",
       description: "Project description",
       technologies: ["Astro", "TypeScript", "Tailwind"],
       github: "https://github.com/yourusername/project",
       demo: "https://your-project-demo.com",
       image: "/images/project-screenshot.jpg"
     }
   ];
   ```

3. **Customize Styling**
   ```css
   /* src/styles/global.css */
   :root {
     --primary-color: #your-color;
     --secondary-color: #your-secondary-color;
     --background-color: #your-bg-color;
   }
   ```

## 📚 API Documentation

### Component Props

#### ProjectCard Component
```typescript
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
}
```

#### ContactForm Component
```typescript
interface ContactFormProps {
  endpoint?: string;
  successMessage?: string;
  className?: string;
}
```

### Configuration Options

```typescript
interface SiteConfig {
  name: string;
  title: string;
  description: string;
  email: string;
  phone?: string;
  location?: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
  seo: {
    keywords: string[];
    author: string;
  };
}
```

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
4. **Run tests and linting**
   ```bash
   npm run astro check
   npm run format
   ```

5. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```

6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```

7. **Open a Pull Request**

### Coding Standards

- Use TypeScript for type safety
- Follow Astro's component patterns
- Maintain responsive design principles
- Ensure accessibility compliance
- Write meaningful commit messages

### Bug Reports

When filing an issue, please include:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Environment details (OS, browser, Node version)

## 📄 License

This project is currently unlicensed. All rights reserved. Please contact the repository owner for usage permissions.

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)

## 📞 Contact

For questions or collaboration opportunities, feel free to reach out:

- GitHub: [@shertas](https://github.com/shertas)
- Project Link: [https://github.com/shertas/porfolio-dev](https://github.com/shertas/porfolio-dev)

---

⭐ If you found this project helpful, please consider giving it a star!
