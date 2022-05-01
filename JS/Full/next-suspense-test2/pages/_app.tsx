import '../styles/globals.css';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import type { AppProps } from 'next/app';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 1000 * 60,
      cacheTime: 0,
      retry: 0,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
