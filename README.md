# Mountain Guide

A website to compare weather conditions at various ski resorts in the United States, and get recommendations from an AI guide.

[Live site](https://mountain-comparer.vercel.app/ 'Mountain Guide')

To use, go to the guide page and:

1. Choose a date. _(Limited to the next 5 days due to OpenWeather API free tier API restrictions)_
2. Select which passes you would like to see mountains for. _Currently only Epic and Ikon passes are available as options._
3. Select a region of the country
4. Select a mountain
5. Click 'Go'
6. Repeat! You can compare the weather for up to 5 mountains on the same date. Choosing a different date will reset the page.

You can also click <img src="AI-button.png" style="border-radius: 100px; transform: translateY(8px);"  width="30" height="30"> to open a chat with the AI guide to ask for a recommendation.

_Jamie Smart 2021_

## Developing

Environment variables needed. Update `.env.template` with these and rename the file to `.env`:

1. `APIKEY` for OpenWeather
2. `GEMINI_API_KEY` for Google Gemini API

<hr>
<br />

Install dependencies with `npm install` (or `pnpm install` or `yarn`) and start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
