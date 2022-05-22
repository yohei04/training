import '../styles/globals.css';

import { ClickToComponent } from 'click-to-react-component';
import toast from 'react-hot-toast';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';
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
  queryCache: new QueryCache({
    onError: (error: any, query) => {
      // 🎉 only show error toasts if we already have data in the cache
      // which indicates a failed background update
      // if (query.state.data !== undefined) {
      toast.error(`Something went wrong: ${error.message}`);
      // }
    },
  }),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ClickToComponent />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
