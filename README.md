This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Contact Form Delivery

The contact form sends inquiries to `williamspraise01@gmail.com` through the Resend Email API. Add the server-only environment variable below in `.env.local` for development and in the deployment environment for production:

```bash
RESEND_API_KEY=re_your_api_key
```

When the Resend account uses `williamspraise01@gmail.com`, the default `onboarding@resend.dev` sender can deliver test inquiries to that inbox. To send from a branded address after verifying a domain in Resend, also set:

```bash
CONTACT_FROM_EMAIL="Williams Praise Portfolio <contact@your-domain.com>"
```

## Product Screenshots

The project gallery uses stable screenshot slots. Export approved SVG captures directly to these paths to replace the current presentation assets without updating code:

```txt
public/images/projects/shoppergetit/cover.svg
public/images/projects/shoppergetit/shopper-dashboard.svg
public/images/projects/shoppergetit/vendor-console.svg
public/images/projects/shoppergetit/admin-operations.svg
public/images/projects/pam-ai/cover.svg
public/images/projects/pendulum-school/cover.svg
public/images/projects/springboard-mentorship/cover.svg
```

Keep exports at a consistent `1200 x 760` aspect ratio where possible so cards and case-study images remain visually stable.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
