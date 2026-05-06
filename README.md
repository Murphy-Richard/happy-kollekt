# HAPPY Program Field Data Collection

This is a structured version of the field data collection app.

## Folder Structure

- `index.html` - main page to open in the browser
- `indexx.html` - same page name kept for your existing workflow
- `css/styles.css` - all app styles
- `js/app.js` - all app behavior, form logic, validation, and submission
- `assets/icons/favicon.svg` - browser tab icon
- `manifest.json` - basic install/app metadata

## How To Run

Open `index.html` in a browser.

The page itself is local, but it still uses remote services for Tailwind, Google Fonts, and the Google Apps Script submission endpoint configured in `js/app.js`.

## Offline Submission Queue

The frontend now saves submissions locally when the device is offline or when the Google Apps Script endpoint cannot be reached.

- Pending records are stored in browser `localStorage` under `happy_pending_submissions`.
- The app retries automatically when the browser fires the `online` event.
- Successfully synced records are moved into the local `happy_db` cache.
- The status bar shows whether records are pending sync.

Keep the same `localQueueId` / `submissionId` fields in the Google Apps Script backend so duplicate prevention can be added server-side.

## Google Apps Script Backend

Use `apps-script/Code.gs` as the backend script for the Google Sheet.

Deployment steps:

1. Open the Google Sheet receiving the data.
2. Go to `Extensions > Apps Script`.
3. Replace the current `Code.gs` contents with `apps-script/Code.gs`.
4. Save the Apps Script project.
5. Deploy it as a Web App with access set to the intended users, or `Anyone` if field devices are not signed in.
6. Keep the deployed Web App URL in `CONFIG.API_ENDPOINT` inside `js/app.js`.

The backend intentionally does not use `.setHeader(...)`; Apps Script `ContentService` does not support that method and it caused sync failures.
