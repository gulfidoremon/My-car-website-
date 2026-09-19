# Deploying India Luxury Car Rental to Vercel

Follow these simple steps to deploy this project to **Vercel** for free:

### Method 1: Deploy via GitHub (Recommended)
1. **Push your code to GitHub**:
   - Create a new repository on [GitHub](https://github.com/new).
   - Push this project to your repository:
     ```bash
     git init
     git add .
     git commit -m "Initial commit - India Luxury Car Rental"
     git branch -M main
     git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
     git push -u origin main
     ```
2. **Import to Vercel**:
   - Visit [vercel.com](https://vercel.com) and log in with your GitHub account.
   - Click **"Add New..."** &rarr; **"Project"**.
   - Select your GitHub repository.
   - Framework Preset: **Vite** (auto-detected).
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
   - Click **Deploy**!

---

### Method 2: Deploy directly with Vercel CLI
1. Open your terminal in the project directory:
   ```bash
   npm i -g vercel
   vercel
   ```
2. Follow the prompt instructions (default choices work out of the box).
3. For production deployment:
   ```bash
   vercel --prod
   ```

---

### Configuration Notes
- This project includes a `vercel.json` file configured with single-page application (SPA) client-side rewrites to `index.html`.
