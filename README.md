# Portfolio - Guramritpal Singh Saggu

A modern, minimal portfolio website showcasing professional experience, projects, and skills.

## 🚀 Features

- **Modern Design**: Clean, minimal dark theme with smooth animations
- **Responsive**: Works seamlessly on desktop, tablet, and mobile
- **Fast**: Built with Vite and React for optimal performance
- **SEO Optimized**: Meta tags and semantic HTML

## 🛠️ Tech Stack

- React 19
- TypeScript
- Vite
- Modern CSS with CSS Variables

## 📦 Installation

```bash
npm install
```

## 🏃 Development

```bash
npm run dev
```

Visit `http://localhost:5173` to view the portfolio.

## 🏗️ Build

```bash
npm run build
```

## 📄 Deploy to GitHub Pages

### Automatic Deployment (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy on every push to `main` branch

3. **Your portfolio will be available at**:
   ```
   https://YOUR_USERNAME.github.io/portfolio/
   ```

### Manual Deployment

If you prefer to deploy manually:

1. Build the project:
   ```bash
   GITHUB_PAGES=true npm run build
   ```

2. Push the `dist` folder to the `gh-pages` branch:
   ```bash
   npm install -g gh-pages
   gh-pages -d dist
   ```

## 📝 Customization

Edit `src/data/profile.ts` to update your personal information, work experience, projects, and skills.

## 📄 License

MIT
