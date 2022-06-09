import './fast-refresh-fix';
import { createRoot } from 'react-dom/client';
import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { Welcome } from './components/Welcome';
import { ErrorLayout } from './components/ErrorLayout';
import { MainLayout } from './components/MainLayout';
import { PageLayout } from './components/PageLayout';
import { init } from './common/i18n';
import { useState } from 'react';
// import 'bootstrap'; // Can be changed to specific modules. eg. import 'bootstrap/js/dist/util'; Refer : https://getbootstrap.com/docs/5.0/customize/optimize/
require('./main.scss');

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  // load locale files
  const locale = localStorage.getItem('locale') || 'en';
  init(locale).then(() => {
    setLoading(false);
  }).catch(() => {
    setError('Oops something went wrong');
  });

  return (
    <>
      {
        loading && <h4>Loading......</h4>
      }
      {
        error && <h4>{error}</h4>
      }
      {
        !loading && !error &&
        <Router>
          <Routes>
            <Route path="error" element={<ErrorLayout />} />
            <Route path="view" element={<MainLayout />}>
              {/* In case you need index route for main layout */}
              <Route index element={<h4>Index route for main layout</h4>} />
              {/* Inner Routes for main layout */}
              <Route path=":pageId" element={<PageLayout />} />
            </Route>
            <Route path="/" element={<Welcome />} />
          </Routes>
        </Router>
      }
    </>
  );
};

const root = createRoot(document.getElementById('eui-app-container'));
root.render(<App />);
