# YASU Premium Car Rental

A responsive, premium Indonesian car-rental website prototype built with plain HTML/CSS/JavaScript.

## Run locally
1. Extract the folder.
2. Open `index.html`, or serve it with any static server.
3. Example with Node:
   `npx serve . -l 3002`
4. Visit `http://localhost:3002`

## Configure WhatsApp
Open `app.js` and set:
`const WHATSAPP_NUMBER = "628xxxxxxxxxx";`
Use international format without `+`, spaces, or dashes.

## Notes
- Vehicle data, prices, locations, and contact details are centralized in `app.js` / HTML for easy replacement.
- The UI includes responsive navigation, booking validation, fleet filters/sorting, vehicle detail modal, pricing table, FAQ accordion, review carousel, countdown, and WhatsApp CTA.
- Replace the Unsplash image URLs with your licensed production vehicle photography before deployment.
- This is a front-end booking experience; real availability, payment processing, authentication, database persistence, and server-side booking confirmation require a backend/API integration.
