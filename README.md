# Limepack Plastic Cups Category Prototype

Responsive frontend prototype for Limepack's custom printed plastic cups
category page. The project includes a guided cup matcher, product comparison,
trust content, supporting product information, and customer reviews.

## Tech stack

- Next.js 16 with the App Router
- React 19
- TypeScript in strict mode
- Tailwind CSS 4
- Lucide React
- Vitest
- ESLint and Prettier

## Requirements

- Node.js 20.9 or newer
- npm

No environment variables or external services are required.

## Getting started

Install the locked dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The page uses product and brand imagery hosted by Limepack, so an internet
connection is required for remote images.

## Available scripts

| Command                | Description                          |
| ---------------------- | ------------------------------------ |
| `npm run dev`          | Start the local development server   |
| `npm run build`        | Create an optimized production build |
| `npm run start`        | Serve the production build           |
| `npm run lint`         | Run ESLint                           |
| `npm run test`         | Run the Vitest test suite            |
| `npm run format:check` | Check formatting with Prettier       |
| `npm run format:fix`   | Format supported files with Prettier |

## Production build

```bash
npm run build
npm run start
```

The production server is available at
[http://localhost:3000](http://localhost:3000) by default.

## Project structure

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  features/
    category-page/
      components/
      data/
      model/
    product-selection/
      components/
      data/
      model/
  shared/
    components/
    lib/
```

- `src/app` contains the route composition, global styles, and metadata.
- `src/features/category-page` owns the hero, trust, supporting content, and
  reviews.
- `src/features/product-selection` owns product data, recommendation logic,
  comparison cards, and the interactive matcher.
- `src/shared` contains reusable interface primitives and class utilities.

Static page sections use Server Components by default. Client Components are
limited to interactive features such as the cup matcher, accordion, and review
carousel.

## Data and tests

Product details and destination URLs are defined in
`src/features/product-selection/data`. Recommendation logic is implemented as a
pure TypeScript function in `src/features/product-selection/model` and is
covered by focused Vitest boundary tests.

## Prototype notes

- The prototype has no backend, authentication, checkout, or PrestaShop
  integration.
- Product actions link to the corresponding Limepack product pages.
- Pricing and review content is indicative prototype data and must be verified
  before production use.
- Metadata intentionally sets `noindex, nofollow` to prevent the prototype from
  competing with Limepack's live website.
