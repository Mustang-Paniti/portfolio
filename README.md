# Senior Graphic Designer Portfolio (TH / EN)

Modern interactive portfolio built with React, Vite, Tailwind CSS and Lucide icons.

## Requirements
- Node.js 20 or newer
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL shown in your terminal (usually http://localhost:5173).

## Customize before publishing
1. Open `src/data.js` and review the verified resume-based profile, then add your real email, social links, and project descriptions.
2. **All 6 project cards are empty placeholders, not claims of completed work.** Replace with your actual work.
3. Put optimized images in `public/images/`, then update project `image` values to `./images/your-file.jpg`.
4. For a resume button, place `resume.pdf` in `public/` and set `resume: './resume.pdf'` in `src/data.js`.
5. Adjust Thai and English texts in `src/main.jsx` under `translations`.
6. Replace the page title, meta description and favicon in `index.html`.
7. No stock images are used. The cards show neutral placeholders until you supply your own images.

## Build
```bash
npm run build
npm run preview
```

## Deploy on GitHub Pages (recommended: GitHub Actions)
1. Create a new GitHub repository (e.g. `designer-portfolio`).
2. In the project folder, run:
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/designer-portfolio.git
git push -u origin main
```
3. In GitHub, open **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Open the **Actions** tab and wait for **Deploy to GitHub Pages** to complete. If needed, run the workflow manually.
5. Your site should appear at `https://YOUR_USERNAME.github.io/designer-portfolio/`.
6. For later updates, commit and push to `main` again.

### Notes
- `vite.config.js` sets `base: './'`, so asset paths work for GitHub Pages project repositories.
- GitHub Pages is static hosting; the contact button uses `mailto:` rather than a backend form.
- If your repository is private, GitHub Pages availability depends on your account and repository settings.
- No custom domain is needed.

## File structure
```
senior-designer-portfolio/
├── .github/workflows/deploy.yml  # GitHub Pages deployment
├── public/images/                # Add real project images here
├── src/
│   ├── data.js                   # Personal profile and projects
│   ├── index.css                 # Tailwind and animations
│   └── main.jsx                  # React UI + TH/EN translations
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## เพิ่มภาพผลงาน / Add your images
1. เตรียมไฟล์ภาพจริงที่มีสิทธิ์เผยแพร่ (แนะนำ WebP หรือ JPG ขนาดกว้าง 1400–2000 px)
2. วางภาพไว้ที่ `public/images/` เช่น `public/images/hotpot-keyvisual.webp`
3. เปิด `src/data.js` แล้วแก้ `image: ''` ของโปรเจกต์ที่ต้องการเป็น `image: './images/hotpot-keyvisual.webp'`
4. แก้ `titleTh`, `title`, `client`, `year`, `descriptionTh`, `description` ให้ตรงกับผลงานจริง
5. เปิดดูด้วย `npm run dev` และทดสอบทั้งภาษาไทย/อังกฤษ บนคอมพิวเตอร์และมือถือ
6. เพิ่มรูปได้โดยเพิ่ม object ใน `projects` ตามโครงสร้างเดิม

## Thai typography QA
- ใช้ `Noto Sans Thai` พร้อม `font-synthesis:none` และ line-height ที่เผื่อสระ/วรรณยุกต์
- ข้อความไทยถูกปรับแก้ให้อ่านง่ายและหลีกเลี่ยงการบีบระยะบรรทัดของหัวข้อ
- ตรวจผลจริงอีกครั้งใน Chrome, Edge, Safari และบนมือถือ เพราะการเรนเดอร์อาจแตกต่างกันตามระบบ
- Resume ต้นฉบับมีช่วงงานถึง 2024; ประสบการณ์ 12+ ปีหมายถึงสายงานสร้างสรรค์โดยรวมตั้งแต่ 2014 ไม่ใช่ Graphic Design ทั้งหมด
