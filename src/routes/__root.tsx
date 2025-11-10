import { ClerkProvider } from '@clerk/clerk-react';
import { TanStackDevtools } from '@tanstack/react-devtools';
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';

import appCss from '../styles.css?url';

import Header from '@/components/header/Header';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        title: 'TanStack Start Starter'
      }
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss
      }
    ]
  }),

  shellComponent: RootDocument
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <html lang='en'>
        <head>
          <HeadContent />
        </head>
        <body className='flex-vol flex min-h-screen antialiased'>
          <Header />
          <main className='mx-auto w-full max-w-7xl p-5 pt-24'>{children}</main>
          <div className='flex-1' />
          <TanStackDevtools
            config={{
              position: 'bottom-right'
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />
              }
            ]}
          />
          <Scripts />
        </body>
      </html>
    </ClerkProvider>
  );
}
