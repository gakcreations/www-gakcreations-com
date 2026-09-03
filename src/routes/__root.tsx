import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  useLocation,
} from "@tanstack/react-router";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import {
  DEFAULT_SEO_DESCRIPTION,
  DEFAULT_SEO_TITLE,
  DEFAULT_SOCIAL_IMAGE,
  DEFAULT_SOCIAL_IMAGE_ALT,
  seoMeta,
} from "@/lib/seo";
import {
  GA_IS_ENABLED,
  GA_SCRIPT_SRC,
  initializeAnalytics,
  trackPageView,
} from "@/lib/analytics";

const gaScripts = GA_IS_ENABLED && GA_SCRIPT_SRC
  ? [
      {
        src: GA_SCRIPT_SRC,
        async: true,
      },
    ]
  : [];

const CLARITY_PROJECT_ID = "xy2c2koura";
const GTM_CONTAINER_ID = "GTM-TT4MZQKT";

// Clarity is loaded directly (not as a GTM tag) so heatmaps and session
// recordings start capturing before GTM finishes loading, and so recording
// never depends on the container being published. Do NOT also add a Clarity
// tag inside GTM-TT4MZQKT — that would load the tracker twice and duplicate
// sessions.
const clarityScripts = [
  {
    children: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");`,
  },
];

const gtmScripts = [
  {
    children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');`,
  },
];


const klaviyoScripts = [
  {
    src: "https://static.klaviyo.com/onsite/js/TTmVue/klaviyo.js?company_id=TTmVue",
    async: true,
    type: "text/javascript",
  },
  {
    children: `!function(){if(!window.klaviyo){window._klOnsite=window._klOnsite||[];try{window.klaviyo=new Proxy({},{get:function(n,i){return"push"===i?function(){var n;(n=window._klOnsite).push.apply(n,arguments)}:function(){for(var n=arguments.length,o=new Array(n),w=0;w<n;w++)o[w]=arguments[w];var t="function"==typeof o[o.length-1]?o.pop():void 0,e=new Promise((function(n){window._klOnsite.push([i].concat(o,[function(i){t&&t(i),n(i)}]))}));return e}}})}catch(n){window.klaviyo=window.klaviyo||[],window.klaviyo.push=function(){var n;(n=window._klOnsite).push.apply(n,arguments)}}}}();`,
    type: "text/javascript",
  },
];

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#f2ede6" },
      ...seoMeta({
        path: "/",
        title: DEFAULT_SEO_TITLE,
        description: DEFAULT_SEO_DESCRIPTION,
        image: {
          path: DEFAULT_SOCIAL_IMAGE,
          alt: DEFAULT_SOCIAL_IMAGE_ALT,
        },
      }),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "apple-touch-icon", href: "/images/Logo GAK Creations copy.png" },
      { rel: "manifest", href: "/site.webmanifest" },

      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Karla:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [...gtmScripts, ...clarityScripts, ...gaScripts, ...klaviyoScripts],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const location = useLocation();

  useEffect(() => {
    initializeAnalytics();
  }, []);

  useEffect(() => {
    initializeAnalytics();
    const page = `${location.pathname}${location.searchStr ?? ""}${location.hash ?? ""}`;
    trackPageView(page);

    // Client-side route changes are not full page loads, so tell GTM and
    // Clarity about them explicitly. Without this, heatmaps and recordings
    // for the artwork and buyer-intent pages get attributed to the entry URL.
    const w = window as typeof window & {
      dataLayer?: Record<string, unknown>[];
      clarity?: (...args: unknown[]) => void;
    };
    w.dataLayer = w.dataLayer ?? [];
    w.dataLayer.push({ event: "spa_page_view", page_path: page, page_title: document.title });
    w.clarity?.("set", "page_path", location.pathname);
  }, [location.pathname, location.searchStr, location.hash]);


  return (
    <>
      <HeadContent />
      <QueryClientProvider client={queryClient}>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
        <Analytics />
        <SpeedInsights />
      </QueryClientProvider>
    </>
  );
}
