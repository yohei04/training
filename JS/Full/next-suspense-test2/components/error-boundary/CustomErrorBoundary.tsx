import { FC, ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useQueryErrorResetBoundary } from 'react-query';

type Props = {
  children: ReactNode;
};

export const CustomErrorBoundary: FC<Props> = ({ children }) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({ resetErrorBoundary }) => (
        <div>
          There was an error!
          <button onClick={() => resetErrorBoundary()}>Try again</button>
        </div>
      )}
    >
      {children}
    </ErrorBoundary>
  );
};
