# Simba | Final Year Project Implementation & Coding Help

Simba is a professional service platform designed to assist Computer Science, IT, and Engineering students with their final year projects. We provide high-quality implementations, clean code, and comprehensive academic documentation to ensure students not only succeed but also deeply understand their work.

## 🚀 Project Overview

The Simba website is a modern, responsive React-based landing page that showcases our core expertise, pricing tiers, and commitment to academic excellence. It features a sleek glassmorphic design, interactive components, and a dedicated "Under Construction" mode for site maintenance.

## ✨ Key Features

- **Core Expertise Showcase**: Detailed breakdown of services including Topic Guidance, Dataset Sourcing, Full Implementation, and Model Evaluation.
- **Service Tiers**: Clearly defined packages (Basic, Premium, Elite) tailored to different student needs and budgets.
- **Modern UI/UX**: Built with React 19 and Tailwind CSS for a premium, fast-loading experience.
- **Interactive Elements**: Smooth scrolling, responsive navigation, and professional testimonials.
- **Developer Portal**: A dedicated sign-in area for internal management.
- **Maintenance Mode**: A custom-built, full-screen "Under Construction" popup to manage site access.

## 🛠️ Technology Stack

- **Frontend**: [React 19](https://react.dev/), [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (via CDN), [Lucide React](https://lucide.dev/) for icons
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Analytics**: [@vercel/analytics](https://vercel.com/analytics)
- **Deployment**: Optimized for Vercel

## 📋 Project Requirements

### Prerequisites
- **Node.js**: Version 18.x or higher
- **npm**: Version 9.x or higher

### Environment Variables
To run the project locally, create a `.env.local` file in the root directory and add:
```env
GEMINI_API_KEY=your_api_key_here
```

## ⚙️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Simba
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 📂 Project Structure

```text
Simba/
├── assets/             # Static assets (images, icons, SVGs)
├── components/         # Reusable UI components
│   ├── UnderConstructionPopup.tsx  # Global maintenance screen
│   ├── Navbar.tsx      # Responsive navigation
│   ├── Hero.tsx        # Main landing section
│   └── ...             # Other section components
├── pages/              # Main page views
│   ├── Home.tsx        # Landing page layout
│   └── DeveloperSignIn.tsx # Admin/Developer login
├── utils/              # Utility functions and helpers
├── App.tsx             # Main application component & routes
├── index.tsx           # Application entry point
├── index.html          # HTML template (includes Tailwind CDN)
└── package.json        # Dependencies and scripts
```

---

*Note: The site is currently under maintenance. Access to the main content is restricted via the `UnderConstructionPopup` component.*
