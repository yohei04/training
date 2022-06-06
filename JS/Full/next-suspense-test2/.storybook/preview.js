import { QueryClientProvider, QueryClient } from 'react-query';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import '../styles/globals.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const queryClient = new QueryClient();
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
