import React from 'react';
import logo from './logo.svg';
import Nav from './components/layouts/nav/Nav';

import SingleContent from './components/layouts/content/SingleContent';


const App = () => {
    return (
        <>
            <Nav brandName="Email Extractor" />
            <SingleContent />
        </>
    )
}

export default App;
