import { Navigation, Wrapper, LoadingIndicator, Button } from 'components';
import Budget from 'pages/Budget';
import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import GlobalStyles from 'index.css';

import React from 'react';

function App({ budget, fetchBudget, fetchBudgetedCategories }) {
  const { i18n } = useTranslation();
  return (
    <>
      <GlobalStyles />

      <Router>
        <Navigation
          items={[
            { content: 'Home', to: '/' },
            { content: 'Budget', to: '/budget' },
          ]}
          RightElement={
            <div>
              <Button onClick={() => i18n.changeLanguage('pl')}>PL</Button>
              <Button onClick={() => i18n.changeLanguage('en')}>EN</Button>
            </div>
          }
        />
        <Wrapper>
          <Switch>
            <Route exact path='/'>
              Homepage
            </Route>
            <Route path='/budget'>
              <Budget />
            </Route>
          </Switch>
        </Wrapper>
      </Router>
    </>
  );
}

function RootApp() {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<LoadingIndicator />}>
        <App />
      </React.Suspense>
    </ThemeProvider>
  );
}
export default RootApp;
