# Gemini Pro landing page

Next.js 15, React 19, TypeScript, Tailwind CSS 4, Lucide, locally hosted Inter.

## Run

npm install
npm run dev -- --port 3017
npm run build
npm start -- --port 3017

All prices, duration, WhatsApp number and the generated order message are centralized in lib/offer.ts. PayPal and Binance Pay are described in the FAQ; payment is arranged on WhatsApp, not collected by this site.

## Before commercial launch

Complete the operator identity/address and hosting details in app/informations/page.tsx. Confirm and publish activation eligibility, fulfillment timing, refund terms, and personal-data retention details. No Google affiliation or unconditional refund promise is claimed.

## Artwork

Built-in image generation produced public/hero-cyborg.png and public/earth-orbit.png. The provided ref-UIUX-design.png was used as the primary layout and robot style reference.

Hero prompt: Premium photorealistic silver female cyborg in left-facing profile, cyan eye and headset illumination, magenta neck wiring, dark navy space and blue/purple orbital arcs; no logos or text.

Earth prompt: Cinematic dark navy space, realistic Earth night horizon at lower right with electric cyan atmosphere, purple city lights and a thin violet orbital arc at left; no logos or text.

## Verification

Production build and TypeScript validation pass. npm audit reports zero vulnerabilities with the PostCSS override. Browser verification covers responsive layout and FAQ behavior; see the delivery notes for any remaining limitations.
