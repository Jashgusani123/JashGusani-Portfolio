import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

import { CursorGlow } from "@/components/portfolio/BackgroundFX";

function NotFoundComponent() {
  return (
    <>
      <CursorGlow />

      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="text-7xl font-bold text-foreground">404</h1>

          <h2 className="mt-4 text-xl font-semibold text-foreground">
            Page not found
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="mt-6">
            <Link
              to="/"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-[#D53E0F]
                px-5
                py-2.5
                text-sm
                font-medium
                text-white
                transition-all
                hover:scale-105
                hover:shadow-[0_0_25px_rgba(213,62,15,0.35)]
              "
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);

  const router = useRouter();

  return (
    <>
      <CursorGlow />

      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="text-xl font-semibold tracking-tight text-foreground">
            This page didn't load
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Something went wrong on our end. You can try refreshing or head back
            home.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => {
                router.invalidate();
                reset();
              }}
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-[#D53E0F]
                px-5
                py-2.5
                text-sm
                font-medium
                text-white
                transition-all
                hover:scale-105
                hover:shadow-[0_0_25px_rgba(213,62,15,0.35)]
              "
            >
              Try again
            </button>

            <a
              href="/"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-[#D53E0F]/20
                bg-[#F3F4F4]
                px-5
                py-2.5
                text-sm
                font-medium
                text-[#2C2C2C]
                transition-all
                hover:border-[#D53E0F]
                hover:text-[#D53E0F]
              "
            >
              Go home
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },

      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },

      {
        title:
          "Jash Gusani — Full-Stack Developer & AI Integration Enthusiast",
      },

      {
        name: "description",
        content:
          "Portfolio of Jash Gusani — Full-Stack Developer building real-time experiences, AI-powered solutions, modern web applications, and developer-focused tools.",
      },

      {
        name: "keywords",
        content:
          "Jash Gusani, Full Stack Developer, React Developer, MERN Stack Developer, AI Integration, Portfolio Website, JavaScript Developer, Node.js Developer",
      },

      {
        name: "author",
        content: "Jash Gusani",
      },

      {
        name: "application-name",
        content: "Jash Gusani",
      },

      {
        property: "og:site_name",
        content: "Jash Gusani",
      },

      {
        name: "google-site-verification",
        content: "LEcuQz9qY_TqMDAziK7u7xykoTLIW7JqSn_mrX3MPkM",
      },

      {
        name: "robots",
        content: "index, follow",
      },

      {
        name: "theme-color",
        content: "#D53E0F",
      },

      /* Open Graph */
      {
        property: "og:title",
        content:
          "Jash Gusani — Full-Stack Developer & AI Integration Enthusiast",
      },

      {
        property: "og:description",
        content:
          "Building real-time experiences, AI-powered solutions, and modern web applications.",
      },

      {
        property: "og:type",
        content: "website",
      },

      {
        property: "og:url",
        content: "https://jashgusani.vercel.app/",
      },

      {
        property: "og:image",
        content: "https://jashgusani.vercel.app/og-image.png",
      },

      /* Twitter */
      {
        name: "twitter:card",
        content: "summary_large_image",
      },

      {
        name: "twitter:title",
        content:
          "Jash Gusani — Full-Stack Developer & AI Integration Enthusiast",
      },

      {
        name: "twitter:description",
        content:
          "Building real-time experiences, AI-powered solutions, and modern web applications.",
      },

      {
        name: "twitter:image",
        content: "https://jashgusani.vercel.app/og-image.png",
      },
    ],

    links: [
      /* Main CSS */
      {
        rel: "stylesheet",
        href: appCss,
      },

      /* Canonical */
      {
        rel: "canonical",
        href: "https://jashgusani.vercel.app/",
      },

      /* Favicon */
      {
        rel: "icon",
        href: "/favicon.ico",
      },

      {
        rel: "apple-touch-icon",
        href: "/favicon.ico",
      },

      /* Fonts */
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },

      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },

      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
    ],
  }),

  shellComponent: RootShell,

  component: RootComponent,

  notFoundComponent: NotFoundComponent,

  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>

      <body>
        {children}

        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}