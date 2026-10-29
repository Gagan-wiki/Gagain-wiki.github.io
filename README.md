# Gagan Reddy — Developer Portfolio

A responsive, animated dark-theme portfolio built with plain HTML, CSS, and JavaScript. It requires no framework, package manager, or build step.

## Project structure

```text
miracle_portfolio/
├── index.html      # Page content and section structure
├── style.css       # Theme, layout, responsive styles, animations
├── script.js       # Navigation, reveal animations, links, footer year
├── favicon.svg     # Custom browser-tab icon
└── README.md       # Setup, customization, and hosting guide
```

## 1. Run on your laptop

1. Download and extract `miracle_portfolio.zip`.
2. Open the extracted `miracle_portfolio` folder in VS Code.
3. Open `index.html` in a browser.
4. Optional: install the **Live Server** extension in VS Code, right-click `index.html`, and choose **Open with Live Server**.

This is a static website. No `npm install`, backend, database, or API key is required.

## 2. Personalize before you publish

Open `script.js`. Replace these placeholders with your own details:

- `YOUR_EMAIL@example.com`
- `https://github.com/YOUR_USERNAME`
- `https://www.linkedin.com/in/YOUR_PROFILE/`
- The four example repository links under `projects`

Also update the page text in `index.html` if you want to change the headline, bio, or project descriptions.

### Important accuracy check

The Loan Approval Prediction project displays **94.55% test accuracy**, based on project details previously supplied. Keep the number only if it matches your final model evaluation and you can explain the dataset split, metrics, and methodology in an interview. Otherwise edit or remove the metric.

The project artwork is illustrative; replace it with real screenshots if you have them. Only link to projects that you can show and explain. Do not add your college roll number or other private information to a public portfolio.

## 3. Host for free with GitHub Pages

1. Sign in to GitHub and create a new repository, for example `gagan-portfolio`.
2. Upload the five files in this folder to the **repository root** (not inside an extra nested folder).
3. Open the repository's **Settings → Pages**.
4. In **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.
6. Wait for GitHub Pages to publish. Copy the URL shown on the Pages settings screen.
7. Open that URL on your phone and laptop. Check all navigation, contact, and project links.

If Pages does not appear, make sure the repository has been created and you have permission to change its settings. Publishing can take a few minutes.

## 4. Alternative hosting: Vercel

1. Push these files to a GitHub repository.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import your repository.
4. For this plain static website, no build command is required. If Vercel asks for an output directory, use `.` (the repository root).
5. Deploy, then open the deployment URL and test the site.

## 5. Pre-publish checklist

- [ ] Replace every placeholder in `script.js`.
- [ ] Confirm project links point to your actual repositories.
- [ ] Verify every claim, skill, and metric is accurate.
- [ ] Add clear README files to the individual project repositories.
- [ ] Check the site on mobile and desktop.
- [ ] Click every link and test the mobile navigation.
- [ ] Keep project datasets and credentials private when needed.

## Troubleshooting

- **Links go to the wrong place:** update the values in `script.js`.
- **Styles do not load on GitHub Pages:** ensure `style.css` is in the repository root and its name matches exactly.
- **Changes are not visible:** wait a minute, hard-refresh the browser, and check the latest deployment status.
- **Google Fonts do not load:** the browser will fall back to system sans-serif fonts; the site still works.
