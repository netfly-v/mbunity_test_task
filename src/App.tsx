import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Normalize} from 'styled-normalize';
import {AppLayout} from './components/Layout';
import Routes from './Routes';
import {defaultTheme} from './ui-kit/theme/theme';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Normalize />
      <AppLayout>
        <Routes />
      </AppLayout>
    </ThemeProvider>
  );
};

export default App;
