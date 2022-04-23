import '../styles/globals.css';

import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

import type { AppProps } from 'next/app';
function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <Component {...pageProps} />
    // <QueryClientProvider client={queryClient}>
    //   <Hydrate state={pageProps.dehydratedState}>
    //     <Component {...pageProps} />
    //   </Hydrate>
    // </QueryClientProvider>
  );
}

export default MyApp;
