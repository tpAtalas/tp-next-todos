import { LayoutApp } from '@components/layouts/layoutApp';
import { ErrorState } from '@components/loadable/errorState';
import { LoadingState } from '@components/loadable/loadingState';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const TodoList = dynamic(() => import('components/todos/todoList').then((mod) => mod.TodoList), {
  ssr: false,
});

const App = () => {
  return (
    <LayoutApp>
      <div className='flex flex-col items-center'>
        <ErrorBoundary fallback={<ErrorState />}>
          <Suspense fallback={<LoadingState />}>
            <TodoList />
          </Suspense>
        </ErrorBoundary>
      </div>
    </LayoutApp>
  );
};
export default App;
