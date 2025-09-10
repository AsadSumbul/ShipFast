import themes from "daisyui/src/theming/themes.js";

const config = {
  // REQUIRED
  appName: "AsadBiz",
  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: "asadbiz.com",
  crisp: {
    // Crisp website ID. IF YOU DON'T USE CRISP: just remove this => Then add a support email in this config file (mailgun.supportEmail) otherwise customer support won't work.
    id: "",
    // Hide Crisp by default, except on route "/". Crisp is toggled with <ButtonSupport/>. If you want to show Crisp on every routes, just remove this below
    onlyShowOnRoutes: ["/"],
  },
  stripe: {
    // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
    plans: [
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_starter_seo"
            : "price_456",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "SEO Starter",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Perfect for small businesses getting started with SEO",
        // The price you want to display, the one user will be charged on Stripe.
        price: 299,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: 399,
        features: [
          {
            name: "Complete SEO audit",
          },
          { name: "Keyword research (up to 50 keywords)" },
          { name: "On-page optimization" },
          { name: "Technical SEO fixes" },
          { name: "Monthly progress report" },
          { name: "Email support" },
        ],
      },
      {
        // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true
        isFeatured: true,
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_professional_seo"
            : "price_456",
        name: "SEO Professional",
        description: "For growing businesses that need comprehensive SEO",
        price: 599,
        priceAnchor: 799,
        features: [
          {
            name: "Everything in SEO Starter",
          },
          { name: "Keyword research (up to 200 keywords)" },
          { name: "Competitor analysis" },
          { name: "Link building strategy" },
          { name: "Local SEO optimization" },
          { name: "Bi-weekly progress reports" },
          { name: "Priority support" },
        ],
      },
      {
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_enterprise_seo"
            : "price_789",
        name: "SEO Enterprise",
        description: "For large businesses with complex SEO needs",
        price: 1299,
        priceAnchor: 1599,
        features: [
          {
            name: "Everything in SEO Professional",
          },
          { name: "Unlimited keyword research" },
          { name: "Advanced competitor analysis" },
          { name: "Custom link building campaigns" },
          { name: "Multi-location SEO" },
          { name: "Weekly progress reports" },
          { name: "Dedicated account manager" },
          { name: "Phone & email support" },
        ],
      },
    ],
  },
  aws: {
    // If you use AWS S3/Cloudfront, put values in here
    bucket: "bucket-name",
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },
  mailgun: {
    // subdomain to use when sending emails, if you don't have a subdomain, just remove it. Highly recommended to have one (i.e. mg.yourdomain.com or mail.yourdomain.com)
    subdomain: "mg",
    // REQUIRED — Email 'From' field to be used when sending magic login links
    fromNoReply: `AsadBiz <noreply@mg.asadbiz.com>`,
    // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
    fromAdmin: `Asad at AsadBiz <asad@mg.asadbiz.com>`,
    // Email shown to customer if need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support."
    supportEmail: "asad@mg.asadbiz.com",
    // When someone replies to supportEmail sent by the app, forward it to the email below (otherwise it's lost). If you set supportEmail to empty, this will be ignored.
    forwardRepliesTo: "asad@asadbiz.com",
  },
  colors: {
    // REQUIRED — The DaisyUI theme to use (added to _document.js). Leave blank for default (light & dark mode). If you any other theme than light/dark, you need to add it in config.tailwind.js in daisyui.themes.
    theme: "light",
    // REQUIRED — This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc..). By default it takes the primary color from your DaisyUI theme (make sure to update your the theme name after "data-theme=")
    // OR you can just do this to use a custom color: main: "#f37055". HEX only.
    main: themes[`[data-theme=light]`]["primary"],
  },
  // REQUIRED — the path you want to redirect users after successfull login (i.e. /dashboard, /private). This is normally a private page for users to manage their accounts. It's used in apiClient (/libs/api.js) upon 401 errors from our API & /hooks/usePrivate.js
  callbackUrl: "/dashboard",
};

export default config;
