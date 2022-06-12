import { QueryClientProvider, QueryClient, QueryCache, MutationCache } from 'react-query';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import '../styles/globals.css';
import toast from 'react-hot-toast';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      toast.error(`Something went wrong: ${error.message}`);
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      toast.error(`入力に誤りがあります`);
    },
  }),
});

// Initialize MSW
initialize();

export const decorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
  ),
  // Provide the MSW addon decorator globally
  mswDecorator,
];
