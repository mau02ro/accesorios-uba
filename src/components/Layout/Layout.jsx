import React from "react";

import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Header />
      <div className="wrapper layout_wrapper">{children}</div>
    </div>
  );
};

export default Layout;
