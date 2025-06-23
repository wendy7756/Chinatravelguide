# 🌏 Global Travel Guide (localtravelguide.fun)

Welcome to **Global Travel Guide** – a global, community-powered website for sharing local travel experiences.

Whether you're a traveler, digital nomad, or local explorer, you can **publish your own travel pages** and inspire others with your unique tips and stories.

🌐 Live site: [https://localtravelguide.fun](https://localtravelguide.fun)

![image](https://github.com/user-attachments/assets/8fe5cd67-e8c9-44c5-bbb4-8148b6a5ca76)

---

## ✨ Key Features

- 🧭 Curated travel guides by city, theme, or route
- 🌐 Supports multilingual pages (starting with English & Chinese)
- 📸 Built-in layout for attractions, food, culture, and itineraries
- 🧩 Powered by [Astro](https://astro.build) — fast, modern site framework
- 📝 Open to global contributors – build your own travel page!

---

## 🧑‍💻 How to Contribute

We welcome everyone to share their own **local or international travel experiences**!

You can contribute by:
- Creating a new guide page (in Markdown or Astro format)
- Sharing photos, travel tips, food spots, or full-day itineraries
- Improving existing pages or translating them

> ✍ **Please only submit original content** or content you have the legal rights to share.

### ✅ Content Requirements
- Content must be **original** and not copied from other websites, books, or commercial sources.
- Images must be your own or clearly credited with permission/license.
- You retain your copyright, but grant the project a license to display it.

---

## ⚠️ Legal Disclaimer

By submitting content to this project, you confirm that:
- You **own the rights** to the materials you upload (text, images, etc.);
- You **understand and accept** that your contributions may be published and distributed under an open license;
- You agree that the project developers and maintainers are **not liable** for any content-related legal issues (e.g., copyright, defamation, or privacy violations) arising from your submission.

The maintainers reserve the right to remove any content at their discretion.

---

## 🛠 Tech Stack

- Framework: [Astro](https://astro.build)
- Deployment: [Netlify](https://netlify.com)
- Styling: CSS Modules / Global Styles
- Content: Markdown + Astro pages
- Future-proof: Open to CMS or i18n extensions

---

## 📁 Project Structure
<pre>

    \`\`\`
    ## 📁 Project Structure
    .
    ├── public/          # Static assets (images, favicons)
    ├── src/
    │   ├── pages/       # Route-based content (guides, index)
    │   ├── components/  # UI components (Hero, layout blocks)
    │   ├── layouts/     # Page templates
    │   ├── data/        # Structured data (content: routes, destinations)
    │   └── styles/      # Global styles
    ├── package.json     # NPM dependencies
    └── astro.config.mjs # Astro config
    \`\`\`

</pre>


---

## 🚀 Quick Start

Clone the repo and run locally:

```bash
git clone https://github.com/wendy7756/travelguide.git
cd travelguide
npm install

# Configure environment variables (optional)
cp .env.example .env
# Edit .env file to add your Google AdSense client ID

npm run dev
```

Build for production:
```bash
npm run build
```

Preview build locally:
```bash
npm run preview
```

## 💰 Google AdSense Configuration (Optional)

This project supports Google AdSense integration for monetization. If you want to enable ads:

1. **Get your AdSense Client ID**:
   - Sign up at [Google AdSense](https://www.google.com/adsense/)
   - Get your publisher ID (format: `ca-pub-XXXXXXXXXXXXXXXX`)

2. **Configure Environment Variables**:
   ```bash
   cp .env.example .env
   ```
   
3. **Edit `.env` file**:
   ```
   PUBLIC_ADSENSE_CLIENT=ca-pub-YOUR-ADSENSE-ID
   ```

4. **Deploy and Verify**:
   - Deploy your site
   - Verify site ownership in AdSense dashboard
   - Enable Auto Ads in your AdSense account

> **⚠️ Important for Open Source**: The `.env` file is gitignored to prevent sharing your AdSense ID. Each developer should configure their own AdSense account.

📜 License

This project is licensed under the MIT License.
User-submitted content remains the responsibility of the contributor.
The project maintainers disclaim all liability for any uploaded materials.

⸻

💬 Questions or Feedback?

Feel free to open an Issue or start a discussion.
We’d love to see your city, culture, and favorite local places featured on the site!

⸻

⭐ Star this repo to support global open travel knowledge!
