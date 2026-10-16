# Muslim Engineering Student Society Website

One-page website for the Muslim Engineering Student Society at the University of Houston, built with Next.js, React, TypeScript, and Tailwind CSS.

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Manage Events in Zoho Calendar

The Events section uses the official **native Zoho Calendar embed**, in **monthly view** and the **America/Chicago** timezone. All event content comes from Zoho; there is no local event file, database, or admin dashboard.

### Add, edit, or delete an event

1. Sign in to [Zoho Calendar](https://calendar.zoho.com/) with an account that can edit the official MESS calendar.
2. Select the MESS calendar. Make sure new events belong to this calendar rather than a personal calendar.
3. Create an event and enter its title, date, start/end times, location, and description. Use America/Chicago for Houston scheduling. Include any registration link in the event details.
4. To change an event, open it in Zoho, edit its details, and save. To remove an event, delete it in Zoho.
5. Open the website's Events section or use **Open MESS Calendar** to check the public calendar. Allow for Zoho's refresh/caching behavior and reload if necessary.

Once this integration is deployed, adding, editing, or deleting events in Zoho does **not** require a GitHub commit or a website redeployment. Keep the calendar's public sharing/embed access enabled so visitors can view it without signing in. The embed's presentation and event detail behavior are controlled by Zoho and the supplied embed settings.

### Embed configuration

The official embed URL is defined once in `components/Events.tsx` and shared by the iframe and the **Open MESS Calendar** fallback link. It preserves `view=month`, `showSwitchingViews=0`, and `timezone=America%2FChicago`, along with the other supplied Zoho settings. The iframe fills its container up to 1024px wide, with responsive heights of 700px on phones and 650px on larger screens. Phones use the full available width so Zoho's native toolbar fits on narrow screens.

Only replacing the calendar or changing its embed settings requires editing this component and redeploying. No Zoho API key or additional dependency is required. The fallback opens the same Zoho embed URL in a new tab if visitors prefer a separate window or the embedded view is unavailable.

### Check the integration

1. Run `npm run build`.
2. Run `npm run start`, open the site, and follow the Events link in the desktop or mobile navbar.
3. Check the monthly calendar on desktop, tablet, and phone widths, including the Chicago timezone label.
4. Click **Open MESS Calendar** and confirm that the same calendar opens in a new tab.
5. After making a real event update in Zoho, verify it appears in the public calendar, allowing for Zoho's refresh behavior.

## Edit Placeholder Content

Most editable organization content is in `lib/siteContent.ts`:

- Officer names
- Officer roles
- Sign-up link
- Email
- Instagram
- LinkedIn
- GroupMe/Discord link

## Deploy to Vercel

1. Push this project to GitHub.
2. Go to `https://vercel.com/new`.
3. Import the GitHub repository.
4. Keep the detected framework as Next.js.
5. Click Deploy.
