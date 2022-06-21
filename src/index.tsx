import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from './globalStyles';
import GlobalHelmet from './globalHelmet';
import {ThemeProvider} from 'styled-components';
import {globalTheme} from './theme';
import Header from './components/Header';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={globalTheme}>
            <GlobalStyle />
            <GlobalHelmet />
            <Header />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
