import React from "react";
import PropTypes from "prop-types";

import './layout.module.scss';
import Header from "../header/header";

const Layout = ({ children }) => (
  <React.Fragment>
    <Header />
    <main>{children}</main>
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;