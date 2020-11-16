import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Loading from './Components/Loading';

const App = lazy(() => import('./App'));

ReactDOM.render(
  <Suspense fallback={Loading()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
