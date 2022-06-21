import React from 'react';
import {Helmet} from 'react-helmet';

const GlobalHelmet = () => (
    <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;700&display=swap"
            rel="stylesheet"
        />
    </Helmet>
);

export default GlobalHelmet;
