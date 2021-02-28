import React from 'react'
import Nav from '../nav/Nav'

import "./layout.css";

import Footer from '../footer/Footer';
import Heading from '../heading/Heading';

type LayoutPros = {}

const Layout: React.FC<LayoutPros> = ({ children }) => {

    // TODO: Move each section to its own component class
    // TODO: Add typing animation to heading component
    // TODO: Add REGEX and highlight email addresses in the input control container in diff color

    return (
        <main className="grid-container">
            <Nav brandName="Extract Email Addresses" />
            <Heading text="Export Outlook email recepients email addresses" />
            {children}
            <Footer />
        </main>
    )
}

export default Layout
